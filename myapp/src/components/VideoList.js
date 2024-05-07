import styled from 'styled-components'
import VideoDetail from './VideoDetail';

const VideorWrapper=styled.div`
    height: 240px;
    width: 100%;
    display: flex;
`


function VideoList(){
    return(
        <VideorWrapper>  
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
            <VideoDetail profil='' title='IT 산업기능요원 인터뷰 / 급여,자격,구직사이트, 조언 등'
            channel='온양' view='3.3천회' date='1' />
        </VideorWrapper>
        
    )
}

export  default VideoList;
