import { Link, Spacer,  Button } from "@nextui-org/react"
import { Github, Linkedin, ArrowUp } from 'lucide-react'

const Footer = () =>{

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-content1 py-8 pl-[15vw] pr-[15vw] mt-8">
            <container >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p size="sm">&copy; {currentYear} jpex.dev. All rights reserved.</p>
                        <p size="xs" className="mt-1">Crafting elegant solutions through code.</p>
                    </div>
                    <Spacer y={2} className="md:hidden" />
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground">
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground">
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                    {/*<Spacer y={2} className="md:hidden" />*/}
                    <Button
                        as={Link}
                        href="#top"
                        variant="light"
                        size="sm"
                        endContent={<ArrowUp size={16} />}
                    >
                        Back to top
                    </Button>
                </div>
            </container>
        </footer>
        )
}

export  default Footer ;