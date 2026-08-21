import Sidebar from './Sidebar'

function AuthWrapper({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

export default AuthWrapper