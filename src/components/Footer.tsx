import { motion } from 'framer-motion'
import { 
  Flame, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Hardening',
    'Tempering', 
    'Annealing',
    'Stress Relieving',
    'Metallurgical Testing',
    'SCADA Automation'
  ]

  return (
    <footer className="relative bg-background border-t border-border/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,107,53,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Flame className="w-10 h-10 text-molten animate-heat-pulse" />
                  <div className="absolute inset-0 w-10 h-10 bg-molten/20 rounded-full animate-ping" />
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-gradient-heat">
                    SUPERTECH
                  </h3>
                  <p className="text-sm font-inter text-muted-foreground">
                    Heat Treatment
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Leading heat treatment service provider in India, specializing in 
                advanced metallurgical processes with cutting-edge technology and 
                uncompromising quality standards.
              </p>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-molten rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-plasma rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">UDYAM Registered</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-molten transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <span className="group-hover:text-molten transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <motion.div
                    key={service}
                    className="flex items-center space-x-2 text-muted-foreground group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-molten rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:text-molten transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-orbitron font-bold text-foreground mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-molten flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground text-sm">
                    <p>Plot No. 91/3/2, M.I.D.C</p>
                    <p>Satpur, Nashik</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-plasma flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <p>+91 9822146862</p>
                    <p>+91 8329007594</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-chrome flex-shrink-0" />
                  <a 
                    href="mailto:supertechht@gmail.com"
                    className="text-muted-foreground text-sm hover:text-molten transition-colors"
                  >
                    supertechht@gmail.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h5 className="text-sm font-semibold text-foreground mb-3">Follow Us</h5>
                  <div className="flex space-x-3">
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center hover:bg-gradient-heat transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                    </motion.a>
                    <motion.a
                      href="mailto:supertechht@gmail.com"
                      className="w-10 h-10 bg-muted/30 rounded-lg flex items-center justify-center hover:bg-gradient-tech transition-all duration-300 group"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-muted-foreground text-sm text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2025 Supertech Heat Treatment. All Rights Reserved. | 
                Designed with precision and passion for metallurgical excellence.
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-muted-foreground hover:text-molten transition-colors group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}