import styled from "styled-components";
import CategoryComponent from "./CategoryComponent";

const Category = () => { 
    const categories = ["전체", "음악", "게임", "라이브", "탭", "액션 어드벤쳐 게임", "만화 영화", "최근에 업로드된 동영상", "새로운 맞춤 동영상"];

    const Wrapper = styled.ul`
        display : flex;
        gap : 15px;
        margin-left : 30px;
        margin-bottom : 30px;
        padding-top : 50px;

    `;

const items = document.querySelectorAll(".category");
//배열로 저장되기 때문에 forEach로 하나씩 이벤트를 등록해준다.
items.forEach((item)=>{
    item.addEventListener('click',()=>{
        items.forEach((e)=>{
          //하나만 선택되도록 기존의 효과를 지워준다.
            e.classList.remove('active');
        })
      // 선택한 그 아이만 효과를 추가해준다.
        item.classList.add('active');
      // 선택을 하면 다음으로 넘어갈 수 있는 버튼이 활성화 되도록 한다.
    })
})

    return (
        <Wrapper>
            {categories.map((cate) => {
                return <CategoryComponent cate={cate}/>
            })}
        </Wrapper>
    )
 }

 

 export default Category;