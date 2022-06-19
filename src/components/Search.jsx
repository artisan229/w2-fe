import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import { useState } from "react";

const SearchBarContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
        width: 80%;
    }
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
    const [query, setQuery] = useState(null);
    return (
        <SearchBarContainer>
            <SearchBar placeholder="제목, 감독을 검색해보세요"
                onChange={(e) => {
                    if (e.target.value === "" || e.target.value === " ") {
                        setQuery(null);
                        props.setSearch(null);
                    } else {
                        setQuery(e.target.value)
                    }
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.setSearch(query);
                    }
                }} />
            <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                <SubmitBtn>
                    <AiOutlineSearch onClick={() => props.setSearch(query)} />
                </SubmitBtn>
            </IconContext.Provider>
        </SearchBarContainer>
    );
}

export default Search;