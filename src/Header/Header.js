import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Profile from "./Profile";
import styled from "styled-components";

const Header = () => {

    const Wrapper = styled.div`
        width : 100%;
        height : 50px;
        margin-bottom : 30px;
        padding-top : 10px;
        background-color : #000;

        display : flex;
        justify-content : space-between;
        align-items : center;
        position : fixed;
        top : 0;
        z-index : 100;
    `;

    return(
        <Wrapper className="wrapper">
            <Logo/>
            <SearchBox/>
            <Profile/>
        </Wrapper>
    )
}

export default Header;