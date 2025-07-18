// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // We'll calculate the duration dynamically in the component or set a value that looks good
        'scroll-infinite': 'scrollLeft 30s linear infinite', // Increased duration for smoothness
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          // This will need to be -100% of the *total width of one set of duplicated content*.
          // If you have `N` sets, and you want to scroll past one full set,
          // the percentage should correspond to that.
          // For two sets: -50% of the total combined width (which is 200%)
          // For three sets: -33.33% of the total combined width (which is 300%)
          // OR, simpler: just scroll by the total width of *one original copy* of your items.
          // Let's assume the div `flex gap-8` will expand to fit all items.
          // We want to scroll by the width of `tools` array
          '100%': { transform: 'translateX(calc(-1 * var(--scroll-width)))' }, // Use CSS variable
        }
      }
    },
  },
  plugins: [],
}