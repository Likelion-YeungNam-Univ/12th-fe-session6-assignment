import styled from "styled-components";

const Logo = () => {
    const Wrapper = styled.div`
        width : 100px;
        color : #fff;

        display : flex;
    `;

    const Logo = styled.img`
        width = 150px;
        margin-right : 0px;
    `;

    const Region = styled.div`
        position : absolute;
        left : 140px;
        top : 13px;
        font-size : 13px;
        color : rgb(170,170,170);
    `;

    return (
        <Wrapper>
            <Logo alt="logo "src="youtube logo.png" width="150px"></Logo>
            <Region>KR</Region>
        </Wrapper>
    )
}

export default Logo;