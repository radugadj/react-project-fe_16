import React from "react";
import { Message } from "../../components";

import "./Home.scss";


const  Home = () => (
  <section className="home">
      <Message avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
      text="Салам, Брут! Че как? Уничтожил флот галов? " 
      date="Tue Mar 01 2022 23:23" />
      </section>
);

export default Home;