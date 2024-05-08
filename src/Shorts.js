import styled from "styled-components";

const ShortsThumb = styled.img`
    width : 120px;
    height : 250px;

    border-radius : 5px;

    margin-right : 10px;
    margin-bottom: 5px;
`;

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    width: 120px;

`;

const ShortsTitle = styled.div`
    color: white;
    font-size : 0.6rem;
    font-weight: 10;
`;

const ShortsView = styled.div`
    color: gray;
    font-size : 0.5rem;
`;

const MouseHover = styled.div`
    margin-right:10px;
    height:300px;
    width:130px;
    padding: 10px 5px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    &:hover{
        background-color:#353535;
    }
`;


const Shorts = ({shortsSrc, shortsAlt, shortsTitle, shortsView}) =>{
    return(
        <MouseHover>
            <Wrapper>
                <ShortsThumb src={shortsSrc} alt={shortsAlt}></ShortsThumb>
                <ShortsTitle>{shortsTitle}</ShortsTitle>
                <ShortsView>조회수 {shortsView}</ShortsView>
            </Wrapper>
        </MouseHover>
    );
}

export default Shorts;