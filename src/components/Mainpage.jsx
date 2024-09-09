import { Button } from "./ui/button.tsx"

import {Github, Linkedin, Mail} from 'lucide-react'
import AnimatedText from "./TextPresentation";
import Cards from "./ProjectCards";


const MainPage = () => {


    return (<section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <h2 className="text-5xl font-bold leading-tight  ">
                    Hi, I&apos;m João Peixoto<br/>
                    Full-Stack Developer
                </h2>
                <p className="text-xl text-muted-foreground">
                    Enthusiastic Junior Full-Stack Developer dedicated to crafting innovative and user-centric web applications and solutions.

                </p>
                <p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                            <Github className="h-5 w-5"/>
                        </Button>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                            <Linkedin className="h-5 w-5"/>
                        </Button>
                    </a>
                    <a href="mailto:john@example.com">
                        <Button variant="outline" size="icon">
                            <Mail className="h-5 w-5"/>
                        </Button>
                    </a>
                    {/*<AnimatedText/>*/}
                </p>
                </div>
                <div className="flex justify-center">
                    <div
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary relative animate-border-radius">
                        <img
                            src="/myself.jpeg"
                            alt="João Peixoto"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>


        </section>
)

}


export default MainPage;