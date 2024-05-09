import styled from 'styled-components';
import Main from './Main/Main';
import './App.css';
import Header from './Header/Header';
import Category from './Category/Category';

function App() {

  const Wrapper = styled.div`
    width : 100%;
    background-color : #000;
  `;

  return (
    <Wrapper className="App">
        <Header/>
        <Category/>
        <Main/>
    </Wrapper>
  );
}

export default App;
