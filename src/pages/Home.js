import styled from 'styled-components';
import Header from '../components/Header';
import SiteColumns from '../components/SiteCompnents/SiteColumns';
import FooterSection from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop/ScrollTop"

const Home = styled.div`
    width: 100%;
`

export default function HomePage () {
    return (
        <Home>
            <Header />

            <SiteColumns />
            <ScrollToTop />
            <FooterSection />
        </Home>
    );
}