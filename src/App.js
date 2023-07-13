// import Test from './components/Test/Test';
import './App.css';
// import ColorList from './components/colorList/ColorList';
// import Coin from './components/coin/Coin';
// import CoinList from './components/coin/CoinList';
// import Color from './components/colorList/Color';
import PropComp from './components/propertylist/PropComp'
// import Photo from './pic/Photo.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">

{

  // <img src={require('./images/team-1-3.png').default} width={100} height={100} />
      // <header className="App-header">
      //   <Test jaspreet={'MCA'}></Test>
      //   <Test jaspreet={'MBA'}></Test>
      //   <Test akash={'1'}></Test>
      //   <Test akash={'2'}></Test>
        
      //   <Photo/>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a> 
      // </header>
      // <CoinList/>
      // <ColorList/>
    <PropComp/>
}
      </div>

  );
}

export default App;
