import { Hide, Image, List, ListItem, Show, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import {
  dashboardActiveIcon,
  dashboardIcon,
  docsActiveIcon,
  docsIcon,
  helpActiveIcon,
  helpIcon,
  logo,
  settingActiveIcon,
  settingIcon,
  timelineActiveIcon,
  timelineIcon,
  userActiveIcon,
  userIcon,
} from "../../assets/images";

const Sidebar: React.FC = () => {
  function closeSidebar() {
    document.body.classList.remove("open-sidebar");
  }

  return (
    <>
      <div className="sidebar">
        <Hide below="md">
          <Link to="#" title="Company" className="logo">
            <Image src={logo} />
          </Link>
        </Hide>
        <List>
          <ListItem>
            <NavLink
              to="/dashboard"
              title="Dashboard"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image src={dashboardIcon} className="default-icon" />
                <Image src={dashboardActiveIcon} className="active-icon" />
              </Text>
              <Text as="span">Dashboard</Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/innerpage"
              title="Users"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image src={userIcon} alt="Users" className="default-icon" />
                <Image
                  src={userActiveIcon}
                  alt="Users"
                  className="active-icon"
                />
              </Text>
              <Text as="span">Users</Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/"
              title="Docs"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image src={docsIcon} alt="Docs" className="default-icon" />
                <Image
                  src={docsActiveIcon}
                  alt="Docs"
                  className="active-icon"
                />
              </Text>
              <Text as="span">Docs</Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/"
              title="Timeline"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image
                  src={timelineIcon}
                  alt="Timeline"
                  className="default-icon"
                />
                <Image
                  src={timelineActiveIcon}
                  alt="Timeline"
                  className="active-icon"
                />
              </Text>
              <Text as="span">Timeline</Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/"
              title="Help"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image src={helpIcon} alt="Help" className="default-icon" />
                <Image
                  src={helpActiveIcon}
                  alt="Help"
                  className="active-icon"
                />
              </Text>
              <Text as="span">Help</Text>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/"
              title="Settings"
              className="nav-link"
              onClick={closeSidebar}
            >
              <Text as="span" className="img-wrapper">
                <Image
                  src={settingIcon}
                  alt="Settings"
                  className="default-icon"
                />
                <Image
                  src={settingActiveIcon}
                  alt="Settings"
                  className="active-icon"
                />
              </Text>
              <Text as="span">Settings</Text>
            </NavLink>
          </ListItem>
        </List>
      </div>
    </>
  );
};
export default Sidebar;
