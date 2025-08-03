import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Zap, Settings } from 'lucide-react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-steel" />
            <div className="absolute inset-0 bg-gradient-to-br from-molten/20 via-transparent to-plasma/20" />
          </div>

          <div className="relative z-10 text-center">
            {/* Main Logo Animation */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Rotating Gear Background */}
              <motion.div
                className="absolute inset-0 w-32 h-32 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              >
                <Settings className="w-full h-full text-border/30" />
              </motion.div>

              {/* Central Heat Icon */}
              <motion.div
                className="relative z-10 w-32 h-32 mx-auto flex items-center justify-center"
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
                <div className="relative">
                  <Flame className="w-16 h-16 text-molten" />
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-8 h-8 text-plasma" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-heat mb-2">
                SUPERTECH
              </h1>
              <p className="text-xl md:text-2xl font-orbitron font-medium text-gradient-steel">
                Heat Treatment
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="mt-12 w-80 max-w-full mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-heat shadow-glow"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
                <motion.div
                  className="mt-4 text-sm font-inter text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Heat Treatment Systems... {progress}%
                </motion.div>
              </div>
            </motion.div>

            {/* Particle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-molten rounded-full"
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight,
                    opacity: 0 
                  }}
                  animate={{
                    y: -50,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}