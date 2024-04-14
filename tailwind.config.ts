module.exports = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3F88C5", 
          foreground: "hsl(var(--primary-foreground))",
        },
        
        border: "#CBD5E1",
        input: "#CBD5E1",
        ring: "#CBD5E1",
        background: "#F7FAFC",
        foreground: "#1A202C",
        green: {
          100: "#F4F7FE",
          200: "#BCB6FF",
          400: "#868CFF",
          500: "#0a9396", 
          600: "#4318FF",
        },
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        secondary: {
          DEFAULT: "#EDF2F7",
          foreground: "#2D3748",
        },
        destructive: {
          DEFAULT: "#E53E3E",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#A0AEC0",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#4A5568",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#F7FAFC",
          foreground: "#1A202C",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A202C",
        },
      },
      fontFamily: {
        IBMPlex: ["var(--font-ibm-plex)"],
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(to right, #3F88C5, #4318FF)", 
        "green-gradient": "linear-gradient(to right, #3F88C5, #4318FF)", 
        banner: "url('/assets/images/banner-bg.png')",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
