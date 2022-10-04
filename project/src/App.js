import './styles/global.css';
import Header from "./Components/Header";
import SectionWithTiles from "./Components/SectionWithTiles";
import Description from "./Components/Description";
import Footer from "./Components/Footer";

class Lighter{
    constructor(id, type, numOfLamps, creatorName, power) {
        this.id = id;
        this.type = type;
        this.numOfLamps = numOfLamps;
        this.creatorName = creatorName;
        this.power = power;
    }
}

let array = [
    new Lighter(0, 'pnp', 12, 'Sasha', 1),
    new Lighter(1, '1pnp', 112, 'Sa1sha', 10),
    new Lighter(2, 'p1np', 12, 'Sasha', 1),
    new Lighter(3, 'pn1p', 12, 'Sasha', 1),
    new Lighter(4, 'pnp1', 12, 'Sasha', 1)
]

function App() {
  return (
    <div className="App">
      <Header/>
        <Description/>
        <SectionWithTiles tiles = {array}/>
      <Footer/>
    </div>
  );
}

export default App;