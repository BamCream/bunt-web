import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/index'

const SidebarLayout = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <main style={{ flex: 1, paddingLeft: '15rem', height: '100vh' }}>
      <Outlet />
    </main>
  </div>
)

export default SidebarLayout
