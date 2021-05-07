import {BrowserRouter, Switch, Route} from "react-router-dom"

import Footer from './components/footer';
import Navbar from './components/navbar';
import contents from './components/contents';
import games from './components/games';
import home from './components/home';
import writing from './components/writing';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={contents} path='/contents'/>
        <Route component={games} path='/games'/>
        <Route component={writing} path='/writing'/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
