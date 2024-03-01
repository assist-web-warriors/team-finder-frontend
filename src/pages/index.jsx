import { Route, RouterProvider, Routes } from 'react-router-dom'
import CONSTANTS from '../common/constants'

const Router = () => {
  return (
    <RouterProvider>
      <Routes>
        <Route path={CONSTANTS.PAGES.DEPARTMENTS} element={<div>departments</div>} />
        <Route path={CONSTANTS.PAGES.PROJECTS} element={<div>projects</div>} />
        <Route path={CONSTANTS.PAGES.SKILS} element={<div>skils</div>} />
      </Routes>
    </RouterProvider>
  )
}

export default Router
