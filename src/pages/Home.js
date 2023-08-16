import React from 'react';
import { styled } from 'styled-components';
import PangImage from '../assets/cat_home.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;

  width: 600px;
  padding: 40px 0;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  margin-top: 10px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
  `;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/question');
  }
  return (
    <Wrapper>
      <Content>
      <Header>😻예비집사 판별기😻</Header>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img 
            className='rounded-circle' 
            src={PangImage} 
            width={350} 
            height={350} 
          />
        </LogoImage>
        <Desc>
          MBTI를 기반으로 나랑 잘맞는 고양이 찾기
        </Desc>
        <Button onClick={handleClickButton} style={{ padding: '10px 20px', fontSize: '24px' }}>테스트 시작</Button>
      </Content>
    </Wrapper>
  )
}

export default Home
