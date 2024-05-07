import styled from 'styled-components'

const TopbarWrapper=styled.div`
    /* background-color: red; */
    /* height: 40px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`

function TopBar(){
    return(
        <TopbarWrapper>
            {/* 왼쪽 아이콘 */}
            <div>hi</div>

            {/* 오른쪽 아이콘 */}
            <div>hi</div>
        </TopbarWrapper>
    )
}

export  default TopBar;
