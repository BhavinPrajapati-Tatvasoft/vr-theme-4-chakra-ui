import { IconButton } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { AspectRatio, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { Helmet } from "react-helmet";
import {
  customersCardIcon,
  dataChart,
  earningCardIcon,
  greenArrowIcon,
  growthCardIcon,
  ordersCardIcon,
  redArrowIcon,
  threeDotsIcon,
} from "../../assets/images";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* Main content Start */}
        <div className="main-content">
          <Text as="h3" className="page-title">
            Dashboard
          </Text>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: "16px", lg: "20px", xl: "30px" }}
          >
            <GridItem colSpan={{ base: 12, xl: 6 }}>
              <Grid
                templateColumns="repeat(12, 1fr)"
                gap={{ base: "16px", lg: "20px", xl: "30px" }}
              >
                <GridItem colSpan={{ base: 12, xl: 6 }}>
                  <a
                    href="#"
                    title="Customers"
                    className="statistic-card sale-up"
                  >
                    <Text as="h6" className="card-title">
                      Customers
                    </Text>
                    <div className="flex-block">
                      <div>
                        <Text as="h4" className="card-number">
                          45,320
                        </Text>
                        <Text as="span" className="data-difference">
                          <Image src={greenArrowIcon} alt="Arrow Up" />
                          21.25%
                        </Text>
                        <Text as="span" className="data-time-log">
                          Since Last Month
                        </Text>
                      </div>
                      <Image src={customersCardIcon} alt="Card Icon" />
                    </div>
                  </a>
                </GridItem>
                <GridItem colSpan={{ base: 12, xl: 6 }}>
                  <a
                    href="#"
                    title="Orders"
                    className="statistic-card sale-down"
                  >
                    <Text as="h6" className="card-title">
                      Orders
                    </Text>
                    <div className="flex-block">
                      <div>
                        <Text as="h4" className="card-number">
                          1,245
                        </Text>
                        <Text as="span" className="data-difference">
                          <Image src={redArrowIcon} alt="Arrow Down" />
                          5.25%
                        </Text>
                        <Text as="span" className="data-time-log">
                          Since Last Month
                        </Text>
                      </div>
                      <Image src={ordersCardIcon} alt="Card Icon" />
                    </div>
                  </a>
                </GridItem>
                <GridItem colSpan={{ base: 12, xl: 6 }}>
                  <a
                    href="#"
                    title="Earning"
                    className="statistic-card sale-down"
                  >
                    <Text as="h6" className="card-title">
                      Earning
                    </Text>
                    <div className="flex-block">
                      <div>
                        <Text as="h4" className="card-number">
                          $ 56,890
                        </Text>
                        <Text as="span" className="data-difference">
                          <Image src={redArrowIcon} alt="Arrow Down" />
                          3.24%
                        </Text>
                        <Text as="span" className="data-time-log">
                          Since Last Month
                        </Text>
                      </div>
                      <Image src={earningCardIcon} alt="Card Icon" />
                    </div>
                  </a>
                </GridItem>
                <GridItem colSpan={{ base: 12, xl: 6 }}>
                  <a href="#" title="Growth" className="statistic-card sale-up">
                    <Text as="h6" className="card-title">
                      Growth
                    </Text>
                    <div className="flex-block">
                      <div>
                        <Text as="h4" className="card-number">
                          + 60.20%
                        </Text>
                        <Text as="span" className="data-difference">
                          <Image src={greenArrowIcon} alt="Arrow Down" />
                          15.89%
                        </Text>
                        <Text as="span" className="data-time-log">
                          Since Last Month
                        </Text>
                      </div>
                      <Image src={growthCardIcon} alt="Card Icon" />
                    </div>
                  </a>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem colSpan={{ base: 12, xl: 6 }}>
              <Card className="revenue-card">
                <div className="card-heading">
                  <Text as="h6" className="card-title">
                    Revenue
                  </Text>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<Image src={threeDotsIcon} />}
                      variant="outline"
                      className="custom-table-menu"
                    />
                    <MenuList>
                      <MenuItem>New Row</MenuItem>
                      <MenuItem>New Data</MenuItem>
                      <MenuItem>Delete Log</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <Image
                  src={dataChart}
                  alt="Data Chart"
                  className="data-chart"
                />
              </Card>
            </GridItem>

            <GridItem colSpan={{ base: 12, xl: 9 }}>
              <Card className="table-card">
                <div className="card-heading">
                  <Text as="h6" className="card-title">
                    Top Selling Product
                  </Text>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<Image src={threeDotsIcon} />}
                      variant="outline"
                      className="custom-table-menu"
                    />
                    <MenuList>
                      <MenuItem>New Row</MenuItem>
                      <MenuItem>New Data</MenuItem>
                      <MenuItem>Delete Log</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Product Name</Th>
                        <Th>Date</Th>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                        <Th>Amount</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Ice Lemon Tea</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>57</Td>
                        <Td>$3,372.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Banana Small</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>123</Td>
                        <Td>$5,737.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Fresh Lemon Fruit</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>9000</Td>
                        <Td>$3,966.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Banana Milkshake</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>247</Td>
                        <Td>$3,443.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Cheese Roll</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>3000</Td>
                        <Td>$3,284.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Macadamia Chocola</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>2190</Td>
                        <Td>$7,035.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Sardine Buns Type A</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>155</Td>
                        <Td>$1,892.00</Td>
                      </Tr>
                      <Tr>
                        <Td>Essential Waitrose D</Td>
                        <Td>21 Sep, 2020</Td>
                        <Td>$8.99</Td>
                        <Td>171</Td>
                        <Td>$5,402.00</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Card>
            </GridItem>

            <GridItem colSpan={{ base: 12, xl: 3 }}>
              <Card className="campaign-card">
                <div className="card-heading">
                  <Text as="h6" className="card-title">
                    Campaign
                  </Text>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<Image src={threeDotsIcon} />}
                      variant="outline"
                      className="custom-table-menu"
                    />
                    <MenuList>
                      <MenuItem>New Row</MenuItem>
                      <MenuItem>New Data</MenuItem>
                      <MenuItem>Delete Log</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <CircularProgress value={60} size="302px" thickness="5px">
                  <CircularProgressLabel>
                    <Text as="h3">60%</Text>
                    <Text as="h6">Progress</Text>
                  </CircularProgressLabel>
                </CircularProgress>
                <div className="bottom-text">
                  <Text as="h5">$53,000.00</Text>
                  <Text as="h6">Used Balance this Billing Cycle</Text>
                </div>
              </Card>
            </GridItem>
          </Grid>
        </div>
        {/* Main content End */}
      </div>
    </>
  );
};
export default Dashboard;
