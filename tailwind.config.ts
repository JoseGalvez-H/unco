import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ✅ required for `border-border`
        border: "hsl(var(--border))",

        // optional but commonly paired tokens
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.15)",
          dark: "rgba(0, 0, 0, 0.2)",
        },
      },
      backdropBlur: { xs: "2px" },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out",
        "fade-in": "fadeIn 1s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;





// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'glass': {
//           'light': 'rgba(255, 255, 255, 0.1)',
//           'medium': 'rgba(255, 255, 255, 0.15)',
//           'dark': 'rgba(0, 0, 0, 0.2)',
//         },
//       },
//       backdropBlur: {
//         xs: '2px',
//       },
//       fontFamily: {
//         sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
//         display: ['var(--font-display)', 'system-ui', 'sans-serif'],
//       },
//       animation: {
//         'float': 'float 6s ease-in-out infinite',
//         'glow': 'glow 3s ease-in-out infinite',
//         'slide-up': 'slideUp 0.8s ease-out',
//         'fade-in': 'fadeIn 1s ease-out',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         glow: {
//           '0%, 100%': { opacity: '0.5' },
//           '50%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(100px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
