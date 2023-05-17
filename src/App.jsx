
import './App.css'

import ParentComponent from './Components/ParentComponent'
// import ChildComponent from './Components/ChildComponent'

function App() {

// const saludo = "Hello";
const nombre1 = "Lucky";
// const arrayNombres =[{nombre:"Lucky",edad:"20"},{nombre:"Mica",edad:"21"},
// {nombre:"Mildried",edad:"22"},{nombre:"Ana",edad:"23"},{nombre:"Bety",edad:"24"}];
const nombre2 = "Lola";
// eslint-disable-next-line no-unused-vars
// let nombres = arrayNombres.map(name => {
  return (
    <>
  

  <ParentComponent nombre1={nombre1} nombre2={nombre2} />
  {/* <ChildComponent saludo={saludo} /> */}


    </>
        
        ); 
    // });
  
  
}

export default App
