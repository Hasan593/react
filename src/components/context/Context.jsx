import Components_A from "./Components_A";
import { useContext } from "react";
import { propsFile } from "../../context/contextFile";
import Heading from "./Heading";
import Section from "./Section";

const Context = () => {

    const data = useContext(propsFile);

    return (
        <>
        <propsFile.Provider value={data}>
            <Components_A />
        </propsFile.Provider>
        <Section>
            <Heading>Heading</Heading>
            <Section>
            <Heading>Sub Heading</Heading>
            <Heading>Sub Heading</Heading>
            <Heading>Sub Heading</Heading>
            <Section>
                <Heading>Sub Heading</Heading>
                <Heading>Sub Heading</Heading>
                <Heading>Sub Heading</Heading>
            </Section>
            </Section>
        </Section>
        </>
    );
};

export default Context;