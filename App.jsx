import { createBrowserRouter, 
        Route,  
        createRoutesFromElements,  
        RouterProvider
      } from "react-router-dom"
     

// Pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Evidence from "./Pages/Evidence.jsx"
import Ghosts from "./Pages/Ghosts.jsx"
import GhostTimer from "./pages/GhostTimer.jsx"
import Equipment from "./pages/Equipment.jsx"
import Faq from "./Pages/Help/Faq.jsx"
import Terms from "./Pages/Help/Terms.jsx"
// Layouts
import RootLayout from "./RootLayouts.jsx/RootLayout.jsx"
import HelpLayout from "./RootLayouts.jsx/HelpLayout.jsx"

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="help" element={<HelpLayout /> }>
            <Route path="faq" element={<Faq />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="evidence/*" element={< Evidence/>} />
          <Route path="ghost/*" element={< Ghosts/>} /> 
          <Route path="ghosttimer" element={<GhostTimer />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="*" element={<NotFound />} />
          </Route>
  )
)

// App component
function App() {
  return (
    
      <RouterProvider router={router} />
    
  )

}

export default App
