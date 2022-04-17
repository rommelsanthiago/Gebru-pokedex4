import styled from "styled-components"

export const PokemonCardContainer = styled.div`
    background-color:#012E40;
    border-radius: 10px;
    width: 400px;
    height: auto;
    margin: 5%;
   font-family: Arial;
   padding: 10px;
     
    h1{
        text-align: center;
        font-size: 19px;
        font-weight: lighter;
        padding: 10px;
        color: white;
    }
   p {
        color: white;
    }
  
`
export const ImgPoke = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    background-color: #8FA9BF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img{
        position: relative;
        margin-top: -9px;
        width: 250px;
        height: 250px;
       
    }
`
export const PokemonType = styled.div`
  
    span{
  background-color: #253659;
   padding: 7px;
   width: 100px ;
   display: block;
   text-align: center;
   position: relative;
   margin-top: -30px;
   border-radius: 5px;
   color: white;

    }
`

export const PokemonStats = styled.div`
margin-top: -2px;
height: 200px;
padding: 30px;
background-color: #747A8C;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
 p{
    letter-spacing: 1px;
 }
`