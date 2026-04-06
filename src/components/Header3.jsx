import { useState, useEffect } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import logo from "@/assets/Logos/Medini_logo.png"
import buildspaceLogo from "@/assets/NAVBAR/Builddspace Whte.png"

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showLinks, setShowLinks] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  const phoneNumber = "919686311005"
  const handleClick = (e) => {
    e.preventDefault()
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <motion.nav
        className="bg-black text-white"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between p-4 px-4">
                     {/* Logo */}
           <NavLink to="/" className="flex items-center">
             <img src={buildspaceLogo} alt="Buildspace" className="h-8 ml-1" />
           </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className="px-4 py-2 bg-transparent hover:bg-white hover:text-black text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white"
            >
              Home
            </NavLink>
            <NavLink 
              to="/builddspace/about"
              className="px-4 py-2 bg-transparent hover:bg-white hover:text-black text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white"
            >
              About
            </NavLink>
            <NavLink 
              to="/builddspace/services"
              className="px-4 py-2 bg-transparent hover:bg-white hover:text-black text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white"
            >
              Services
            </NavLink>
            <NavLink 
              to="/builddspace/contact"
              className="px-4 py-2 bg-transparent hover:bg-white hover:text-black text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                <div
                  className={`absolute w-5 h-0.5 bg-white transition-all duration-500 ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-white transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-white transition-all duration-500 ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></div>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" onInteractOutside={() => setIsMobileMenuOpen(false)}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <Button variant="outline" className="w-full flex items-center bg-transparent hover:bg-white hover:text-black text-black border-white hover:border-white">
                  <SheetTrigger asChild className="md:hidden">
                    <Link to="/">Home</Link>
                  </SheetTrigger>
                </Button>
                
                <Button variant="outline" className="w-full flex items-center bg-transparent hover:bg-white hover:text-black text-black border-white hover:border-white">
                  <SheetTrigger asChild className="md:hidden">
                    <Link to="/builddspace/about">About</Link>
                  </SheetTrigger>
                </Button>
                <Button variant="outline" className="w-full flex items-center bg-transparent hover:bg-white hover:text-black text-black border-white hover:border-white">
                  <SheetTrigger asChild className="md:hidden">
                    <Link to="/builddspace/services">Services</Link>
                  </SheetTrigger>
                </Button>
                <Button variant="outline" className="w-full flex items-center bg-amber-600 hover:bg-amber-700 text-white border-amber-600 hover:border-amber-700">
                  <SheetTrigger asChild className="md:hidden">
                    <Link to="/builddspace/contact">Contact</Link>
                  </SheetTrigger>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>


      {/* Spacer to push content below the header */}
      <div className="h-16"></div>
    </header>
  )
}

export default Header
