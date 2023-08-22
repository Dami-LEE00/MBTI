import React, { useState } from 'react';
import { styled } from 'styled-components';
import PangImage from '../assets/cat_home.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import { useEffect } from 'react';

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
  img {
    width: 20rem;
    height: 20rem;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;
const CatName = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
const Answer = styled.div`
  width: 500px;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  console.log(mbti);
  const [resultData, setResultData] = useState([]);
  
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti])

  const handleClickHome = () => {
    navigate('/'); 
  }
  return (
    <Wrapper>
      <Content>
      <Header>😻예비집사 판별기😻</Header>
        <Title>결과보기</Title>
        <LogoImage>
          <img 
            className='rounded-circle' 
            src={resultData.image} 
            width={350} 
            height={350} 
          />
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는?</Desc>
        <CatName>{resultData.name} ({resultData.best})</CatName>
        <Answer>{resultData.desc}</Answer>
        <Button onClick={handleClickHome} style={{ padding: '10px 20px', fontSize: '24px' }}>테스트 다시하기</Button>
      </Content>
    </Wrapper>
  )
}

export default Result
