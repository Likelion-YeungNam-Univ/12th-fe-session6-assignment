import styled from 'styled-components'
import { FaYoutube } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMicCircle } from "react-icons/io5";

const TopbarWrapper=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    color: white;
`
const LeftIcons=styled.div`
    display: flex;
    font-weight: 500;
    margin-left: 12px;
`
const YoutubeText=styled.div`
    margin-left: 4px;
`
const MiddleIcon=styled.div`
    width: 400px;
    height: 24px;
    display: flex;
    align-items: center;
    color: #545454;
    font-size: 13px;
    border-radius: 12px;
    border: solid 1px #545454;
    padding-left: 8px;
    overflow: hidden;
`
const MiddleWrapper=styled.div`
    display: flex;
    align-items: center;
`
const Search=styled.div`
    height: 18px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-right: 8px;
`

const SearchButton=styled.div`
    background-color: #282828;
    margin-left: 3px;
    color: #545454;
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`

function TopBar(){
    return(
        <TopbarWrapper>
            {/* 왼쪽 아이콘 */}
            <LeftIcons>
                <FaYoutube size="24px" style={{color: 'red'}} />
                <YoutubeText>Youtube</YoutubeText>
            </LeftIcons>
            
            {/* 중간 검색창 */}
            <MiddleWrapper>
                <MiddleIcon>
                    <Search>
                        <p>검색</p>
                        <FaKeyboard size='16px' style={{color: '#858585'}}/>
                    </Search>
                    <SearchButton>
                        <IoIosSearch size='18px'/>
                    </SearchButton>
                </MiddleIcon>
                {/* 마이크 아이콘 */}
                <IoMicCircle size='24px' style={{color: '#858585', margin: '0 8px'}}/>
            </MiddleWrapper>


            {/* 오른쪽 아이콘 */}
            <div>hi</div>
        </TopbarWrapper>
    )
}

export  default TopBar;
