import { useState } from 'react'

const faqs = [
  { keywords: ['flavour', 'flavor', 'taste', 'available'], answer: 'We offer banana, vanilla, strawberry, yoghurt parfait, and Greek yoghurt (plain, sweetened or unsweetened, in 500ml or 1L).' },
  { keywords: ['price', 'cost', 'how much'], answer: 'Our regular flavours are GHS 12 (350ml), parfait is GHS 15, and Greek yoghurt ranges from GHS 35–70 depending on size. Check the Our Flavours page for full pricing!' },
  { keywords: ['deliver', 'delivery', 'shipping'], answer: 'Yes, we deliver! Just place your order through checkout with your address, and we\'ll contact you to confirm delivery.' },
  { keywords: ['order', 'buy', 'purchase'], answer: 'Browse Our Flavours, add items to your cart, then head to checkout — no account needed!' },
  { keywords: ['contact', 'phone', 'reach', 'call'], answer: 'You can reach us at 0538885992 or kedmer07entreprise@gmail.com.' },
  { keywords: ['location', 'where', 'address'], answer: 'We\'re based in Appiadu, Kumasi, Ghana.' },
  { keywords: ['ingredient', 'made', 'real fruit'], answer: 'Our yoghurt is made with fresh milk, real fruit, and live yoghurt culture — no unnecessary shortcuts. Check our About page for details per flavour!' },
]

function getBotReply(message) {
  const lower = message.toLowerCase()
  const match = faqs.find((faq) => faq.keywords.some((keyword) => lower.includes(keyword)))
  return match
    ? match.answer
    : "I'm not sure about that one — try asking about our flavours, prices, delivery, or how to order! Or reach us directly at 0538885992."
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! 👋 Ask me about our flavours, prices, delivery, or how to order." }
  ])
  const [input, setInput] = useState('')

  function handleSend(e) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    const botMessage = { sender: 'bot', text: getBotReply(input) }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInput('')
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 max-w-[90vw] bg-white border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-bold">Nammy Yoghurt Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl leading-none">×</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm max-w-[85%] ${
                  msg.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 self-start'
                    : 'bg-blue-600 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 border rounded-full px-3 py-2 text-sm"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl text-2xl hover:scale-105 transition-transform"
      >
        💬
      </button>
    </>
  )
}

export default ChatWidget