import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SidebarLayout from '../layout/index'
import Dex from 'src/pages/dex'
import Record from 'src/pages/record'
import Upload from 'src/pages/upload'
import Profile from 'src/pages/profile'
import Home from 'src/pages/home'
import PostDetail from 'src/pages/post'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="dex" element={<Dex />} />
          <Route path="record" element={<Record />} />
          <Route path="upload" element={<Upload />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
