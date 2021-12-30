import styled from "styled-components";

type BotaoProps ={
  bg:string
  small?:boolean
}
type FundoProps ={
  
  bgColor:string
}

export const Container = styled.div<FundoProps>`

max-width:600px;
margin:auto;
background-color:${props => props.bgColor};
color:white;
display: flex;
justify-content: center;
align-items: center;

span {
  font-weigth: bold;
  color: #0c0;
}
.link{

  color #fff;

  &:hover{
    color #f0f;
  }
}

@media (max-width:500px){
  background-color: #0f0;
  flex-direction:column;
}
 
`



export const Botao = styled.button<BotaoProps>`
  font-size:${props => props.small ? '15px' : '30px' };
  
  background-color:${props => props.bg};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:15px;
`