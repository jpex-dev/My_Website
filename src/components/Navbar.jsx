import {Moon, Sun} from 'lucide-react'
import React from "react";
import {useTheme} from "./darkthemeProvide.tsx";
import { Button } from "./ui/button.tsx"


const Navbar = ({scrollToCards}) => {


    const {theme, toggleTheme} = useTheme();


    return (
        <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-background/80 border-b">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">

                <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                    <svg className="fill-current text-gray-900"
                         xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle"/>
                <h1 className="text-2xl font-bold">João Peixoto</h1>
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">

                    <ul className=" space-x-4 md:flex items-center justify-between text-base  pt-4 md:pt-0">
                        <li><a href="#home" className=" hover:text-primary">Home</a></li>
                        <li><a onClick={scrollToCards} className=" hover:text-primary">Projects</a></li>
                        <li><a href="#about" className=" hover:text-primary">About</a></li>
                        <li><a href="#contact" className=" hover:text-primary">Contact</a></li>
                        <li>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                                {theme == 'dark' ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}


export default Navbar;