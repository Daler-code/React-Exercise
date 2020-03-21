import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    @media screen and ( max-width: 768px ) {
        height: 100%;
    }
`;

export const Row = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 100px;
    @media screen and ( max-width: 991px ) {
        width: 100%;
    }
`;

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 50px;
    span {
    font-size: 20px;
    font-weight: 1000;
    line-height: 25px;
    @media screen and ( max-width: 768px ) {
        font-size: 16px;
    }
    }
    @media screen and ( max-width: 768px ) {
        font-size: 16px;
    }
`;
