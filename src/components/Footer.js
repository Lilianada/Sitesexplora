
import styled from "styled-components";
import {devices} from './MediaQueries'


const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
`

const FooterLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin: 0 auto

    @media ${devices.tabletL} {
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
    // state = {
    //     items: [],
    //     page: 0,
    //     visible: 12,
    //     isLoading: false,
    //     errorMsg: ''
    // };
    // loadMore() {
    //     this.setState((prev) => {
    //       return {visible: prev.visible + 4};
    //     });
    // };

    // componentDidMount() {
    //     fetch("CardsComp").then(
    //       res => res.json()
    //     ).then(res => {
    //       this.setState({
    //         items: res
    //       });
    //     }).catch(error => {
    //       console.error(error);
    //       this.setState({
    //         error: true
    //       });
    //     });
    //   }
    
    

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