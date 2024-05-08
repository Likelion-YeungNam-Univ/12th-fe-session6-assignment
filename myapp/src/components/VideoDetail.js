import styled from 'styled-components'

const VideoBody=styled.div`
    height: 100%;
    width: 22%;
`
const Video=styled.div`
    height: 70%;
    background-color: gray;
    width: 93%;
    margin-left: 12px;
    margin-top: 8px;
    border-radius: 10px;
    margin: auto;
`
const VideoImg=styled.img`
    display:block;
	width:100%;
	height:100%;
    border-radius: 10px;
`
const Info=styled.div`
    display: flex;
    width: 95%;
    margin-top: 8px;
`
const Profil=styled.div`
    width: 28px;
    height: 28px;
    margin: 0 12px;
`
const Right=styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`
const Title=styled.div`
    font-size: 11px;
    color: white;
    font-weight: bold;
`
const Channel=styled.div`
    font-size: 10px;
    color: #4c4c4c;
    font-weight: bold;
    margin-top: 4px;
`
const Detail=styled.div`
    display: flex;
`
const Views=styled.div`
    font-size: 10px;
    color: #4c4c4c;
    font-weight: bold;
`
const Date=styled.div`
    font-size: 10px;
    color: #4c4c4c;
    font-weight: bold;
`

const ProfilImg=styled.img`
    display:block;
	width:100%;
	height:auto;
    border-radius: 50%;
`

function VideoDetail({video, profil,title,channel,view,date}){
    return(
        <VideoBody>
            {/* video이미지 porps로 전달하기 */}
            <Video>
                <VideoImg src={video}/>
            </Video>
            <Info>
                <Profil>
                    <ProfilImg src={profil}/>
                </Profil>
                <Right>
                    <Title>{title}</Title>
                    <Channel>{channel}</Channel>
                    <Detail>
                        <Views>조회수 {view}회 • </Views>
                        <Date>{date} 전</Date>
                    </Detail>
                </Right>

            </Info>
        </VideoBody>
    )
}

export  default VideoDetail;
