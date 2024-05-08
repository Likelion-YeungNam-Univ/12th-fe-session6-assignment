import styled from 'styled-components'
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdClose } from "react-icons/io";

const ShortsbarWrapper=styled.div`
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    margin: auto;
`
const ShortsLeft=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 12px;
`
const ShortsText=styled.div`
    font-weight: 400;
    color: #ffffff;
    margin-left: 4px;
    font-size: 16px;
`


function ShortsBar(){
    return(
        <ShortsbarWrapper>
            {/* 왼쪽 쇼츠 아이콘 */}
            <ShortsLeft>
                <SiYoutubeshorts color='#fc0101' size={'18'}/>
                <ShortsText>Shorts</ShortsText>
            </ShortsLeft>
            

            {/* 오른쪽 x 아이콘 */}
            <IoMdClose color='#858585' size={'24'}/>
        </ShortsbarWrapper>
    )
}

export  default ShortsBar;
