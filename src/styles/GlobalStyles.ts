import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize/modern-normalize.css';

export const GlobalStyles = createGlobalStyle`

  /* @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Regular.woff2") format("woff2"),
         url("../assets/fonts/Roboto-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Bold.woff2") format("woff2"),
         url("../assets/fonts/Roboto-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Italic.woff2") format("woff2"),
         url("../assets/fonts/Roboto-Italic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto";
    src: url("../assets/fonts/Roboto-Medium.woff2") format("woff2"),
         url("../assets/fonts/Roboto-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  } */

    :root {
    --font-family: "Roboto", sans-serif;
    --white-color: #fff;
    --yellow-color: #ffc531;  
    --green-color: #38CD3E;  
    --primary: #121417;         
    --primary-opacity: rgba(18, 20, 23, 0.8); 
    /*  Theme 1 */
    --golden-yellow: #f4c550;   
    --light-cream: #fbe9ba;     
    --pc1:#D08F38;
    --svg1:#E7C885;
    --svg-pc1:#E7C885;
    /*  Theme 2 */
    --soft-teal: #9fbaae;       
    --mint-green: #cbded3;      
    --pc2:#183E49;
    --svg2:#9EB9AD;
    --svg-pc2:#9EB9AD;
      /*  Theme 3 */ 
    --powder-blue: #9fb7ce;    
    --sky-blue: #bfd6ea;        
    --pc3:#213A5C;
    --svg3:#9FB6CD;
    --svg-pc3:#9FB6CD; 
      /*  Theme 4 */ 
    --peach: #e0a39a;          
    --soft-rose: #f2c0bd;      
    --pc4:#982A27;
    --svg4:#DFA299;
    --svg-pc4:#DFA299;  
    /*  Theme 5 */
    --coral: #f0aa8d;          
    --blush-pink: #f4c8ba;     
    --pc5:#CA5B38;
    --svg5:#EFA98C;
    --svg-pc5:#EFA98C;  
}

  * {
    box-sizing: border-box;
    padding: 0; 
    margin: 0; 
  }

  body {
    font-family: var(--font-family); 
    background-color: var(--white-color);
    color: var(--primary)
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* margin: 0; */
    font-weight: normal;
  }

  ul,
  ol {
    list-style: none;

  }

  a {
    text-decoration: none;
    transition: all 300ms ease-in-out; 
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
    transition: all 300ms ease; 
    cursor: pointer;
  }

  input,
  textarea {
    font-family: inherit;
    outline: none; 
  }
`;
