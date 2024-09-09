import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/Mainpage";
import AnimatedBackground from "./components/Animatedbg";
import ProjectCards from "./components/ProjectCards";
import Cards from "./components/Cards";

function App() {
    return (
        <div className="App">
            <AnimatedBackground>
                <Navbar/>
                <MainPage/>
                <div className="flex flex-row justify-evenly">
                    <Cards/>
                </div>

            </AnimatedBackground>

        </div>
    );
}

export default App;
