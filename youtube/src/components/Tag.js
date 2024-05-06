import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px;
`;
const Button = styled.button`
  color: white;
  margin:5px;
  background-color:  #282828;
  height: 30px;
  text-align: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: black;
  }
`;

let name = [
  "전체",
  "음악",
  "게임",
  "라이브",
  "렙",
  "액션 어드벤쳐 게임",
  "만화 영화",
  "최근에 업로드된 동영상",
  "새로운 맞춤 동영상",
];

function Tag() {
  return (
    <Container>
        {name.map((item)=>
            <Button >{item}</Button>
        )}
    </Container>
  )
}
export default Tag;