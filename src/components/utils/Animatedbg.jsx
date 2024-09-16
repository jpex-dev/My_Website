import React from 'react';
import { useTheme } from './darkthemeProvide.tsx';  // Assuming you have this hook set up

const AnimatedBackground = ({ children }) => {
    const { theme } = useTheme();

    const lineColor = theme === 'dark' ? 'bg-white/10' : 'bg-black/10';  // Adjust line color based on theme
    const gradientColor = theme === 'dark' ? 'via-white to-white' : 'via-black to-black';  // Gradient for the animation

    return (
        <div className={`relative w-full h-full overflow-hidden ${theme === 'dark' ? 'bg-[#171717]' : 'bg-[#f0f0f0]'}`}>
            {/* Background Lines */}
            <div className="lines absolute top-0 left-0 w-[90vw] h-full mx-auto">
                {/* First Line */}
                <div className={`line absolute w-[1px] h-full ${lineColor} left-[25%] animate-drop`} style={{ animationDelay: '2s' }}>
                    <div className={`block absolute h-[15vh] w-full bg-gradient-to-b from-transparent ${gradientColor} top-[-50%]`}></div>
                </div>

                {/* Second Line */}
                <div className={`line absolute w-[1px] h-full ${lineColor} left-1/2 animate-drop`}>
                    <div className={`block absolute h-[15vh] w-full bg-gradient-to-b from-transparent ${gradientColor} top-[-50%]`}></div>
                </div>

                {/* Third Line */}
                <div className={`line absolute w-[1px] h-full ${lineColor} left-[75%] animate-drop`} style={{ animationDelay: '2.5s' }}>
                    <div className={`block absolute h-[15vh] w-full bg-gradient-to-b from-transparent ${gradientColor} top-[-50%]`}></div>
                </div>
            </div>

            {/* Children Elements */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default AnimatedBackground;
