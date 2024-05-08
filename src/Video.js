import styled from "styled-components";

const VideoThumb = styled.img`
    border-radius: 5px;
    width: 190px;
    height: 130px;
    margin-bottom : 5px;
    transition: border-radius 0.3s ease;
    &:hover{
        border-radius: 0px;
    }
`;

const YoutuberImg = styled.img`
    width:20px;
    height:20px;
    margin-right:5px;
`;

const VideoTitle = styled.div`

    color : white;
    font-weight : 10;
    font-size: 0.6rem;
`;

const YoutuberName = styled.div`
    color:gray;
    font-size : 0.5rem;
`;

const VideoView = styled.div`
    color:gray;
    font-size : 0.5rem;
`;

const UploadTime = styled.div`
    color:gray;
    font-size : 0.5rem;
`;

const DiscriptionWrapper = styled.div`
    display:flex;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    margin-bottom: 10px;
`;

const Right = styled.div`

`;

const MouseHover = styled.div`
    margin-right:10px;
    height:190px;
    width:200px;
    padding: 5px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    &:hover{
        background-color:#353535;
    }
`;

const Bot = styled.div`
    display: flex;
`;

const Video = ({videoSrc, videoAlt, youtuberSrc, youtuberAlt, videoTitle, youtuberName, videoView, uploadTime}) => {
    return(
        <MouseHover>
            <Wrapper>
                <VideoThumb src={videoSrc} alt={videoAlt}></VideoThumb>
                <DiscriptionWrapper>
                    <YoutuberImg src={youtuberSrc} alt={youtuberAlt}></YoutuberImg>
                    <Right>
                        <VideoTitle>{videoTitle}</VideoTitle>
                        <YoutuberName>{youtuberName}</YoutuberName>
                        <Bot>
                            <VideoView>조회수 {videoView} . </VideoView>
                            <UploadTime>{uploadTime}</UploadTime>
                        </Bot>
                    </Right>
                </DiscriptionWrapper>
            </Wrapper>
        </MouseHover>
    );
}

export default Video;