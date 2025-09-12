/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
        fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
       fontSize: {
        'fluid-h1': 'clamp(2.5rem, 6vw, 4rem)',   // 40px → 64px
        'fluid-h2': 'clamp(1.5rem, 4vw, 2.35rem)', // 24px → 36px
        'fluid-body': 'clamp(1rem, 2.5vw, 1.25rem)', // 16px → 20px
        'fluid-small': 'clamp(0.875rem, 2vw, 1rem)', // 14px → 16px
      },
       keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 50s linear infinite",
        scrollRight: "scrollRight 50s linear infinite",
      },
    },
  },
  plugins: [],
}
