import React from "react";
// import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";

const Techs = () => {
    return (<>

            <div className="flex full-width align-items-center justify-center text-4xl">
                <h1 className="mb-8 text-5xl font-bold leading-tight"> Techs</h1>
            </div>
            <div className="container h-[60vh] px-4 flex justify-center">
                <div className="w-full max-w-lg flex justify-center">
                    <Tabs aria-label="Options" variant="underlined" isVertical={true} >
                        <Tab key="Front-end" title="Front-end" >
                            <Card className="shadow-2xl w-[50vw] h-[20vh]">
                                <CardBody className="p-6 min-h-[200px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="Back-end" title="Back-end">
                            <Card className="shadow-2xl w-[50vw] h-[20vh]">
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
                            <Card className="shadow-2xl w-[50vw] h-[20vh]">
                                <CardBody className="p-6">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};


export default Techs;