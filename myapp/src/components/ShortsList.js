import styled from 'styled-components'
import ShortsDetail from './ShortsDetail';

const ShortsWrapper=styled.div`
    width: 100%;
    display: flex;
    flex: 8;
`

function ShortsList(){
    return(
        <ShortsWrapper>  
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
            <ShortsDetail title='한명씩 꼭 있는 금수저 유학생'
            view='217만' />
        </ShortsWrapper>
        
    )
}

export  default ShortsList;
