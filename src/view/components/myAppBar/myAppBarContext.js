import React, { PureComponent} from 'react'
import {DrawerContext} from "../../../reactContext"

const DrawerContextConsumer=DrawerContext.Consumer;

class DrawerContextProvider extends PureComponent{

    constructor(props){
        super(props)
        this.state={
            isDrawerOpen:false,
            drawerSelectedIndex:null,
        }
    }


    render(){
        return(<DrawerContext.Provider value={
        {  state:this.state,
            isDrawerOpen:this.state.isDrawerOpen,
            drawerSelectedIndex:this.state.drawerSelectedIndex,
        }
        }>
{
this.props.children
}
          </DrawerContext.Provider>
        );
    }


}

export {DrawerContextProvider, DrawerContextConsumer}