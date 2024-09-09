import ProjectCards from "./ProjectCards";


const Cards = () => {

    return (<>
            <div className="flex flex-col">
                <div className="flex full-width align-items-center justify-center text-4xl">
                    <h1> PROJECTS</h1>
                </div>

                <div className="flex flex-grow ml-4 align-center h-[100vh] justify-center">

                    <ProjectCards/>
                    <ProjectCards/>
                    <ProjectCards/>
                </div>
            </div>
        </>

    )
}

export default Cards;