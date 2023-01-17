import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { Hide } from "@chakra-ui/media-query";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Link as customLink, Link } from "react-router-dom";
import { adminUser, logoPng, messageIcon, profileDownArrowIcon, searchIcon } from "../../assets/images";

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
        <Link to="#" title="Company" className="logo"><Image src={logoPng} /></Link>
        <div className="search-wrapper">
          <Input type="text" variant="outline" placeholder="Search" />
        </div>
        <div className="right-content">
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
                <Text>Jhon Doe</Text>
              </Hide>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My Account</MenuItem>
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
