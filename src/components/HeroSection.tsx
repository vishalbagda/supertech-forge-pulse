import { motion } from 'framer-motion'
import { ArrowDown, Flame, Zap, Settings, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated CSS Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-heat rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-tech rounded-full blur-lg"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-12 h-12 text-border/30" />
              </motion.div>
              <motion.div
                className="mx-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  filter: [
                    "drop-shadow(0 0 20px hsl(18 95% 55% / 0.5))",
                    "drop-shadow(0 0 40px hsl(18 95% 55% / 0.8))",
                    "drop-shadow(0 0 20px hsl(18 95% 55% / 0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Flame className="w-16 h-16 text-primary" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-accent" />
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight mb-6">
              <span className="text-gradient-heat">SUPERTECH</span>
              <br />
              <span className="text-gradient-steel">Heat Treatment</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-inter font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Mastering Metal Properties through{" "}
              <span className="text-gradient-tech font-semibold">Innovation</span>
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: Award, text: "ISO 9001:2015 Certified" },
              { icon: Settings, text: "SCADA Automation" },
              { icon: Flame, text: "Advanced Heat Treatment" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-inter text-muted-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              variant="heat"
              size="xl"
              onClick={() => scrollToSection('#services')}
              className="group"
            >
              <span>Explore Our Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
              </motion.div>
            </Button>
            
            <Button
              variant="chrome"
              size="xl"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground cursor-pointer"
              onClick={() => scrollToSection('#about')}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-inter">Scroll Down</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}