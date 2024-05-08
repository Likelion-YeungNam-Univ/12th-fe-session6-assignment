import Header from "./Header";
import Video from "./Video";
import Short from "./Short";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <img src="./user.png" alt=""></img>
      <Header />
      <Video />
      <Short />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
`;

export default App;
