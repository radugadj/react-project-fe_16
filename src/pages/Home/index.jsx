import React from "react";
import { Route, Switch } from 'react-router-dom'; 


import { Message } from "../../components";


import "./Home.scss";

const  Home = () => (
  <section className="home">
      <Message avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
      text="Салам, Брут! Че как? Уничтожил флот галов? " 
      />
      </section>
);

export default Home;