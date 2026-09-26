import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

// Handles clicks directly on the map
function ClickHandler({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng)
    }
  })
  return null
}

// Recenters the map whenever `position` changes, from EITHER a click or a search selection
function MapRecenter({ position }) {
  const map = useMap()
  useEffect(() => {
    if (position) {
      map.flyTo(position, 15)
    }
  }, [position])
  return null
}

function LocationPicker({ onAddressSelected }) {
  const [position, setPosition] = useState(null)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loadingAddress, setLoadingAddress] = useState(false)
  const debounceRef = useRef(null)

  const defaultCenter = [6.6885, -1.6244] // Kumasi, Ghana

  // Debounced search-as-you-type against Nominatim's search endpoint
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (query.trim().length < 3) {
      setSuggestions([])
      return
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&countrycodes=gh&limit=5&q=${encodeURIComponent(query)}`
        )
        const data = await response.json()
        setSuggestions(data)
      } catch (error) {
        setSuggestions([])
      }
    }, 400) // waits 400ms after typing stops before searching

    return () => clearTimeout(debounceRef.current)
  }, [query])

  function selectSuggestion(place) {
    const latlng = { lat: parseFloat(place.lat), lng: parseFloat(place.lon) }
    setPosition(latlng)
    setQuery(place.display_name)
    setSuggestions([])
    onAddressSelected(place.display_name)
  }

  async function handleMapClick(latlng) {
    setPosition(latlng)
    setLoadingAddress(true)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`
      )
      const data = await response.json()
      const address = data.display_name || `${latlng.lat}, ${latlng.lng}`
      setQuery(address)
      onAddressSelected(address)
    } catch (error) {
      onAddressSelected(`${latlng.lat}, ${latlng.lng}`)
    } finally {
      setLoadingAddress(false)
    }
  }

  return (
    <div>
      {/* Search box with live suggestions */}
      <div className="relative mb-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type an address to search..."
          className="border p-2 rounded w-full"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-[1000] bg-white border rounded-lg shadow-lg w-full mt-1 max-h-48 overflow-y-auto">
            {suggestions.map((place) => (
              <li
                key={place.place_id}
                onClick={() => selectSuggestion(place)}
                className="p-2 text-sm hover:bg-blue-50 cursor-pointer border-b last:border-b-0"
              >
                {place.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-2">Or tap directly on the map</p>
      <div className="h-64 rounded-lg overflow-hidden border">
        <MapContainer center={defaultCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickHandler onSelect={handleMapClick} />
          <MapRecenter position={position} />
          {position && <Marker position={position} />}
        </MapContainer>
      </div>
      {loadingAddress && <p className="text-sm text-gray-500 mt-1">Looking up address...</p>}
    </div>
  )
}

export default LocationPicker