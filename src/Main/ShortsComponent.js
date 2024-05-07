import styled from "styled-components"

const ShortsComponent = ({shorts}) => {
  
    const Wrapper = styled.div`
        width : calc(100%/8);
        display : flex;
        flex-direction : column;
    `;

    const Thumnail = styled.div`
        background-color : #fff;
        width : 100%;
        height : 300px;
        border-radius : 15px;
        margin-bottom : 10px;
    `;

    // const Description = styled.div`

    // `;

    const Title = styled.div`
        color : #fff;
        font-weight : 400px;
    `;

    const Views = styled.div`
        color : rgb(170,170,170);
    `;

    return (
        <Wrapper>
            <Thumnail/>
            <Title>{shorts.title}</Title>
            <Views>조회수 {shorts.views} 회</Views>
        </Wrapper>
  )
}

export default ShortsComponent;