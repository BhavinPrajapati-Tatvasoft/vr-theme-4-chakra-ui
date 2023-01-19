import {
  Alert,
  AlertDescription,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import {
  alertErrorIcon,
  alertInfoIcon,
  alertSuccessIcon,
  alertWarningIcon,
  arrowDownwardIcon,
  hidePasswordIcon,
  showPasswordIcon,
  uploadIcon,
} from "../../assets/images";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Innerpage = () => {
  //password input state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordClick = () => setShowPassword(!showPassword);
  return (
    <>
      <Helmet>
        <title>Innerpage</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main-content innerpage">
          <Text as="h3" className="page-title">
            Users
          </Text>
          <Card className="revenue-card">
            <Text as="h5" pt={{ lg: 1 }} pb={{ base: "10px", sm: "16px" }}>
              One Column
            </Text>
            <FormControl
              pb={{
                base: "16px",
                sm: "24px",
                md: "32px",
                lg: "44px",
                xl: "53px",
              }}
            >
              <Input type="text" placeholder="Name" />
            </FormControl>
            <FormControl
              pb={{
                base: "16px",
                sm: "20px",
                md: "32px",
                lg: "44px",
                xl: "20px",
              }}
            >
              <Select
                placeholder="Country"
                variant="flushed"
                icon={<Image src={arrowDownwardIcon} alt="Arrow Down" />}
              >
                <option value="option1">India</option>
                <option value="option2">Australia</option>
                <option value="option3">USA</option>
              </Select>
            </FormControl>
            <Textarea variant="flushed" placeholder="Text area" rows={3} />

            {/* -------- Two column start ---------  */}
            <section className="secondary-section">
              <Text as="h5" pb={{ base: "10px", sm: "16px", md: "22px" }}>
                Two Column
              </Text>
              <Grid
                templateColumns="repeat(6, 1fr)"
                columnGap={{ base: "16px", md: "30px" }}
                gridRowGap={{
                  base: "16px",
                  sm: "24px",
                  md: "30px",
                  lg: "40px",
                  xl: "52px",
                }}
              >
                <GridItem colSpan={{ base: 12, md: 3 }}>
                  <FormControl>
                    <Input type="text" placeholder="Name" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 3 }}>
                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Password Icon"
                        onClick={handleClick}
                        icon={
                          <Image
                            src={show ? showPasswordIcon : hidePasswordIcon}
                          />
                        }
                        className="password-iconbutton"
                      />
                    </InputRightElement>
                  </InputGroup>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 3 }}>
                  <FormControl isInvalid>
                    <Input
                      type="text"
                      placeholder="Error"
                      isInvalid
                      focusBorderColor="blue"
                    />
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, md: 3 }}>
                  <FormControl>
                    <Select
                      placeholder="Country"
                      variant="flushed"
                      icon={<Image src={arrowDownwardIcon} alt="Arrow Down" />}
                    >
                      <option value="option1">India</option>
                      <option value="option2">Australia</option>
                      <option value="option3">USA</option>
                    </Select>
                  </FormControl>
                </GridItem>
              </Grid>
            </section>

            {/* -------- Three column start ---------  */}
            <section className="secondary-section three-col">
              <Text as="h5" pb={{ base: "10px", sm: "16px", xl: "39px" }}>
                Three Column
              </Text>
              <Grid
                templateColumns="repeat(12, 1fr)"
                columnGap={{ base: "16px", md: "30px" }}
                rowGap={{ base: "16px", sm: "24px", md: "30px", lg: "0" }}
              >
                <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                  <FormControl>
                    <Input type="text" placeholder="Focus" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                  <FormControl>
                    <Input type="text" placeholder="Disabled" disabled />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                  <FormControl isInvalid>
                    <Input
                      type="text"
                      placeholder="Error"
                      isInvalid
                      focusBorderColor="blue"
                    />
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
            </section>

            {/* -------- Four column start ---------  */}
            <section className="secondary-section four-col">
              <Text as="h5" pb={{ base: "10px", sm: "18px" }}>
                Four Column
              </Text>
              <Grid
                templateColumns="repeat(12, 1fr)"
                columnGap={{ base: "16px", md: "30px" }}
                rowGap={{ base: "16px", sm: "24px", md: "30px", lg: "0" }}
              >
                <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                  <FormControl>
                    <Input type="text" placeholder="Name" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                  <FormControl>
                    <Select
                      placeholder="Dropdown"
                      variant="flushed"
                      icon={<Image src={arrowDownwardIcon} alt="Arrow Down" />}
                    >
                      <option value="option1">India</option>
                      <option value="option2">Australia</option>
                      <option value="option3">USA</option>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                  <FormControl>
                    <Input type="text" placeholder="Disabled" disabled />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                  <FormControl>
                    <Select
                      placeholder="Country"
                      variant="flushed"
                      icon={<Image src={arrowDownwardIcon} alt="Arrow Down" />}
                    >
                      <option value="option1">India</option>
                      <option value="option2">Australia</option>
                      <option value="option3">USA</option>
                    </Select>
                  </FormControl>
                </GridItem>
              </Grid>
            </section>

            {/* -------- Other Design start ---------  */}
            <section className="secondary-section other-section">
              <Text as="h5" pb={{ base: "16px", md: "22px", xl: "31px" }}>
                Other Design elements
              </Text>
              <Text as="h6" pb="14px">
                File Upload
              </Text>
              <div className="file-upload-wrapper">
                <div className="file-content">
                  <input
                    type="file"
                    name="Upload"
                    id="upload"
                    placeholder="Upload"
                  />
                  <Image src={uploadIcon} alt="Upload Icon" />
                  <Text as="p">Upload</Text>
                </div>
                <Text as="p">No item Selected</Text>
              </div>

              {/* -------- Radio start ---------  */}
              <Text as="h6" pb="14px">
                Radio Button
              </Text>
              <RadioGroup defaultValue="Option1" className="radio-group">
                <HStack spacing="28px">
                  <Radio value="Option1">Option 1</Radio>
                  <Radio value="Option2">Option 2</Radio>
                </HStack>
              </RadioGroup>

              {/* -------- Checkbox start ---------  */}
              <Text as="h6" pb="14px">
                Check Box
              </Text>
              <div className="check-group">
                <HStack spacing="28px">
                  <Checkbox defaultChecked>Option 1</Checkbox>
                  <Checkbox>Option 2</Checkbox>
                </HStack>
              </div>

              {/* -------- Snackbar start ---------  */}
              <SimpleGrid
                gap={{ base: "16px", md: "19px" }}
                columns={1}
                className="snackbar-group"
              >
                <Alert status="error" className="alert-error">
                  <Image src={alertErrorIcon} />
                  <AlertDescription>This is an error Message</AlertDescription>
                </Alert>
                <Alert status="warning" className="alert-warning">
                  <Image src={alertWarningIcon} />
                  <AlertDescription>
                    This is a warning message!
                  </AlertDescription>
                </Alert>
                <Alert status="info" className="alert-info">
                  <Image src={alertInfoIcon} />
                  <AlertDescription>
                    This is an information message!
                  </AlertDescription>
                </Alert>
                <Alert status="success" className="alert-success">
                  <Image src={alertSuccessIcon} />
                  <AlertDescription>
                    This is a Success message!
                  </AlertDescription>
                </Alert>
              </SimpleGrid>

              {/* -------- Button Group start ---------  */}
              <Text as="h5" pb={{ base: "16px", md: "24px" }}>
                Call to Action
              </Text>
              <HStack
                spacing={{ base: "20px", md: "39px" }}
                className="btn-groups"
              >
                <Button variant="primary" className="btn-primary">
                  Primary
                </Button>
                <Button variant="outline" className="btn-outline-primary">
                  Secondary
                </Button>
              </HStack>

              {/* -------- Tab start ---------  */}
              <div className="secondary-section tab-wrapper">
                <Text as="h5" pb={{ base: "16px", md: "24px" }}>
                  Tabs
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like). It is a long established fact that a reader will be
                      distracted. It is a long established fact that a reader
                      will be distracted.
                    </TabPanel>
                    <TabPanel>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy.
                    </TabPanel>
                    <TabPanel>
                      It is a long established fact that a reader will be
                      distracted.
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Innerpage;
