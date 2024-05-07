import styled from "styled-components";

const CategoryComponent = ({cate}) => {
    
    const Wrapper = styled.div`
        padding : 10px;  
        border-radius : 10px;
        background-color : rgb(48,48,48);
        display : inline;

        color : #fff;
    `;
    
    return (
        <Wrapper>
            {cate}
        </Wrapper>
    )
 }

 export default CategoryComponent;
