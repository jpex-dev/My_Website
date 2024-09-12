import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/Mainpage";
import AnimatedBackground from "./components/Animatedbg";
import ProjectCards from "./components/ProjectCards";
import Cards from "./components/Cards";
import Techs from "./components/Techs";
import {useRef} from "react";

function App() {

    const scrollToCardsRef = useRef(null);

    const scrollToCards = () => {
        scrollToCardsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="App">
            <AnimatedBackground>
                <Navbar scrollToCards={scrollToCards} />
                <MainPage/>
                <div className="flex flex-row justify-evenly">
                    <Cards ref={scrollToCardsRef}/>
                </div>
                <div className="flex flex-col justify-evenly">
                    <Techs/>
                </div>
            </AnimatedBackground>

        </div>
    );
}

export default App;
