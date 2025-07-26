import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SidebarLayout from '../layout/index'
import Dex from 'src/pages/dex'
import Record from 'src/pages/record'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="dex" element={<Dex />} />
          <Route path="record" element={<Record />} />
          <Route path="upload" element={<div>Upload Page</div>} />
          <Route path="profile" element={<div>Profile Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
