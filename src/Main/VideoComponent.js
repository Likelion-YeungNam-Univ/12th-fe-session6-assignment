import styled from "styled-components"

const VideoComponent = ({video}) => {  
    const Wrapper = styled.div`
        width : 320px;
        display : flex;
        flex-direction : column;
    `;

    const DescWrapper = styled.div`
        display : flex;
    `;

    const AuthorProfile = styled.div`
        padding : 8px;
        background-color: green;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        cursor: pointer;

        margin : 0 10px;
    `;

    const Title = styled.div`
        color : #fff;
        font-weight : 400px;
        word-break; break-all;
        margin-bottom : 7px;
    `;

    const Detail = styled.div`
        color : rgb(170,170,170);
        margin-bottom : 2px;
        font-size : 13px;
    `;

    const Image = styled.img`
        width : 240px;
        height : 135px;
    `;

    const Thumnail = styled.div`
        background-color : #fff;
        margin : 0px;
        padding : 0px;
        width : 100%;
        height : 150px;

        border-radius : 15px;
        margin-bottom : 15px;
    `;


    return (
        <Wrapper>
            <Thumnail></Thumnail>
            <DescWrapper>
                <AuthorProfile className="authorProfile">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512"><path fill="#c2f2b0" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </AuthorProfile>
                <div className="description">
                    <Title className="title">{video.title}</Title>
                    <Detail className="author">{video.author}</Detail>
                    <Detail className="viewAndDate">조회수 {(video.views / 10 < 10) ? `${video.views/10}천 회` : `${video.views/100}만 회`} ・ {video.date}</Detail>
                </div>
            </DescWrapper>
        </Wrapper>  
    )
}

export default VideoComponent