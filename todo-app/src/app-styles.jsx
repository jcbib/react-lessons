import styled, {keyframes} from "styled-components";

const buttonHover = keyframes`
    from {
        width:55%;
        height:45px;
        opacity:0.5;
    }

    to {
        width:60%;
        height:55px;
        opacity:1;
    }
`;

const buttonClick = keyframes`
    from{
        width:60%;
        height:55px;
        opacity:1;
        filter: brightness(1);
    }

    to{
        width:60%;
        height:55px;
        opacity:1;
        filter: brightness(75%);
    }
`;

export const AppContainer = styled.div`
    display:flex;
    position: absolute;
    justify-content:flex-start;
    align-items:center;
    class:container;
    flex-flow: column;
    width:100%;
    height:100%;
    background-color: #E3F2F8;
`;

export const Button = styled.button`
    display: flex;
    justify-content:center;
    align-items:center;
    border:0px;
    background: #34eb92;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color:white;
    height: 45px;
    width: 55%;
    opacity:0.5;

    &:hover {
        animation: ${buttonHover} 0.4s forwards;
    }

    &:active {
        animation: ${buttonClick} 0.4s forwards;
    }
`;

export const TodoElements = styled.div`
    display:flex;
    align-items:center;
    background-color: #88CDF7;
    padding: 0px 0px 0px 10px;
    height: 45px;
    border: solid #575B5E 1px;
    margin: 5px;
`;

export const TodoContainer = styled.div`
    height: auto;
    width: 55%;
`;

export const DoneElement = styled(TodoElements)`
    justify-content:center;
    height: 50px;
    color:#FFFFFF;
`;

export const AddForm = styled.form`
    display:flex;
    flex-flow: column;
    margin-top:10px;
    font-size: 18px;
    font-weight:bold;
`;

export const TextBox = styled.input`
    height: 30px;
    font-size:16px;
    padding-left:10px;
    background-color: #E3F2F8;
    border: 0px;
    border-bottom: 1px solid;

    &:focus {
        outline:none;
    }
`;