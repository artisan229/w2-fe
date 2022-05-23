import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import { useContext, useState } from "react";
import { AppStateContext } from "../provider/AppStateProvider";
import Card from "./ui/Card";

const SearchContainer = styled.div`
    justify-content: center;
`;

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ResultContainer = styled.div`
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


function Search() {
    const context = useContext(AppStateContext);
    const [search, setSearch] = useState(null);
    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchBar placeholder="제목,감독,장르,# 등을 검색해보세요."
                    onChange={(e) => {
                        if (e.target.value === "" || e.target.value === " ") {
                            setSearch(null);
                        } else {
                            setSearch(e.target.value)
                        }
                    }} />
                <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                    <SubmitBtn>
                        <AiOutlineSearch />
                    </SubmitBtn>
                </IconContext.Provider>
            </SearchBarContainer>
            <ResultContainer>
                {
                    context[0] && context[0].map((movie, idx) => {
                        if (movie.title.includes(search) || movie.director.includes(search)) {
                            return <Card key={idx} width={'330'} height={'270'} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.id} />
                        } else {
                            return null;
                        }
                    })
                }
            </ResultContainer>
        </SearchContainer>
    );
}

export default Search;