import React from "react";
 
import Banner from "../Banner/Banner";
import Collabaretions from "../Collabaretions/Collabaretions";
import Features from "../Features/Features";
import FeedBack from "../FeedBack/FeedBack";
import ShowFeedBack from "../ShowFeedBack/ShowFeedBack"

const Home = () => {
  return (
    <div>
     
        <Banner></Banner>
       
     <Collabaretions></Collabaretions>
    

      <Features></Features>
      <ShowFeedBack></ShowFeedBack>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
