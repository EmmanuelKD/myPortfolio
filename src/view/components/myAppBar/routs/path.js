import React from "react"
import {BrowserRouter, Route, Switch } from "react-router-dom";


export default function Routs(props){   
      const {Contact,MyProjects,AppBar, BottomBar, Skills , Dashboard }=props;
      
        return(              
        <BrowserRouter>
        <AppBar/>
   <div>     
      <Switch >
        <Route path="/" exact> <Dashboard/> </Route>
        <Route path="/skills"> <Skills/> </Route>
        <Route path="/info"> <>info</> </Route>
        <Route path="/projects"> <MyProjects/> </Route>
        <Route path="/contact"> <Contact/> </Route>
        <Route component={()=><div><center>404</center></div>}></Route>
      </Switch>
      </div>
      <BottomBar/>
    </BrowserRouter>          
 );
    
}