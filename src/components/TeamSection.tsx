import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  User, 
  Settings, 
  TrendingUp, 
  Microscope, 
  Wrench, 
  Target,
  Mail,
  LinkedinIcon
} from 'lucide-react'

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const founders = [
    {
      name: "Ashok Tukaram Mandlik",
      role: "Technical Head",
      icon: Settings,
      expertise: "Heat Treatment Technology",
      description: "Leading our technical operations with decades of metallurgical expertise and innovation in heat treatment processes.",
      specialties: ["Process Engineering", "Quality Systems", "Technical Innovation"],
      gradient: "heat"
    },
    {
      name: "Arun Onkar Bankar",
      role: "Operations Director",
      icon: TrendingUp,
      expertise: "Operations & Strategy",
      description: "Driving operational excellence and strategic growth initiatives to expand our market presence and capabilities.",
      specialties: ["Operations Management", "Strategic Planning", "Business Development"],
      gradient: "tech"
    },
    {
      name: "Sakshi Mehta",
      role: "Strategy & Digital",
      icon: Target,
      expertise: "Digital Transformation",
      description: "Spearheading digital transformation initiatives and strategic business development for sustainable growth.",
      specialties: ["Digital Strategy", "Business Analytics", "Market Expansion"],
      gradient: "steel"
    }
  ]

  const team = [
    {
      name: "Amit Deore",
      role: "Metallurgy Expert",
      icon: Microscope,
      expertise: "Materials Science",
      description: "Advanced metallurgical analysis and material characterization specialist ensuring optimal heat treatment outcomes.",
      gradient: "chrome"
    },
    {
      name: "Nilesh Gawande",
      role: "NPD and Operations",
      icon: Wrench,
      expertise: "New Product Development",
      description: "Leading new product development and operational efficiency initiatives to enhance our service portfolio.",
      gradient: "heat"
    },
    {
      name: "Amogh Gore",
      role: "Business Development Head",
      icon: TrendingUp,
      expertise: "Client Relations",
      description: "Building strategic partnerships and expanding our client base across various industrial sectors.",
      gradient: "tech"
    }
  ]

  return (
    <section id="team" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,191,255,0.1),transparent_50%)]" />
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
            <span className="text-gradient-heat">Expert Team</span>
            <br />
            <span className="text-gradient-steel">Driving Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the passionate professionals who make Supertech Heat Treatment 
            a leader in metallurgical excellence and technological innovation.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-center text-gradient-heat mb-12">
            Leadership Team
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="glass-card p-8 rounded-2xl hover-lift group"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Profile Image Placeholder */}
                <motion.div
                  className={`w-24 h-24 bg-gradient-${founder.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <founder.icon className="w-12 h-12 text-primary-foreground" />
                </motion.div>

                <div className="text-center">
                  <h4 className="text-xl font-orbitron font-bold text-foreground mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-molten font-semibold mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{founder.expertise}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {founder.description}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    {founder.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-muted/30 text-muted-foreground text-xs px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-center text-gradient-tech mb-12">
            Core Team
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-card p-8 rounded-2xl hover-lift group"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Profile Image Placeholder */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-${member.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <member.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <div className="text-center">
                  <h4 className="text-lg font-orbitron font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-plasma font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values */}
        <motion.div
          className="mt-20 glass-card p-12 rounded-2xl text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-gradient-steel mb-6">
            United by Excellence
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Our diverse team combines decades of experience with fresh perspectives, 
            working together to deliver innovative heat treatment solutions that exceed 
            industry standards and client expectations.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "50+", label: "Years Combined Experience" },
              { number: "1000+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Technical Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-orbitron font-bold text-gradient-heat mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}