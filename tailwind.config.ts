import type { Config } from "tailwindcss";

const config = {
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
  		screens: {
  			brake: '888px'
  		},
  		colors: {
  			'green-light': '#98ef98',
  			'green-dark': '#67e967',
  			'green-letter': '#179517',
  			'blue-found': '#0a1224'
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
  			fall: {
  				'0%': {
  					transform: 'translateY(0%)'
  				},
  				'100%': {
  					transform: 'translateY(50%)'
  				}
  			},
  			'carousel-scroll': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'carousel-scroll': 'carousel-scroll 20s linear infinite',
  			slow: 'fall 5s linear infinite',
  			medium: 'fall 4s linear infinite',
  			fast: 'fall 3s linear infinite'
  		},
  		backgroundImage: {
  			'hero-pattern': 'url("https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg")'
  		},
  		height: {
  			'128': '32rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
