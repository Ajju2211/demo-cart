import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/cart/:id" component={Cart}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;