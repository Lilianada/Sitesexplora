import styled from "styled-components";


const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const FooterLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 0 auto;

    @media screen and (min-width: 900px) {
        width: 42%;
        justify-content: space-between;
    }
`
const Footerfoot = styled(FooterLinks)`
    width: 20%;
    flex-wrap: nowrap;
`
const Copyright = styled.p`
    color: var(--grey-color);
    font-size: var(--font-twelve);
`
const Links = styled.li`
    margin: .5rem;
`
const A = styled.a`
    font-size: var(--font-twelve);
    font-weight: 500;
    cursor: pointer;

    :hover{
        color: var(--hover-color);
    }
`


export default function FooterSection () {
    return(
        <Footer>
            <FooterLinks>
                <Links><A>Chrome Extension</A></Links>
                <Links><A>Twitter</A></Links>
                <Links><A>Advertise</A></Links>
                <Links><A>Newsletter</A></Links>
            </FooterLinks>

            <Copyright>
                All screenshots © their respective owners.
            </Copyright>

            <Footerfoot>
                <Links><A>Privacy</A></Links>
                <Links><A>RSS</A></Links>
                <Links><A>Terms</A></Links>
            </Footerfoot>

        </Footer>
    );
}