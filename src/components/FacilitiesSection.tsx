import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Factory, 
  Flame, 
  Microscope, 
  Shield,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function FacilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const facilities = [
    {
      title: "Shot Blasting Machine",
      description: "Advanced shot blasting equipment for surface preparation and cleaning of metal components.",
      image: "/lovable-uploads/83da89f6-99ef-4f26-a953-d6d4c8d33a77.png",
      icon: Shield,
      specifications: [
        "Automated operation",
        "Uniform surface finish",
        "Dust collection system",
        "Safety interlocks"
      ]
    },
    {
      title: "Heat Treatment Facility",
      description: "State-of-the-art furnaces and cooling systems for precise temperature control.",
      image: "/lovable-uploads/6ee723d1-98f3-4690-9894-3a971967c842.png",
      icon: Flame,
      specifications: [
        "Multi-zone heating",
        "Automated controls",
        "Energy efficient",
        "Temperature logging"
      ]
    },
    {
      title: "Heavy Industrial Equipment",
      description: "Robust machinery designed for handling large-scale heat treatment operations.",
      image: "/lovable-uploads/f427fe4b-2675-4745-8ac5-8d46ea21b418.png",
      icon: Factory,
      specifications: [
        "High capacity",
        "Safety systems",
        "Precision handling",
        "Maintenance friendly"
      ]
    },
    {
      title: "Quality Laboratory",
      description: "Advanced testing facility for metallurgical analysis and quality verification.",
      image: "/lovable-uploads/2e296f12-86b7-423e-857e-fa67453f64f6.png",
      icon: Microscope,
      specifications: [
        "Microstructure analysis",
        "Hardness testing",
        "Chemical analysis",
        "Certified procedures"
      ]
    },
    {
      title: "Component Storage",
      description: "Organized storage systems for raw materials and finished components.",
      image: "/lovable-uploads/92ec01b4-6abf-4684-8fec-15d5111a8ff1.png",
      icon: Settings,
      specifications: [
        "Systematic organization",
        "Inventory tracking",
        "Climate controlled",
        "Easy access"
      ]
    },
    {
      title: "Automated Systems",
      description: "Computer-controlled processes ensuring consistent quality and efficiency.",
      image: "/lovable-uploads/b9054b96-1d14-4b5f-a6ae-a1155c91976d.png",
      icon: Zap,
      specifications: [
        "SCADA integration",
        "Real-time monitoring",
        "Data logging",
        "Process optimization"
      ]
    }
  ]

  return (
    <section id="facilities" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,107,53,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,191,255,0.08),transparent_50%)]" />
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
            <span className="text-gradient-steel">Our</span>
            <br />
            <span className="text-gradient-heat">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art equipment and facilities designed for precision heat treatment 
            and metallurgical excellence.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              className="glass-card rounded-2xl overflow-hidden hover-lift"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -8
              }}
            >
              {/* Facility Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-heat rounded-xl flex items-center justify-center shadow-heat"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <facility.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
                  {facility.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {facility.description}
                </p>

                {/* Specifications */}
                <div className="space-y-3 mb-6">
                  {facility.specifications.map((spec, specIndex) => (
                    <motion.div
                      key={spec}
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: (index * 0.1) + (specIndex * 0.05) + 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-molten flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.div
                  className="flex items-center text-molten hover:text-plasma transition-colors group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 glass-card p-12 rounded-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Advanced Machines" },
              { number: "50,000+", label: "Sq Ft Facility" },
              { number: "24/7", label: "Operations" },
              { number: "100%", label: "Quality Assured" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-4xl lg:text-5xl font-orbitron font-bold text-gradient-heat mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}