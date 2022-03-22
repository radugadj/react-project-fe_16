import React from "react";
import { Message } from "../../components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Message
      avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      text="Привет, как дела?"
    />
    <Message
      avatar="https://miro.medium.com/max/1400/1*JyYin7G7aGwgD9zpYBZ12Q.png"
      text="Привет, все хорошо, а ты как?"
      isMe={true}
      isReaded={true}
    />
  </section>
);

export default Home;
