import React from "react";
const styleF={
   
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    textAlign: 'center',
    bottom: '0',
    left: '0',
    width: '100%',
    height:'60px'
   
 }
const Footer = () => (
  <div className="footer" style={styleF}>
    <p>Pizza Online Food App All Right Reserved™  <span style={{color:'red'}}> © 2022</span> </p>
  </div>
);

export default Footer;