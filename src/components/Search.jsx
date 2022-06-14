import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

const SearchContainer = styled.div`
    justify-content: center;
`;

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchBar = styled.input`
    width: 400px;
    height: 14px;
    padding: 8px;
    color: white;
    background: #3d3d3d;
    border: none;
    border-radius: 50px 0px 0px 50px;
    outline: none;
    ::placeholder {
        color: #989898;
    }
`;

const SubmitBtn = styled.button`
    height: 30px;
    padding: 5px 8px;
    color: white;
    background: #3d3d3d;
    border: none;
    border-radius: 0px 50px 50px 0px;
    &:hover {
        cursor: pointer;
    }
`;


function Search(props) {
    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchBar placeholder="제목,감독,장르,# 등을 검색해보세요."
                    onChange={(e) => {
                        if (e.target.value === "" || e.target.value === " ") {
                            props.setSearch(null);
                        } else {
                            props.setSearch(e.target.value)
                        }
                    }} />
                <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                    <SubmitBtn>
                        <AiOutlineSearch />
                    </SubmitBtn>
                </IconContext.Provider>
            </SearchBarContainer>
        </SearchContainer>
    );
}

export default Search;