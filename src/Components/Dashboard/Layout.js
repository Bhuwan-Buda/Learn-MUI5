import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
    marginLeft: "auto",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const Layout = (props) => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Main open={open}>
        {props.children}
      </Main>
    </>
  );
};

export default Layout;
