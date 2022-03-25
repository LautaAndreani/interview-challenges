import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles:{
    global:{
      body: {
      margin:0,
      height:"100%",
      backgroundColor: "brand.100",
      fontFamily: "Segoe UI, Roboto, Oxygen"
      },
    },
  },
  colors: {
    brand: {
      font: "#ffff",
      links: "black",
      buttons: "dodgerblue",
    },
  },
  components: {
    Button: {
      variants: {
        'cart': {
          backgroundColor: "brand.buttons",
          color:"brand.font",
          border: "none",
          lineHeight: "48px",
          borderRadius: "4px",
          fontSize: "18px",
          fontWeight: 500,
          cursor: "pointer",
          padding: "10px 16px",
        }
      }
    }
  },
})

export default theme