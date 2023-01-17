import {
  Grid,
  GridItem,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
              <form className="login-form">
                <Tabs>
                  <TabList>
                    <Tab>Log In</Tab>
                    <Tab>Sign Up</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </form>
            </Link>
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
