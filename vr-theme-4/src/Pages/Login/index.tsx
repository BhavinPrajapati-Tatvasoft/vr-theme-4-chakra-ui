import * as React from "react";
import {
  Button,
  Grid,
  GridItem,
  Image,
  Input,
  Show,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  diamondShape,
  loginBanner,
  loginLogo,
  pillShape,
  roundShape,
} from "../../assets/images";
import { TweenMax } from "gsap";
import gsap from "gsap";
const { useLayoutEffect } = React;

const Login = () => {
  //Animatioins
  useLayoutEffect(() => {
    let loginMockup = gsap.timeline();
    loginMockup.fromTo(
      ".login-logo",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 }
    );
    loginMockup.fromTo(
      ".login-form-outer",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1 }
    );
    loginMockup.fromTo(
      ".chakra-tabs__tab-panel > *",
      { opacity: 0 },
      { opacity: 1, stagger: 0.2 }
    );
    loginMockup.fromTo(
      ".login-wrapper .copyright-text",
      { opacity: 0 },
      { opacity: 1 }
    );
    let shape = gsap.timeline();
    shape.fromTo(
      ".diamond-shape",
      { y: "-1500px" },
      { y: 0, stagger: 0.2, duration: 1 }
    );
    shape.fromTo(
      ".pill-shape",
      { x: "-300%", rotate: "-360deg" },
      { x: 0, rotate: 0, stagger: 0.2, duration: 1 }
    );
    shape.fromTo(".round-shape", { scale: 0 }, { scale: 1, duration: 1 });

    const parallaxContainer = document.getElementById("parallax-container");
    const parallaxItems = document.getElementsByClassName("parallax");
    const parallaYItems = document.getElementsByClassName("parallay");
    const parallaZItems = document.getElementsByClassName("parallaz");
    const fixerX = 0.003;
    const fixerY = 0.007;
    const fixerZ = 0.01;

    document.addEventListener("mouseover", function (event) {
      if (parallaxContainer) {
        const pageX =
          event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5;
        const pageY =
          event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5;
        for (let i = 0; i < parallaxItems.length; i++) {
          const item = parallaxItems[i];
          const speedX = parseInt(item.getAttribute("data-speed-x") as string);
          const speedY = parseInt(item.getAttribute("data-speed-y") as string);
          if (speedX && speedY) {
            TweenMax.set(item, {
              x: ((item as HTMLElement).offsetLeft + pageX * speedX) * fixerX,
              y: ((item as HTMLElement).offsetTop + pageY * speedY) * fixerX,
            });
          }
        }
        for (let i = 0; i < parallaYItems.length; i++) {
          const item = parallaYItems[i];
          const speedX = parseInt(item.getAttribute("data-speed-x") as string);
          const speedY = parseInt(item.getAttribute("data-speed-y") as string);
          if (speedX && speedY) {
            TweenMax.set(item, {
              x: ((item as HTMLElement).offsetLeft + pageX * speedX) * fixerY,
              y: ((item as HTMLElement).offsetTop + pageY * speedY) * fixerY,
            });
          }
        }
        for (let i = 0; i < parallaZItems.length; i++) {
          const item = parallaZItems[i];
          const speedX = parseInt(item.getAttribute("data-speed-x") as string);
          const speedY = parseInt(item.getAttribute("data-speed-y") as string);
          if (speedX && speedY) {
            TweenMax.set(item, {
              x: ((item as HTMLElement).offsetLeft + pageX * speedX) * fixerZ,
              y: ((item as HTMLElement).offsetTop + pageY * speedY) * fixerZ,
            });
          }
        }
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-wrapper">
        <Grid templateColumns="repeat(12, 1fr)" className="login-container">
          {/* Login Form Wrapper Start */}
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            <div className="login-wrapper-left">
              <Link to="#" className="login-logo" title="Logo">
                <Image src={loginLogo} alt="Logo" />
              </Link>
              <div className="login-form-outer">
                <form className="login-form">
                  <Tabs className="login-tab">
                    <TabList>
                      <Tab>Log In</Tab>
                      <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Text as="h4">Log In into your account</Text>
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Username"
                          className="username-field"
                        />
                        <Input
                          type="password"
                          variant="flushed"
                          placeholder="Password"
                          className="password-field"
                        />
                        <Button
                          w="100%"
                          as={Link}
                          to="/dashboard"
                          className="btn-primary"
                          variant="primary"
                          title="Login"
                        >
                          Log in
                        </Button>
                        <Link
                          to="#"
                          title="Forgot Password?"
                          className="primary-link"
                        >
                          Forgot Password?
                        </Link>
                      </TabPanel>
                      <TabPanel>
                        <Text as="h4">Register Here</Text>
                        <Input
                          type="text"
                          variant="flushed"
                          placeholder="Username"
                          className="username-field"
                        />
                        <Input
                          type="password"
                          variant="flushed"
                          placeholder="Password"
                          className="password-field"
                        />
                        <Button
                          w="100%"
                          as={Link}
                          to="/dashboard"
                          className="btn-primary"
                          variant="primary"
                          title="Login"
                        >
                          Register
                        </Button>
                        <Link to="#" title="Log In" className="primary-link">
                          Click Here For Log In
                        </Link>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </form>
              </div>
              <Text as="p" className="copyright-text">
                ?? 2021 Dummy Company. All rights reserved.
              </Text>
            </div>
          </GridItem>
          {/* Login Form Wrapper End */}

          {/* Login Banner Start */}
          <Show above="lg">
            <GridItem colSpan={{ base: 12, lg: 6 }}>
              <div className="login-wrapper-right">
                <Image
                  src={loginBanner}
                  alt="Login Banner"
                  onLoad={(e) => {
                    let loginImg = gsap.timeline();
                    loginImg.fromTo(
                      ".login-wrapper-right .chakra-image",
                      { opacity: 0, scale: 0, rotation: 360 },
                      { opacity: 1, scale: 1, rotation: 0, duration: 1.5 }
                    );
                  }}
                />
              </div>
            </GridItem>
          </Show>
          {/* Login Banner End */}
        </Grid>

        {/* Background Shapes */}
        <div className="shape-wrapper" id="parallax-container">
          <div className="blue shape"></div>
          <div className="pink shape"></div>
          <Image
            src={diamondShape}
            alt="Diamond Shape"
            className="diamond-shape parallax"
            data-speed-x="26"
            data-speed-y="26"
          />
          <Image
            src={pillShape}
            alt="Pill Shape"
            className="pill-shape parallay"
            data-speed-x="6"
            data-speed-y="6"
          />
          <Image
            src={roundShape}
            alt="Round Shape"
            className="round-shape parallaz"
            data-speed-x="18"
            data-speed-y="18"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
