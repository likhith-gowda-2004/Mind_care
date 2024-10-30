export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add any other file extensions as needed
    "./public/index.html"               // Include this if your HTML is in the public folder
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6FFF"
      }
    },
  },
  plugins: [],
};
