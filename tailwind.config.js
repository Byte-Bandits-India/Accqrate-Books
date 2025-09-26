/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'fluid-h1': 'clamp(2.25rem, 6vw, 3.375rem)',
  			'fluid-h2': 'clamp(1.25rem, 4vw, 2.35rem)',
  			'fluid-body': 'clamp(0.875rem, 2.5vw, 1.25rem)',
  			'fluid-small': 'clamp(0.875rem, 2vw, 1rem)'
  		},
  		keyframes: {
  			scrollLeft: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			scrollRight: {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
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
  			}
  		},
  		animation: {
  			scrollLeft: 'scrollLeft 50s linear infinite',
  			scrollRight: 'scrollRight 50s linear infinite',
  			skeleton: 'skeleton 1.2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
