import dayIcon from "../../assets/componentAsset/day.png"
import nightIcon from "../../assets/componentAsset/night.png"

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const switchHeight=12;
const switchWidth=36;


export const AntSwitch = withStyles((theme) => ({
    root: {
      width: 36,
      height: 21,
      padding: 2,
      display: 'flex',    
    },
    switchBase: {   
        width: 36,
        height: 21,
    //   paddingLeft: 7, 
    //   paddingRight: 2, 

      color: theme.palette.grey[500],
      '&$checked': { 
          transform: 'translateX(10px)',
        color: theme.palette.common.white,
        '& + $track': {
            // width: 36,
            // height: 21,
            backgroundImage:`url(${dayIcon})`,
            backgroundRepeat:"no-repeat",
          opacity: 1,
        //   backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
        '&$checked':{
            backgroundColor:"#ff0",
        },
        backgroundColor:"#000000",
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: 
    {
      backgroundImage:`url(${nightIcon})`,
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {
        // backgroundColor:"#000000"
    },
  }))(Switch);