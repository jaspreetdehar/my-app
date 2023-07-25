// import Test from './components/Test/Test';
import './App.css';
// import ColorList from './components/colorList/ColorList';
// import Coin from './components/coin/Coin';
// import CoinList from './components/coin/CoinList';
// import Color from './components/colorList/Color';
// import PropComp from './components/propertylist/PropComp'
// import Photo from './pic/Photo.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Provalue from './components/propertyPage/Provalue'
// import Object from './components/object/Object';
// import SignIn from './components/login/SignIn';
// import PropComp1 from './components/propertyPage/PropComp1';
// import DieRoll from './components/DieRoll/DieRoll';
// import CardImage from './components/randomcard/CardImage';
// import P from './components/practice/P';
import Navbar from './components/box/Navbar';
import Contact from './components/box/Contact';
import About from './components/box/About';
// import PropList1 from './components/propertyPage/PropList1'
// import Colorcard from './colorcard/Colorcard';
// import Card from './colorcard/Card';
// import Time from './date/Time';
function App() {
  return (
    <div className="App">

      {/* <SignIn /> */}

      <Navbar title="dehar" />
      <About/>

      <div className="container my-3">
      <Contact heading="enter the text to analuze below" />
      </div>
 {/*     <Object />
       <header className="App-header"></header>
       <Time/> 
       <Card/> 
       <Colorcard />
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
      <PropComp1 />

      <img src={require('./images/team-1-3.png').default} width={100} height={100} />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Learn React
      </a>
  */}
      
    </div>

  );
}

export default App;
