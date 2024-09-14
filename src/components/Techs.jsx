import React from "react";

import {Card, CardBody} from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";

const Techs = () => {
    return (<>

            <div className="flex full-width align-items-center justify-center text-4xl">
                <h1 className="mb-8 text-5xl font-bold leading-tight"> Techs</h1>
            </div>
            <div className="container h-[60vh] px-4 flex justify-center">
                    <Tabs aria-label="Options" variant="underlined" isVertical={true} >
                        <Tab key="Front-end" title="Front-end" >
                            <Card className="shadow-xl w-[50vw] h-[20vh]">
                                <CardBody className="p-6 min-h-[200px]">
                                    <div className="flex flex-row items-center justify-between text-xl  m-4">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                                            width="50vw" height="10vh"/>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                            width="50vw" height="10vh"/>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg"
                                            width="70vw" height="50vh"/>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                            width="50vw" height="10vh"/>

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