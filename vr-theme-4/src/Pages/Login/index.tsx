import {
  Button,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { loginBanner, loginLogo } from "../../assets/images";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-wrapper">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            <Link href="#">
              <Image src={loginLogo} alt="Logo" />
            </Link>
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
                    />
                    <Input
                      type="password"
                      variant="flushed"
                      placeholder="Password"
                    />
                    <Button
                      w="100%"
                      as={Link}
                      to="/dashboard"
                      variant="primary"
                    >
                      Log in
                    </Button>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </form>
          </GridItem>
          <GridItem colSpan={{ base: 12, lg: 6 }}>
            <Image src={loginBanner} alt="Login Banner" />
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default Login;
