/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ChildComponent from "./ChildComponent"

const ParentComponent = ({nombre1,nombre2}) => {
 


    return(
        <>
            <ChildComponent nombre1={nombre1} nombre2={nombre2}/>
          
            
        </>
    )

}

export default ParentComponent