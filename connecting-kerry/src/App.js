import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import About from './components/about';
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <About />
        <Footer />
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
