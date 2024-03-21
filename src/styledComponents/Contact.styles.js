import styled from "styled-components";

export const StyledContact=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:100px;
    margin:50px 10%;
    
    &>div>iframe{
        border: none;
    }
    @media screen and (max-width: 1024px){
        flex-direction:column;
        gap:50px;
        
    }
    @media screen and (max-width: 450px){
        &>div>iframe{
            width:100%;
            height: auto;
        }
    }

`
export const StyledP=styled.p`
    color:grey;
    line-height:1.8em;
    &>i{
        color:#BE9667;
    }
`
export const StyledSocial=styled.section`
    display:flex;
    flex-wrap:wrap;
    padding: 50px 0px;
    gap:50px;
    align-items:center;
    justify-content:center;
    margin:0 10%;
    border-top: 1px solid #E8D7C2;
    border-bottom: 1px solid #E8D7C2;
    &>a{
        text-decoration:none;
        color:black;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:15px
    }
    &>a>i{
        color:#BE9667;
        width:25px;
        height:25px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
    } 
    &>a>i::after{
        content:"";
        border: 1px solid #BE9667;
        width:25px;
        height:25px;
        position:absolute;
        rotate:45deg;
    } 
`
export const StyledForm=styled.form`
    margin:50px 10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .inputs{
        width:40%;
        display:grid;
        justify-content:center;
        grid-template-columns: 1fr 1fr;
        gap:15px;
    }
    .message{
        grid-area: 2/1 /3/5;
    }
    & input, textarea{
        background:#f9f8f8;
        border:none;
        width:88%;
        height:50px;
        padding:0px 15px;
        min-width:200px;
    }
    @media screen and (max-width: 768px){
        .inputs{
        grid-template-columns: 1fr;
        }    
        .message{
            grid-area: 3;
        }
    }
`
export const StyledButton=styled.button`
    background: #BE9667;
    color:white;
    border:none;
    outline:none;
    padding:10px 15px;
    border-radius:2px;
`