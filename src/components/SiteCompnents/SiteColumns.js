import styled, {ThemeProvider} from 'styled-components';
import Button from '../Button';
import CardsComp from './CardsComp';
import {devices} from '../MediaQueries';
import {useState } from 'react';

const SiteCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const CardWrap = styled.div`
    position: relative;
    transition: background .3s ease-in-out;
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${devices.tabletL} {
        width: 40%;
        height: auto;
    }
`
const Figure = styled.figure`
    display: block;
    background: #e6eaea;
    transition: all .3s ease-in-out;
`

const BoxImg = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .3s ease-in-out;
    transform: translateZ(0);
    object-fit: cover;
    border: 1px solid #f4f4f4;
    cursor: pointer;

    :hover{
        background: var(--grey-color);
        opacity: 0.5;
        content: "";
        height: 100%;
        z-index: 2;
        transition: all .3s ease-in-out;
    }
    
`

// BoxImg.defaultProps = {
//     theme. {
            
    
//     }
// }

const Hover = styled.div`
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: opacity .3s ease-in-ou
    position: absolute;
    margin-top: -32px;
    width: 100%;
    top: 50%;
    left: 20%
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(0%);
`

const BoxInfo = styled.div`
    text-align: center;
    padding: .75rem 0 0;
`

const theme = {
    main: "90%"
}; 

export default function SiteCards () {
    const [visible, setVisible] = useState(12);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 12)
    };

    const [display, setDisplay] = useState('')
    const showButtons = () => {
        setDisplay(display)
    }
    return(
        <>
            <SiteCard>
                {CardsComp.slice(0, visible).map((cards) => (
                    <CardWrap key={cards.id}>
                        <Figure>
                            <BoxImg onMouseOver={showButtons}>
                                <img src= {cards.image}/>
                            </BoxImg>
                            <Hover  {...display}>
                                <Button>Details</Button>
                                <Button href= {cards.url}>Visit</Button>
                            </Hover>
                        </Figure>
                    
                        <BoxInfo>
                            <h4>{cards.label}</h4>
                        </BoxInfo>
                    </CardWrap>
                ))}
            </SiteCard>
            <ThemeProvider theme={theme}>
                <Button onClick={showMoreItems}>Load more</Button>
            </ThemeProvider>
        </>
    )
}