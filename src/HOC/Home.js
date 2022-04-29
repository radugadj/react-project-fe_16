import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./globalContext";

import Layout from "./Layout";
import { Container, Flex } from "./globalStyles";
import {
  SwitchButton,
} from "./homestyles";
const Home = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme, themeSwitchHandler]);

  return (
    <Layout>
        <Container fluid>
          <Flex center>
						{/* 2. */}
            <SwitchButton>
              <input
                type='checkbox'
                onChange={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
              />
              <span></span>
            </SwitchButton>
          </Flex>
        </Container>
    </Layout>
  );
};

export default Home;