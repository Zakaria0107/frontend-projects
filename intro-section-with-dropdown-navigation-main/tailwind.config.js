/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens : {
      sm : '480px' , 
      md : '768px' , 
      lg :'976px' , 
      xl : '1280px'
    },
    extend: {
      colors: {
        black : "hsl(0, 0%, 8%)" , 
        alwhite : "hsl(0, 0%, 98%)",
        gray : "hsl(0, 0%, 41%)"
        
      },
      fontWeight : {
        max : "900" ,
        bold : "700" ,
        meduim : "500"
      }
    },
  },
  plugins: [],
}
