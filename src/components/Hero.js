import styled from "styled-components";
import HeroImg from "../assets/bitofdenim.com.png"

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 80%;
    grid-template-rows: 100%;
    margin: 0 2rem;
    place-content: center;
`

export default function HeroSection () {
    return (
        <>
            <Wrapper>
                <img src = {HeroImg} alt= "site of the day" />
            </Wrapper>
        </>
    );
}
