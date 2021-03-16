////import "../styles/app.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sign from './Sign';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/sign" component={Sign}></Route>
			</Switch>
		</Router>
	);
}

export default App;
