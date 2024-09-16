import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Frontpage/Navbar.jsx";
import MainPage from "./components/Frontpage/Mainpage";
import AnimatedBackground from "./components/utils/Animatedbg";
import ProjectCards from "./components/Cards/ProjectCards";
import Cards from "./components/Cards/Cards";
import Techs from "./components/Techs/Techs";
import {useRef} from "react";
import ContactForm from "./components/Contactform/ContactForm";

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
                <div>
                    <ContactForm/>
                </div>
            </AnimatedBackground>

        </div>
    );
}

export default App;
