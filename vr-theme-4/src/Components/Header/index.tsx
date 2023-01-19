import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { Hide, Show } from "@chakra-ui/media-query";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Link as customLink, Link } from "react-router-dom";
import {
  adminUser,
  hamburgerIcon,
  logo,
  messageIcon,
  profileDownArrowIcon,
  searchIcon,
} from "../../assets/images";

const Header: React.FC = () => {
  return (
    <>
      <div
        className="overlay"
        onClick={(e) =>
          document.body.classList.remove("open-sidebar", "show-searchbar")
        }
      ></div>
      <header className="header">
        <Show below="md">
          <IconButton
            variant="outline"
            aria-label="toggle-menu"
            className="toggle-button icon-btn"
            icon={<Image alt="Hamburger" src={hamburgerIcon} />}
            onClick={(e) => {document.body.classList.add("open-sidebar");document.body.classList.remove("show-searchbar");}}
          />
          <Link to="#" title="Company" className="logo">
            <Image src={logo} />
          </Link>
        </Show>
        <div className="search-wrapper">
          <Input type="search" variant="flushed" placeholder="Search" />
        </div>
        <div className="right-content">
          <Show below="md">
            <IconButton
              variant="outline"
              aria-label="Search"
              className="search-toggle icon-btn"
              icon={<Image alt="Search" src={searchIcon} />}
              onClick={(e) => {document.body.classList.toggle("show-searchbar");document.body.classList.remove("open-sidebar");}}
            />
          </Show>
          <IconButton
            variant="outline"
            aria-label="Message"
            className="icon-btn"
            icon={<Image alt="Message" src={messageIcon} />}
          />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                <Hide below="lg">
                  <Image src={profileDownArrowIcon} alt="Down Arrow" />
                </Hide>
              }
            >
              <Image src={adminUser} alt="User" className="user-profile-pic" />
              <Hide below="lg">
                <Text>John Doe</Text>
              </Hide>
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem as={customLink} to="/login">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </header>
    </>
  );
};
export default Header;
