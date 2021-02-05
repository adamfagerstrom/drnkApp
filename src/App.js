import "./App.scss";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";
import About from "./components/About";
import ProductInfo from "./components/ProductInfo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/products/:id" component={ProductInfo} />
      </Switch>
    </div>
  );
}

export default App;
