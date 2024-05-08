import styled from 'styled-components'
import ShortsDetail from './ShortsDetail';
import shorts01 from '../images/shorts01.png';
import shorts02 from '../images/shorts02.png';
import shorts03 from '../images/shorts03.png';
import shorts04 from '../images/shorts04.png';
import shorts05 from '../images/shorts05.png';
import shorts06 from '../images/shorts06.png';
import shorts07 from '../images/shorts07.png';
import shorts08 from '../images/shorts08.png';
import shorts09 from '../images/shorts09.png';

const ShortsWrapper=styled.div`
    width: 98%;
    display: flex;
    flex: 8;
    justify-content: space-between;
    margin: auto;
`

function ShortsList(){
    return(
        // 쇼츠리스트
        <ShortsWrapper>  
            <ShortsDetail short={shorts01} title='장첸이 가장 매너있었던 장면 #범죄도시'
            view='139만' />
            <ShortsDetail short={shorts02} title='점점 예뻐지는 아일릿 민주'
            view='197만' />
            <ShortsDetail short={shorts03} title='일본여행 중에 지폐가 안들어갈때 tip'
            view='98만' />
            <ShortsDetail short={shorts04} title='외국인이 한국 직장을 다닐 수 없는 이유'
            view='126만' />
            <ShortsDetail short={shorts05} title='"한국 어떡해" 소리 절로…4분기 합계출산율 0.6명대'
            view='4.8천' />
            <ShortsDetail short={shorts06} title='뭘 찍어먹어도 맛있다는 하얀쌈장'
            view='783만' />
            <ShortsDetail short={shorts07} title='손석구 출연료 가방에 넣고 찍었다는 그 장면 #범죄도시'
            view='63만' />
            <ShortsDetail short={shorts08} title='충주맨이 6급 승진 하고 나서의 반응'
            view='58만' />
            <ShortsDetail short={shorts09} title='미국인들이 돈까스에 환장하지 않는 이유'
            view='265만' />
        </ShortsWrapper>
        
    )
}

export  default ShortsList;
