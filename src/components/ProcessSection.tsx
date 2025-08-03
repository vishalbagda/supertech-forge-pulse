import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Package, 
  Flame, 
  Droplets, 
  Thermometer, 
  Microscope, 
  Shield, 
  Truck,
  ArrowRight
} from 'lucide-react'

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const processSteps = [
    {
      icon: Package,
      title: "Raw Material",
      description: "Inspection and verification of incoming materials",
      details: "Quality check, documentation, and preparation",
      color: "chrome"
    },
    {
      icon: Flame,
      title: "Hardening",
      description: "Controlled heating to austenitic temperature",
      details: "Precise temperature control using SCADA systems",
      color: "heat"
    },
    {
      icon: Droplets,
      title: "Quenching",
      description: "Rapid cooling to achieve desired hardness",
      details: "Water, oil, or polymer quenching media",
      color: "tech"
    },
    {
      icon: Thermometer,
      title: "Tempering",
      description: "Reheating to optimize hardness-toughness balance",
      details: "Temperature-controlled stress relief process",
      color: "steel"
    },
    {
      icon: Microscope,
      title: "Testing",
      description: "Comprehensive quality verification",
      details: "Hardness, microstructure, and dimensional checks",
      color: "heat"
    },
    {
      icon: Shield,
      title: "MPI",
      description: "Magnetic Particle Inspection for defects",
      details: "Non-destructive testing for surface cracks",
      color: "tech"
    },
    {
      icon: Truck,
      title: "Dispatch",
      description: "Final packaging and delivery preparation",
      details: "Documentation and quality certificates",
      color: "chrome"
    }
  ]

  return (
    <section id="process" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,107,53,0.05)_50%,transparent_60%)]" />
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
            <span className="text-gradient-steel">Manufacturing</span>
            <br />
            <span className="text-gradient-heat">Process Flow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures consistent quality and precision 
            at every step of the heat treatment process.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-molten via-plasma to-chrome opacity-30" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Content Card */}
                <motion.div
                  className="flex-1 glass-card p-8 rounded-2xl hover-lift"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-orbitron font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 italic">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step Number */}
                <motion.div
                  className="relative z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-16 h-16 bg-gradient-heat rounded-full flex items-center justify-center shadow-heat">
                    <span className="text-xl font-orbitron font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Arrow for Desktop */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-24"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-molten transform rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            {
              title: "100% Quality Control",
              description: "Every component undergoes rigorous testing and inspection",
              icon: Shield
            },
            {
              title: "SCADA Automation",
              description: "Computer-controlled precision for consistent results",
              icon: Microscope
            },
            {
              title: "Full Traceability",
              description: "Complete documentation and process tracking",
              icon: Package
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="glass-card p-8 rounded-2xl text-center hover-lift"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}