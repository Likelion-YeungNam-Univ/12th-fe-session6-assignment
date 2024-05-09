import styled from "styled-components";
import Videos from "./Videos";
import Shorts from "./Shorts";

const Main = () => {

    const Wrapper = styled.div`
        margin : 0px 30px;
    `;
    return (
        <Wrapper>
            <Videos/>
            <Shorts/>
        </Wrapper>
    )
}

export default Main;