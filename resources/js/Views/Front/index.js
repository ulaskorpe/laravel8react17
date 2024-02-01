import { inject, observer } from "mobx-react";
import React from "react";
const Front=(props)=>{
      props.AuthStore.getToken()
    
    return(<div>this is the  way</div>)
}

export default inject("AuthStore")(observer(Front)); 