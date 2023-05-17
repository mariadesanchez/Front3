/* eslint-disable react/prop-types */
function ChildComponent({nombre1,nombre2}) {


    return (
        <>
    
            <p style={{background:"red",color:"white"}}>Hola {nombre1}</p>
            <p style={{background:"green",color:"black"}}>Hola {nombre2}</p>
         
        </>
    )
}

export default ChildComponent
