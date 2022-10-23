import './styles/global.css';
import Header from "./Components/Header";
import SectionWithTiles from "./Components/SectionWithTiles";
import FullItemList from "./Components/FullItemList";
import Description from "./Components/Description";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import Item from "./Components/Item";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React, {useState} from "react";
import img from "./Components/images/big_lamp.jpeg";

class Lighter{
    constructor(type, numOfLamps, creatorName, power) {
        this.id = null;
        this.type = type;
        this.numOfLamps = numOfLamps;
        this.creatorName = creatorName;
        this.power = power;
        this.description = "";
    }
}

let array = [
    new Lighter('pnp', 12, 'Sasha', 1),
    new Lighter('1pnp', 136, 'Illia', 18),
    new Lighter('p1np', 4, 'Yulia', 96),
    new Lighter('pn1p', 2, 'Tarass', 11),
    new Lighter('ppn18', 6, 'Nastasia', 40),
    new Lighter('pnp1', 245, 'Gogol', 23),
    new Lighter('p2p1', 4, 'Grogol', 2455),
    new Lighter('p2p1', 1, 'Michael', 64),
    new Lighter('2np1', 3, 'Reaves', 24),
    new Lighter('1np1', 6, 'Googol', 19)
]

let descriptions=  [
    "This lamp is so great that my mother decided to light it every night so that my neighbours can't sleep to make them see this lamp whole night.",
    "Fabulous lamp for your crafting table, that will fully express great and wild nature of your imagination and creativity.",
    "Masterpiece for those, who is willing to show their friends how great, smart and nearly perfect they are.",
];

for (let i=0; i<array.length; ++ i){
    array[i].id = i;
    array[i].description = descriptions[i%3];
}

export let itemContext = React.createContext(null);

function App() {
    const [item, setItem] = useState({type: 'none'});
      return (
        <div className="App">
            <itemContext.Provider value = {{item, setItem}}>
                <Router>
                    <Switch>
                        <Route path="/catalog">
                            <Catalog tiles={array}/>
                        </Route>
                        <Route path="/cart">
                            <Header needSearch={false}/>
                            <h1 style={{
                                border: "1px solid black",
                                width: "80%",
                                margin: "auto",
                                textAlign: "center",
                                padding: "100px 0 100px 0"
                            }}>Coming soon...</h1>
                        </Route>
                        <Route path="/item">
                            <Header needSearch={false}/>
                            <Item/>
                        </Route>
                        <Route path="/">
                            <Header needSearch={false}/>
                            <Description/>
                            <SectionWithTiles tiles = {array}/>
                        </Route>
                    </Switch>
                </Router>
              <Footer/>
            </itemContext.Provider>
        </div>
      );
}

export default App;

