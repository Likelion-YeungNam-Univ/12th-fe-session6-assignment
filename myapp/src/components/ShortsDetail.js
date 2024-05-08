import styled from 'styled-components'
const ShortsBody=styled.div`
    width: 100%;
`
const Shorts=styled.div`
    width: 96%;
    border-radius: 12px;
    margin: auto;
`

const ShortsInfo=styled.div`
    height: 16%;
    width: 80%;
    margin:auto;
`
const Title=styled.div`
    font-size: 10px;
    font-weight: bold;
    color: white;
`
const Views=styled.div`
    font-size: 10px;
    color: #4c4c4c;
    font-weight: bold;
`
const ShortsImage=styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
`

// ShortsList에서 전달받은 props값을 사용
function ShortsDetail({short, title, view}){
    return(
        <ShortsBody>
            {/* 쇼츠이미지 */}
            <Shorts>
                <ShortsImage src={short}/>
            </Shorts>
            {/* 쇼츠정보 */}
            <ShortsInfo>
                <Title>{title}</Title>
                <Views>조회수 {view}회</Views>
            </ShortsInfo>
        </ShortsBody>
    )
}

export  default ShortsDetail;
