import React from 'react';
import { withRouter } from 'react-router-dom/';
import Header from '../Header';
import Header2 from '../Header2';



const UserArea = ({ location }) =>  {

  
    if(location.pathname === "/" || location.pathname === "/Forgot" ){
      return(<Header/>  )
    }
    else{
      return(<Header2/>)
    }
};

export default withRouter(UserArea);
