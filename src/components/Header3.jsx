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
            <button 
              onClick={() => {
                // Scroll to top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-medium transition-colors hover:text-amber-300 text-white"
            >
              Home
            </button>
            <button 
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/", { state: { scrollTo: "about" } });
                } else {
                  const aboutSection = document.querySelector('#about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-sm font-medium transition-colors hover:text-amber-300 text-white"
            >
              About
            </button>
            <button 
              onClick={() => {
                // Scroll to services section
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium transition-colors hover:text-amber-300 text-white"
            >
              Services
            </button>
            <button 
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium transition-colors hover:text-amber-300 text-white"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
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
                <Button variant="outline" className="w-full">
                  <SheetTrigger asChild className="md:hidden">
                    <Link to="/">Home</Link>
                  </SheetTrigger>
                </Button>
                
                                 <Button variant="outline" className="w-full flex items-center">
                   <SheetTrigger asChild className="md:hidden">
                     <Link to="/builddspace">About</Link>
                   </SheetTrigger>
                 </Button>
                 <Button variant="outline" className="w-full flex items-center">
                   <SheetTrigger asChild className="md:hidden">
                     <Link to="/builddspace">Services</Link>
                   </SheetTrigger>
                 </Button>
                                   <Button variant="outline" className="w-full flex items-center">
                    <SheetTrigger asChild className="md:hidden">
                      <button 
                        onClick={() => {
                          // Scroll to contact section
                          const contactSection = document.querySelector('#contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full text-left"
                      >
                        Contact
                      </button>
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
