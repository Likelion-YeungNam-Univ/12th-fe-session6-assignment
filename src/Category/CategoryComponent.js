import styled from "styled-components";

const CategoryComponent = ({cate}) => {
    
    const Wrapper = styled.li`
        padding : 10px;  
        border-radius : 10px;
        background-color : rgb(48,48,48); 
        display : inline;
        border : none;

        color : #fff;

        transition : 0.2s;

        &:hover{
            background-color : #fff;
            color : #000;
        }

    `;
    
    return (
        <Wrapper className="category">
            {cate}
        </Wrapper>
    )

 }


 

 export default CategoryComponent;
