import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouteLinks from './components/RouteLinks';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <RouteLinks />
            </Router>
        </div>
    );
}

export default App;
