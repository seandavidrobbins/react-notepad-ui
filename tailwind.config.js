// https://tailwindcss.com/docs/installation#create-your-configuration-file
module.exports = {
  content: ["./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: "auto",
        padding: "5%",
        screens: {
          DEFAULT: "100%",
        },
      },
      colors: {
        green: "#00B140",
        blue: "#0B24FB",
        midnight: "#00193f",
        lightgray: "#F4F4F4",
        offwhite: "#FAFAFA",
        black: "#000000",
        charcoal: "#53565A",
        purple: "#3C1053",
        gray: {
          100: "#757575",
        },
      },
      listStyleType: {
        square: "square",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        26: "repeat(26, minmax(0, 1fr))",
      },
      margin: {
        desktop: "5%",
        mobile: "20px",
      },
      padding: {
        desktop: "5%",
        mobile: "20px",
      },
      maxWidth: {
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        "1/3": "33.333333%",
      },
      minHeight: {
        6: "1.5rem",
        10: "2.5rem",
        14: "3.5rem",
        22: "5.5rem",
      },
      minWidth: {
        6: "1.5rem",
        10: "2.5rem",
        14: "3.5rem",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    screens: {
      xs: "428px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      17: ["1.0625rem", { lineHeight: "1.5rem" }], // 17px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      19: ["1.188rem", { lineHeight: "1.5" }], // 19px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      22: ["1.375rem", { lineHeight: "1.5" }], // 22px
      "2xl": ["1.438rem", { lineHeight: "2rem" }], // 23px
      24: ["1.5rem", { lineHeight: "1" }], // 24px
      "menu-footer": ["1.625rem", { lineHeight: "1" }], // 26px
      "3xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      29: ["1.813rem", { lineHeight: "1.25" }], // 29px
      30: ["1.875rem", { lineHeight: "1.5" }], // 30px
      alpha: ["2rem", { lineHeight: "1" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      42: ["2.625rem", { lineHeight: "1" }], // 42px
      "h1-mobile": ["2.5rem", { lineHeight: "1" }], // 43px
      46: ["2.875rem", { lineHeight: 1 }], // 46px
      "5xl": ["3rem", { lineHeight: "1" }], // 48px
      menu: ["3.25rem", { lineHeight: "1" }], // 52px
      "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      "h1-desktop": ["3.75rem", { lineHeight: "1" }], // 60px
      "7xl": ["5rem", { lineHeight: "1" }], // 80px
      "8xl": ["6.188rem", { lineHeight: "1" }], // 99px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    fontWeight: {
      thin: 200,
      light: 200,
      normal: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      18: "4.5rem",
      20: "5rem",
      22: "5.5rem",
      24: "6rem",
      26: "6.5rem",
      28: "7rem",
      29: "7.063rem",
      32: "8rem",
      34: "8.5rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      100: "26rem",
      110: "28rem",
      120: "30rem",
      128: "32rem",
      144: "36rem",
      152: "38rem",
      160: "40rem",
      168: "42rem",
      "8%": "8%",
      "15%": "15%",
      "20%": "20%",
      "70%": "70%",
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".force-full-width": {
          width: "100vw !important",
          marginLeft: "calc(50% - 50vw) !important",
          marginRight: "calc(50% - 50vw) !important",
        },
      });
    },
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(offwhite|lightgray|midnight|h1-desktop|h1-mobile)/,
    },
  ],
  future: {},
};
