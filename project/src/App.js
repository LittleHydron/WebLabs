import './styles/global.css';
import Header from "./Components/Header";
import SectionWithTiles from "./Components/SectionWithTiles";
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

export let itemContext = React.createContext(null);

function App() {
    const [item, setItem] = useState({type: 'none'});
      return (
        <div className="App">
            <itemContext.Provider value = {{item, setItem}}>
                <Router>
                    <Switch>
                        <Route path="/catalog">
                            <Catalog/>
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
                            <SectionWithTiles/>
                        </Route>
                    </Switch>
                </Router>
              <Footer/>
            </itemContext.Provider>
        </div>
      );
}

export default App;

