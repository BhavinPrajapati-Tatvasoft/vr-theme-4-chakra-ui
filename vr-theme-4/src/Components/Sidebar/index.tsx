import { Image, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { docsIcon } from "../../assets/images";

const Sidebar: React.FC = () => {

  function closeSidebar() {
    document.body.classList.remove("open-sidebar");
  }

  return (
    <>
    <List className="sidebar">
    <ListItem>
          <NavLink
            to="/innerpage"
            title="Users"
            className="nav-link"
            onClick={closeSidebar}
          >
            <Image src={docsIcon} alt="Users" />
            <Text as="span">Users</Text>
          </NavLink>
        </ListItem>
    </List>
    </>
  );
};
export default Sidebar;
