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
`;
const Header = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  border-radius: 0.625rem;
`;
const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;
const LogoImage = styled.div`
  margin-top: 10px;
  img {
    width: 20rem;
    height: 20rem;
  }
`;
const Desc = styled.div`
  font-size: 1.125rem;
  margin: 1.125rem 0;
  font-weight: 600;
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
          />
        </LogoImage>
        <Desc>
          MBTI를 기반으로 나랑 잘맞는 고양이 찾기
        </Desc>
        <Button 
          onClick={handleClickButton} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1.25rem', 
            fontWeight: '400' 
          }}
        >
          테스트 시작
        </Button>
      </Content>
    </Wrapper>
  )
}

export default Home
