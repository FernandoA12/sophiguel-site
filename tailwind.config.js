/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CA5E9",
        secondary: "#7D7E81",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        contentShowInverse: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0%)" },
        },
        contentHideInverse: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        showOverlay: {
          from: { opacity: 0 },
          to: { opacity: 0.7 },
        },
        hideOverlay: {
          from: { opacity: 0.7 },
          to: { opacity: 0 },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShowInverse: "contentShowInverse 500ms",
        contentHideInverse: "contentHideInverse 500ms",
        showOverlay: "showOverlay 200ms",
        HideOverlay: "hideOverlay 200ms",
      },
    },
  },
  plugins: [],
};
