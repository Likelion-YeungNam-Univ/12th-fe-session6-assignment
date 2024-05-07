import styled from 'styled-components'
const ShortsBody=styled.div`
    width: 100%;
`
const Shorts=styled.div`
    background-color: gray;
    height: 86%;
    width: 96%;
    border-radius: 12px;
    margin: auto;
`
const ShortsInfo=styled.div`
    width: 80%;
    margin: auto;
`
const Title=styled.div`
    font-size: 10px;
    font-weight: bold;
    color: white;
    margin: 3px 0;

`
const Views=styled.div`
    font-size: 9px;
    font-weight: bold;
    color: white;
`

function ShortsDetail({title, view}){
    return(
        <ShortsBody>
            <Shorts></Shorts>
            <ShortsInfo>
                <Title>{title}</Title>
                <Views>조회수 {view}회</Views>
            </ShortsInfo>
        </ShortsBody>
    )
}

export  default ShortsDetail;
