import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="login-wrapper">
      <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={{ base: 12, lg: 6 }} >
        left Content
      </Grid>
      <GridItem colSpan={{ base: 12, lg: 6 }} >
      Right Content
      </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Login;
