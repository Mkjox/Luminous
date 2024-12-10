import './App.css'
import { AppSidebar } from './components/app-sidebar'
import { ThemeProvider } from './components/theme-provider'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Router>
          <AppSidebar />
          <main>
            <SidebarTrigger className='trigger' />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </main>
        </Router>
      </SidebarProvider>
    </ThemeProvider >
  )
}

