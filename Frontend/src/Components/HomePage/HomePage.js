import React from "react";
import HeaderLayout from "../common/HeaderLayout";
import FooterLayout from "../common/FooterLayout";
import RecipeReviewCard from "../products/men/shirts/Tshirt";

const HomePage = () => {
  return (
     <div>
         <HeaderLayout/>
       <div style={{height:"100vh"}}>
           <RecipeReviewCard />
       </div>

         <FooterLayout/>
     </div>

  );
};

export default HomePage;
