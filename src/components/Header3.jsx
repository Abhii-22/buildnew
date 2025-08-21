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
        className="bg-customBlue text-white"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between p-4 px-4">
                     {/* Logo */}
           <NavLink to="/" className="flex items-center">
             <img src={logo} alt="Medini" className="h-14 mr-2" />
             <div className="h-8 w-px bg-white mx-2"></div>
             <img src={buildspaceLogo} alt="Buildspace" className="h-8 ml-1" />
           </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-4">
              {/* Get Started button with hover */}
              <a
                href="#"
                className="relative overflow-hidden inline-flex h-10 items-center justify-center rounded-full bg-amber-100 px-6 py-2 text-sm font-medium text-amber-600 shadow-lg transition-all duration-500 hover:shadow-amber-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 group"
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="absolute -z-10 inset-0 rounded-full bg-amber-100 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
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

      {/* Links */}
      <motion.div
        className="hidden bg-[#406d6e] text-white shadow-md md:flex"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
      >
            <div className="container mx-auto overflow-x-auto hide-scrollbar">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-8">
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
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">|</span>
                  
                </div>
              </div>
                         </div>
           </motion.div>

      {/* Spacer to push content below the header */}
      <div className={`h-${showLinks ? "28" : "16"} transition-all duration-300`}></div>
    </header>
  )
}

export default Header
