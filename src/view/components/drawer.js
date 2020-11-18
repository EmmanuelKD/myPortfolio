import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const appBarHeight = 54;
const useStyles = makeStyles((theme)=>({
  list: {
  
    height:50,
    
    backgroundColor:"transparent",
  },
  fullList: {

    width: "auto",
  },
  drawer:{
    // transparent

   transform:`translateY(${appBarHeight}px)`,
  },

  drawerListItem:{
backgroundColor:theme.palette.primary.main,
marginTop:"20px",
marginBottom:"20px",
borderTopRightRadius:10,
borderBottomRightRadius:10,
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawerState] = React.useState(false);

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawerState(toggle);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}
           className={classes.drawerListItem}>
            <ListItemIcon>{index % 2 === 0 ? "one" : "two"}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>    
    </div>
  );

  return (
    <div> 
      <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer(!openDrawer)}>
            {"left"}
          </Button>
          <Drawer
         
          elevation={0}
          className={classes.drawer}
            anchor={"left"}
            open={openDrawer}
            onClose={toggleDrawer(!openDrawer)}>

            {list("left")}
          </Drawer>
        </React.Fragment>      
    </div>
  );
}
