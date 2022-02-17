import styled from "styled-components";

export const ScrollBar = styled.div`
    overflow: auto;
    body {
        -ms-overflow-style: none;
    }
    body::-webkit-scrollbar {
        display: none;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: white;
    }
    &::-webkit-scrollbar-track {
        background-color: black;
    }
`;