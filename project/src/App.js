import './styles/global.css';
import Header from "./Components/Header";
import SectionWithTiles from "./Components/SectionWithTiles";
import Description from "./Components/Description";
import Footer from "./Components/Footer";

class Lighter{
    constructor(type, numOfLamps, creatorName, power) {
        this.type = type;
        this.numOfLamps = numOfLamps;
        this.creatorName = creatorName;
        this.power = power;
    }
}

let array = [
    new Lighter('pnp', 12, 'Sasha', 1),
    new Lighter('1pnp', 136, 'Illia', 18),
    new Lighter('p1np', 4, 'Yulia', 96),
    new Lighter('pn1p', 2, 'Tarass', 11),
    new Lighter('pnp1', 12, 'Googol', 89)
]

for (let i=0; i<array.length; ++ i){
    array[i].id = i;
}

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