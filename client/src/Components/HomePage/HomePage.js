import React from "react";
import HeaderLayout from "../common/HeaderLayout";
import FooterLayout from "../common/FooterLayout";

const HomePage = () => {
  return (

     <div>
         <HeaderLayout/>
         <div style={{height:"100vh"}}>
             <h1>homepage</h1>
         </div>
         <FooterLayout/>
     </div>

  );
};

export default HomePage;
