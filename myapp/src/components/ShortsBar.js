import styled from 'styled-components'

const ShortsbarWrapper=styled.div`
    /* background-color: red; */
    /* height: 40px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function ShortsBar(){
    return(
        <ShortsbarWrapper>
            {/* 왼쪽 아이콘 */}
            <div>hi</div>

            {/* 오른쪽 아이콘 */}
            <div>hi</div>
        </ShortsbarWrapper>
    )
}

export  default ShortsBar;
