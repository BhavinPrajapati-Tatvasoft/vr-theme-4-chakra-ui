import {
  Button,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Show,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import {
  diamondShape,
  loginBanner,
  loginLogo,
  pillShape,
  roundShape,
} from "../../assets/images";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-wrapper">
        <Grid templateColumns="repeat(12, 1fr)" className="login-container">
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            <div className="login-wrapper-left">
              <Link href="#" className="login-logo" title="Logo">
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
                        >
                          Log in
                        </Button>
                        <Link href="#" title="Forgot Password?">
                          Forgot Password?
                        </Link>
                      </TabPanel>
                      <TabPanel>
                        <p>two!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </form>
              </div>
              <Text as="p" className="copyright-text">
                © 2021 Dummy Company. All rights reserved.
              </Text>
            </div>
          </GridItem>
          <Show above="lg">
            <GridItem colSpan={{ base: 12, lg: 6 }}>
              <div className="login-wrapper-right">
                <Image src={loginBanner} alt="Login Banner" />
              </div>
            </GridItem>
          </Show>
        </Grid>
      </div>
      <div className="shape-wrapper">
        <div className="blue shape"></div>
        <div className="pink shape"></div>
        <Image
          src={diamondShape}
          alt="Diamon Shape"
          className="diamond-shape"
        />
        <Image src={pillShape} alt="Pill Shape" className="pill-shape" />
        <Image src={roundShape} alt="Round Shape" className="round-shape" />
      </div>
    </>
  );
};

export default Login;
