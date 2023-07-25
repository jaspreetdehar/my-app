// import Test from './components/Test/Test';
import './App.css';
import React, { useState } from 'react'

// import ColorList from './components/colorList/ColorList';
// import Coin from './components/coin/Coin';
// import CoinList from './components/coin/CoinList';
// import Color from './components/colorList/Color';
// import PropComp from './components/propertylist/PropComp'
// import Photo from './pic/Photo.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Provalue from './components/propertyPage/Provalue'
// import Dil from './dil/Dil';
import Object from './components/object/Object';
// import SignIn from './components/login/SignIn';
// import PropComp1 from './components/propertyPage/PropComp1';
// import DieRoll from './components/DieRoll/DieRoll';
// import CardImage from './components/randomcard/CardImage';
// import P from './components/practice/P';
import Navbar from './components/box/Navbar';
import Contact from './components/box/Contact';
import About from './components/box/About';
import { Route, Routes } from 'react-router-dom';
// import Colorcard from './colorcard/Colorcard';
// import PropList1 from './components/propertyPage/PropList1'
// import Colorcard from './colorcard/Colorcard';
// import Card from './colorcard/Card';
// import Card from './colorcard/Card';
// import Time from './date/Time';
function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {

      setMode("dark")
      document.body.style.backgroundColor = 'grey'
    }
    else {
        setMode("light")
        document.body.style.backgroundColor = 'white'
    
      }
    }
    return (
      <div className="App">
        {/* <Dil/> */}

      {/* <Card /> */}


     {/* <div className="container my-3">
       <Contact heading="enter the text to analuze below" mode={mode} toggleMode={toggleMode} />
    </div>  */}

     <Navbar title="dehar" mode={mode} toggleMode={toggleMode} />
    
      <Routes>
        <Route path='/' element={<Object />}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact heading="Enter the text here" mode={mode}/>}/>
      </Routes>
       
      {/* <Card/> */}

      {/*    
      <SignIn />
       <header className="App-header"></header>
       <Time/> 
      <Provalue />
      <DieRoll />
      <Test jaspreet={'MCA'}></Test>
      <Test jaspreet={'MBA'}></Test>
      <Test akash={'1'}></Test>
      <Test akash={'2'}></Test>
      <Photo />
      <CoinList />
      <ColorList />
      <CardImage />
      <PropComp />
      <P />
      <PropComp1 />*/}

    </div>

  );
}

export default App;
