import React from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'



function LogIn() {

    const navigate = useNavigate();
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
  
 
    return (
        <div>
      
    <Container>
    
    
    <div style={{}}>
            <input type="text"  placeholder="아이디를 입력해주세요." ref={id_ref}/>    <br/>
            <input type="text"   placeholder="비밀번호를 입력해주세요." ref={pw_ref}/>   <br/>      
      
          
            <Btn1 onClick={()=>{navigate('/')}}> 로그인  </Btn1>
        
            <Btn2 onClick={()=>{navigate('/SignUp')}} > 회원가입</Btn2>
          </div>
    
          
        </Container>
        </div>
    );
}

const Container = styled.div`
background-size: cover;
background-color: ;
width: 400px;
height: 450px;
padding: 50px;
border: 2px solid black;
display: flex;
flex-direction: column;
align-content: flex-start;
float: center;
margin: 40px 20px 40px 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

text-align: center;`

const Btn1 = styled.button`
margin: 10px 10px 10px 10px;
`

const Btn2 = styled.button`
margin: 10px 10px 10px 10px;
` ;



export default LogIn