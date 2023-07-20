import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Faq1 from './pages/help/Faq1'
import Faq2 from './pages/help/Faq2'
import Faq3 from './pages/help/Faq3'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from './pages/careers/CareersError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="faq/:item" element={<Faq1 />} />
        <Route path="faq/:item/:item" element={<Faq2 />} />
        <Route path="faq/:item/:item/:item" element={<Faq3 />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route 
          path=":id" 
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
