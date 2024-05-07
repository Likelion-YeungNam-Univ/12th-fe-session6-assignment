import styled from "styled-components";
import CategoryComponent from "./CategoryComponent";

const Category = () => { 
    const categories = ["전체", "음악", "게임", "라이브", "탭", "액션 어드벤쳐 게임", "만화 영화", "최근에 업로드된 동영상", "새로운 맞춤 동영상"];

    const Wrapper = styled.div`
        display : flex;
        gap : 15px;
        margin-left : 30px;
        margin-bottom : 30px;
    `;

    return (
        <Wrapper>
            {categories.map((cate) => {
                return <CategoryComponent cate={cate}/>
            })}
        </Wrapper>
    )
 }

 export default Category;