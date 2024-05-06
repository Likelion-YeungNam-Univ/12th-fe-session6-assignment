import styled from 'styled-components'

const FilterbarWrapper=styled.div`
    /* background-color: black; */
    height: 40px;
    width: 100%;
    display: flex;
    margin-left: 12px;
`
const FilterButton=styled.div`
    background-color: #2f2f2f;
    color: white;
    height: fit-content;
    width: fit-content;
    padding: 6px;
    border-radius: 8px;
    margin-left: 12px;
    font-size: 12px;
`

function FilterBar(){
    return(
        <FilterbarWrapper>
            {/* 필터 목록 */}
            <FilterButton>전체</FilterButton>
            <FilterButton>음악</FilterButton>
            <FilterButton>게임</FilterButton>
            <FilterButton>라이브</FilterButton>
            <FilterButton>랩</FilterButton>
            <FilterButton>액션 어드벤처 게임</FilterButton>
            <FilterButton>만화 영화</FilterButton>
            <FilterButton>최근에 업로드된 동영상</FilterButton>
            <FilterButton>새로운 맞춤 동영상</FilterButton>

        </FilterbarWrapper>
    )
}

export  default FilterBar;
