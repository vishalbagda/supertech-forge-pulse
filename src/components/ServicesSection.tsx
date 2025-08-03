import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Flame, 
  Thermometer, 
  RefreshCw, 
  Shield, 
  Microscope, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Service {
  icon: any
  title: string
  description: string
  features: string[]
  gradient: string
  shadowColor: string
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services: Service[] = [
    {
      icon: Flame,
      title: "Hardening",
      description: "Precision hardening processes to increase material strength and durability through controlled heating and rapid cooling.",
      features: [
        "Vacuum hardening",
        "Induction hardening", 
        "Case hardening",
        "Through hardening",
        "Surface hardening"
      ],
      gradient: "heat",
      shadowColor: "shadow-heat"
    },
    {
      icon: Thermometer,
      title: "Tempering",
      description: "Controlled tempering to achieve optimal balance between hardness and toughness for specific applications.",
      features: [
        "Low temperature tempering",
        "High temperature tempering",
        "Double tempering",
        "Stress relief tempering",
        "Color tempering"
      ],
      gradient: "tech",
      shadowColor: "shadow-tech"
    },
    {
      icon: RefreshCw,
      title: "Annealing",
      description: "Softening processes to improve machinability, reduce internal stresses, and refine grain structure.",
      features: [
        "Full annealing",
        "Process annealing",
        "Spheroidize annealing",
        "Recrystallization annealing",
        "Stress relief annealing"
      ],
      gradient: "steel",
      shadowColor: "shadow-steel"
    },
    {
      icon: Shield,
      title: "Stress Relieving",
      description: "Thermal treatments to eliminate residual stresses and prevent distortion in machined components.",
      features: [
        "Post-weld stress relief",
        "Machining stress relief",
        "Uniform heating",
        "Controlled cooling",
        "Distortion prevention"
      ],
      gradient: "chrome",
      shadowColor: "shadow-glow"
    },
    {
      icon: Microscope,
      title: "Metallurgical Testing",
      description: "Comprehensive material analysis and quality verification using advanced testing methodologies.",
      features: [
        "Microstructure analysis",
        "Hardness testing",
        "Tensile testing",
        "Impact testing",
        "Chemical composition"
      ],
      gradient: "tech",
      shadowColor: "shadow-tech"
    },
    {
      icon: Zap,
      title: "SCADA Automation",
      description: "State-of-the-art automated process control systems ensuring consistent quality and precision.",
      features: [
        "Real-time monitoring",
        "Temperature profiling",
        "Data logging",
        "Process optimization",
        "Quality assurance"
      ],
      gradient: "heat",
      shadowColor: "shadow-heat"
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,191,255,0.1),transparent_50%)]" />
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
            <span className="text-gradient-heat">Heat Treatment</span>
            <br />
            <span className="text-gradient-steel">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive metallurgical solutions powered by advanced technology 
            and decades of expertise in material transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`glass-card p-8 rounded-2xl hover-lift cursor-pointer transition-all duration-300 ${
                selectedService === index ? service.shadowColor : ''
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -8
              }}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Service Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-${service.gradient} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Service Title */}
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <motion.div
                className="space-y-3"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedService === index ? 'auto' : 0,
                  opacity: selectedService === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: selectedService === index ? 0 : -20,
                      opacity: selectedService === index ? 1 : 0
                    }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-molten flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Expand Button */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full mt-6 group"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedService(selectedService === index ? null : index)
                }}
              >
                <span>{selectedService === index ? 'Less Details' : 'More Details'}</span>
                <motion.div
                  animate={{ rotate: selectedService === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-orbitron font-bold text-gradient-heat mb-6">
              Ready to Transform Your Materials?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert consultation on the best heat treatment solutions for your specific requirements. 
              Our team is ready to help you achieve optimal material properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heat" size="lg">
                Request Quote
              </Button>
              <Button variant="chrome" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}