import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9822146862", "+91 8329007594", "+91 7499982293"],
      gradient: "heat"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["supertechht@gmail.com"],
      gradient: "tech"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Plot No. 91/3/2, M.I.D.C", "Satpur, Nashik, Maharashtra, India"],
      gradient: "steel"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      gradient: "chrome"
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-molten/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gradient-heat">Get in Touch</span>
            <br />
            <span className="text-gradient-steel">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your materials? Contact our expert team for 
            consultation, quotes, or technical support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-orbitron font-bold text-gradient-tech mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="glass-card p-6 rounded-2xl hover-lift"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-orbitron font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              className="glass-card p-6 rounded-2xl h-64"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="w-full h-full bg-gradient-steel rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-foreground mx-auto mb-4" />
                  <p className="text-foreground font-orbitron font-semibold">
                    Interactive Map
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Click to view full location details
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-orbitron font-bold text-gradient-heat mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-muted/20 border-border/30 focus:border-molten transition-colors"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-muted/20 border-border/30 focus:border-molten transition-colors"
                  />
                </motion.div>

                {/* Company Input */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-muted/20 border-border/30 focus:border-molten transition-colors"
                  />
                </motion.div>

                {/* Service Selection */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Service Required
                  </label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-muted/20 border-border/30 focus:border-molten">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hardening">Hardening</SelectItem>
                      <SelectItem value="tempering">Tempering</SelectItem>
                      <SelectItem value="annealing">Annealing</SelectItem>
                      <SelectItem value="stress-relieving">Stress Relieving</SelectItem>
                      <SelectItem value="testing">Metallurgical Testing</SelectItem>
                      <SelectItem value="automation">SCADA Automation</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-muted/20 border-border/30 focus:border-molten transition-colors min-h-32"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <Button
                    type="submit"
                    variant="heat"
                    size="lg"
                    className="w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </motion.div>
              </form>

              {/* Quick Contact */}
              <motion.div
                className="mt-8 pt-8 border-t border-border/30"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1.1 }}
              >
                <p className="text-center text-muted-foreground mb-4">
                  Need immediate assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="chrome" size="sm" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="tech" size="sm" className="flex-1">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}