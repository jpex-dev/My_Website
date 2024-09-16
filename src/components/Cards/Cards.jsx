import ProjectCards from "./ProjectCards";
import {post} from "../blog.js"
import {forwardRef} from "react";


const Cards = forwardRef((props, ref) => {

    return (<>
            <div className="flex flex-col" ref={ref}>
                <div className="flex full-width align-items-center justify-center text-4xl" id="projects">
                    <h1 className="mb-8 text-5xl font-bold leading-tight"> PROJECTS</h1>
                </div>

                <div className="flex flex-grow ml-4 align-center h-[60vh] justify-center">
                    {post.map((postItem, index) => (
                        <ProjectCards key={index} post={postItem} />
                    ))}
                </div>
            </div>
        </>

    )
});

export default Cards;