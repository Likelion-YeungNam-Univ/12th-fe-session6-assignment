import Youtubelogo from './img/youtubelogo.png';
import styled from 'styled-components';
import { FaMicrophone } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";

//npm install react-icons --save

const YoutubeLogo = styled.img`
  width: 8%;
`;

const Wrapper = styled.div`
    color: white;
    display : flex;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
`;

const RightWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

const Center = styled.div`
    display:flex;
    align-items:center;
`;

const SearchBox = styled.input`
    width: 300px;
    border-radius: 15px;
    border-color: gray;
    border-style: solid;
    color: black;
    background-color: black;
`;

const Header = ()=> {

    return(
        <Wrapper>
            <YoutubeLogo src={Youtubelogo} alt="유튜브 로고"></YoutubeLogo>
            <Center>
                <SearchBox type="search" placeholder='검색'></SearchBox>
                <FaMicrophone />
            </Center>
            <RightWrapper>
                <FiFolderPlus size="17"/>
                <FaRegBell />
                <MdAccountCircle size="18"/>
            </RightWrapper>
        </Wrapper>
    );
}

export default Header;