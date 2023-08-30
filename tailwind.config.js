/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage:{
      'Agentbg': "url('./src/images/Agentbg.png')",
      'Mortagebg': "url('./src/images/Mortageheadbg.png')",
      'Buybg': "url('./src/images/Buyheadbg.png')"
    },
  },
}
