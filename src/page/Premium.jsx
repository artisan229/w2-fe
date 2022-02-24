import styled from "styled-components";
import Navbar from "../components/Navbar";
import Main from "../components/ui/Main";
import Search from "../components/Search";
import NewContents from "../components/NewContents";
import ReleaseSoon from "../components/ReleaseSoon";
import Recommend from "../components/Recommend";
import Magazine from "../components/Magazine";
import Imminent from "../components/Imminent";

const PremiumContainer = styled.div`
    background: black;
`;

function Premium() {
    return (
        <PremiumContainer>
            <Navbar />
            <Main />
            <Search />
            <NewContents />
            <ReleaseSoon />
            <Recommend />
            <Magazine />
            <Imminent />
        </PremiumContainer>
    );
}

export default Premium;