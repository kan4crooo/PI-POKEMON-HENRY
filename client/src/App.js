import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CreatePokemon from "./components/CreatePokemon";
import Detail from "./components/Detail";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route>
      <Route exact path="/" render={()=><LandingPage/>}/>
      <Route exact path="/home" render={()=><Home/>}/>
      <Route exact path="/create" render={()=><CreatePokemon/>}/>
      <Route exact path= "/pokemons/:id" render={()=><Detail/>}/>
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
