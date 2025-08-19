import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, Target, Eye, Heart } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system ensuring consistent service delivery"
    },
    {
      icon: Shield,
      title: "UDYAM Registration",
      description: "Government registered manufacturing enterprise"
    },
    {
      icon: Target,
      title: "Complete Traceability",
      description: "Full documentation and tracking of all heat treatment processes"
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6">
                <span className="text-gradient-steel">Engineering Excellence</span>
                <br />
                <span className="text-gradient-heat">Since Inception</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Supertech Heat Treatment stands at the forefront of metallurgical innovation, 
              specializing in advanced heat treatment processes that transform raw materials 
              into precision-engineered components. Located in the industrial hub of Nashik, 
              we serve manufacturing sectors across India with cutting-edge technology and 
              uncompromising quality standards.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our state-of-the-art facility combines traditional metallurgical expertise with 
              modern SCADA-based automation systems, ensuring consistent results and complete 
              process control. Every project benefits from our comprehensive approach to quality, 
              precision, and reliability.
            </motion.p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-card p-6 rounded-xl hover-lift"
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-heat rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Vision & Mission */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Vision Card */}
            <motion.div
              className="glass-card p-8 rounded-2xl hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-tech rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-gradient-tech">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading heat treatment service provider in India, 
                setting industry standards through technological innovation, 
                sustainable practices, and unwavering commitment to quality excellence.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="glass-card p-8 rounded-2xl hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-heat rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-gradient-heat">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver superior heat treatment solutions that enhance the performance, 
                durability, and reliability of metal components, empowering our clients to 
                achieve their manufacturing goals with confidence and precision.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              className="glass-card p-8 rounded-2xl hover-lift"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-steel rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-gradient-steel">
                  Our Values
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                <div className="space-y-2">
                  <p className="font-semibold text-primary">• Quality First</p>
                  <p className="font-semibold text-accent">• Innovation</p>
                  <p className="font-semibold text-foreground">• Reliability</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-primary">• Precision</p>
                  <p className="font-semibold text-accent">• Integrity</p>
                  <p className="font-semibold text-foreground">• Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}