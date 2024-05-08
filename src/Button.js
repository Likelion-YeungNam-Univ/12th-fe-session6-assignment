import styled from "styled-components";

const Wrapper = styled.button`
    color: white;
    font-size: 0.8rem;

    background-color: #282828;

    border-radius: 10px;
    border-style : none;

    margin-right: 5px;
    margin-bottom: 10px;

    transition: background-color 0.3s ease;
    &:hover{
        background-color:#353535;
    }
`;


const Button = ({btnDiscription}) => {

    return(
        <>
            <Wrapper>{btnDiscription}</Wrapper>
        </>
        
    );
}

export default Button;