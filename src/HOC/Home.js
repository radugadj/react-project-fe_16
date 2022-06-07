import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./globalContext";

import Layout from "./Layout";
import { Container, Flex } from "./globalStyles";
import {
  Button,
} from "./homestyles";
const Home = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  });

  return (
    <Layout>
        <Container fluid>
          <Flex center>
						{/* 2. */}
            <Button className="btn"
                onClick={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
                >
                SwitchTheme
            </Button>
          </Flex>
        </Container>
    </Layout>
  );
};

export default Home;