import styled from "styled-components";
import TabMenu from "./TabsMenu";

const Header = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    text-align: center;
`

export default function Navigation() {
    return(
        <Header>
            <h1>Sitesexplora</h1>
            <TabMenu />
            <h2 style={{padding: "1rem"}}>A curated gallery of modern, aesthetic and beautiful websites</h2>
        </Header>
    );
}