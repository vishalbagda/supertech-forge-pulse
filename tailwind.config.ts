import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Industrial Heat Treatment Color Extensions
				steel: {
					blue: 'hsl(var(--steel-blue))',
					DEFAULT: 'hsl(var(--chrome-silver))'
				},
				molten: 'hsl(var(--molten-orange))',
				furnace: 'hsl(var(--furnace-red))',
				chrome: 'hsl(var(--chrome-silver))',
				gold: 'hsl(var(--gold-accent))',
				plasma: 'hsl(var(--plasma-cyan))'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				orbitron: ['Orbitron', 'monospace']
			},
			backgroundImage: {
				'gradient-heat': 'var(--gradient-heat)',
				'gradient-steel': 'var(--gradient-steel)',
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-chrome': 'var(--gradient-chrome)'
			},
			boxShadow: {
				'heat': 'var(--shadow-heat)',
				'steel': 'var(--shadow-steel)',
				'glow': 'var(--shadow-glow)',
				'tech': 'var(--shadow-tech)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'heat-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(18 95% 55% / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(18 95% 55% / 0.6), 0 0 60px hsl(0 90% 45% / 0.3)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'from': {
						boxShadow: '0 0 20px hsl(18 95% 55% / 0.4)'
					},
					'to': {
						boxShadow: '0 0 40px hsl(18 95% 55% / 0.8), 0 0 60px hsl(0 90% 45% / 0.4)'
					}
				},
				'rotate-slow': {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heat-pulse': 'heat-pulse 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
