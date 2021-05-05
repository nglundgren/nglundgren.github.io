import {BrowserRouter, Switch, Route} from "react-router-dom"
import contents from './components/contents';
import games from './components/games';
import home from './components/home';
import writing from './components/writing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={contents} path='/contents'/>
        <Route component={games} path='/games'/>
        <Route component={writing} path='/writing'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
