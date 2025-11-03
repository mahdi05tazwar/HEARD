module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 35%, 95%)",
        input: "hsl(220, 35%, 95%)",
        ring: "hsl(220, 100%, 56%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(218, 23%, 18%)",
        primary: {
          DEFAULT: "hsl(220, 100%, 56%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 100%, 66%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(21, 100%, 57%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(210, 40%, 98%)",
          foreground: "hsl(218, 23%, 18%)",
        },
        success: "hsl(142, 81%, 36%)",
        warning: "hsl(38, 92%, 50%)",
        muted: {
          DEFAULT: "hsl(220, 40%, 98%)",
          foreground: "hsl(220, 8%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(220, 100%, 96%)",
          foreground: "hsl(218, 23%, 18%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(218, 23%, 18%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(218, 23%, 18%)",
        },
        gray: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(220, 40%, 98%)",
          200: "hsl(220, 35%, 95%)",
          300: "hsl(220, 15%, 90%)",
          400: "hsl(220, 10%, 80%)",
          500: "hsl(220, 8%, 65%)",
          600: "hsl(220, 8%, 45%)",
          700: "hsl(218, 12%, 30%)",
          800: "hsl(218, 15%, 20%)",
          900: "hsl(218, 23%, 12%)",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, hsl(220, 100%, 96%) 0%, hsl(220, 100%, 99%) 100%)',
        'gradient-2': 'linear-gradient(180deg, hsl(220, 100%, 60%) 0%, hsl(220, 100%, 55%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(220, 100%, 60%) 0%, hsl(220, 100%, 65%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    'animate-accordion-up',
    'animate-accordion-down',
  ],
}
