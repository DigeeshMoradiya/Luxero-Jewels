/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gtAmerica: ["'GT America Trial'", "sans-serif"], 
        poiretOne: ["'Poiret One'", "sans-serif"], // Add the font name here
      },
      backgroundImage: {
        'hero-pattern': "url('/assest/bg-banner.jpg')",
        "latest-1": "url('/assest/image 32.png')",
        "latest-2": "url('/assest/image 33.png')",
        "latest-3": "url('/assest/image 34.png')",
        "latest-4": "url('/assest/image 35.png')"
      }
    },
  },
  plugins: [],
};
