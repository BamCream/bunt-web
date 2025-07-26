import './style.scss'
import Layout from 'src/components/common/layout'
import { Outlet } from 'react-router-dom'

const PageTemplate = () => {
  return (
    <div className="pageTemplate">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default PageTemplate
