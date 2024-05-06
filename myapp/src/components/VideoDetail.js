import styled from 'styled-components'

const VideoBody=styled.div`
    height: 100%;
    /* background-color: red; */
    width: 22%;
`
const Video=styled.div`
    height: 70%;
    background-color: darkblue;
    width: 90%;
    margin-left: 12px;
    margin-top: 8px;
    border-radius: 10px;
`
const Info=styled.div`
    display: flex;
    width: 90%;
    margin-top: 8px;
`
const Profil=styled.div`
    width: 10px;
    height: 10px;
    flex: 1;
`
const Right=styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
`
const Title=styled.div`
    font-size: 11px;
    color: white;
    font-weight: bold;
`
const Channel=styled.div`
    font-size: 9px;
    color: #4c4c4c;
    font-weight: bold;
    margin-top: 4px;
`
const Detail=styled.div`
    display: flex;
`
const Views=styled.div`
    font-size: 9px;
    color: #4c4c4c;
`
const Date=styled.div`
    font-size: 6px;
    font-size: 9px;
    color: #4c4c4c;
`

function VideoDetail({profil,title,channel,view,date}){
    return(
        <VideoBody>
            <Video></Video>
            <Info>
                <Profil>{profil}</Profil>
                <Right>
                    <Title>{title}</Title>
                    <Channel>{channel}</Channel>
                    <Detail>
                        <Views>조회수{view} • </Views>
                        <Date>{date}년전</Date>
                    </Detail>
                </Right>
                
            </Info>
        </VideoBody>
    )
}

export  default VideoDetail;
