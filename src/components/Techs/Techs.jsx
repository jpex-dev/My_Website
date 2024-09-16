import React from "react";

import {Card, CardBody} from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";

const frontend = [{
    Tech: 'Javascript',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. ' +
        'Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World'
}, {
    Tech: 'React',
    description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
},{
    Tech: 'Ionic',
    description: 'onic é um kit de ferramentas de UI de código aberto para a construção de aplicativos móveis, web e desktop multiplataforma usando tecnologias web como HTML, CSS e JavaScript/TypeScript.' +
        ' Ele fornece um conjunto de componentes e ferramentas de UI pré-projetados para construir aplicativos interativos de alta qualidade'
},{
    Tech: 'Tailwind',
    description: 'Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ' +
        'ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.'
}
]

const Techs = () => {

    const [activeTab, setActiveTab] = React.useState('');

    return (<>

            <div className="flex full-width align-items-center justify-center text-4xl">
                <h1 className="mb-8 text-5xl font-bold leading-tight"> TECHS</h1>
            </div>
            <div className="container h-[60vh] px-4 flex justify-center">
                <Tabs aria-label="Options" variant="underlined" isVertical={true}>
                    <Tab key="Front-end" title="Front-end">
                        <Card className="shadow-xl w-[50vw] h-[20vh]">
                            <CardBody className="p-6 min-h-[200px]">
                                <div className="flex flex-row items-center justify-between text-xl  m-4">
                                    <img
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                                        width="50vw" height="10vh" onClick={() => {
                                        setActiveTab('Javascript')

                                    }}/>
                                    <img
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        width="50vw" height="10vh" onClick={() => {
                                        setActiveTab('React')
                                    }}/>
                                    <img
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg"
                                        width="70vw" height="50vh" onClick={() => {
                                        setActiveTab('Ionic')
                                    }}/>
                                    <img
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                        width="50vw" height="10vh" onClick={() => {

                                        setActiveTab('Tailwind')
                                    }}/>

                                </div>
                                <div className="flex flex-row items-center justify-between text-xl  m-4">
                                    {
                                        activeTab != '' ?
                                        frontend.find((tech) =>
                                            tech.Tech === activeTab
                                        ).description : null
                                    }
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Back-end" title="Back-end">
                        <Card className="shadow-xl w-[50vw] h-[20vh]">
                            <CardBody className="p-6 min-h-[200px]">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                                dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Softwares" title="Softwares">
                        <Card className="shadow-xl w-[50vw] h-[20vh]">
                            <CardBody className="p-6">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};


export default Techs;