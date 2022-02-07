import styled from "styled-components";
import TabExampleText from "./Menu";
import TabMenu from "./TabsMenu";

const Head = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem 0;
    text-align: center;
`

export default function Header() {
    return(
        <Head>
            <h1>Sitesexplora</h1>
            <h2>A curated gallery of modern, aesthetic and beautiful websites.</h2>
            <TabExampleText />
            <TabMenu />
        </Head>

    );
}