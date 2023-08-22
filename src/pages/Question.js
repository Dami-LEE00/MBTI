import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 16px);
`;
const Title = styled.div`
  width: 90%;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Quetions = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);  // 다음문제로 넘어가는 useState
  console.log('questionNo : ', questionNo);
  // 총 합쳐진 점수 (2점 이상인 곳으로 발탁됨)
  const [totalScore, setTotalScore] = useState([
    {id: 'EI', score: 0},
    {id: 'SN', score: 0},
    {id: 'TF', score: 0},
    {id: 'JP', score: 0},
  ]);  
  console.log('totalScore : ', totalScore);
  

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((it) => (
      it.id === type ? { id: it.id, score: it.score + no } : it
    ))
    setTotalScore(newScore);
    if(QuestionData.length !== questionNo + 1) {
      // 다음 문제로 이동(*문제수 증가)
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) => acc + (curr.score >= 2 ?
          curr.id.substring(0, 1) : curr.id.substring(1, 2)), ''  // 빈 문자열은 초기값
      );
      // setInterval 대신 setTimeout 사용
      setTimeout(() => {
        navigate({
          pathname: '/result',
          search: `?${createSearchParams({
            mbti: mbti,
          })}`
        });
      }, 1000);
    }

    if(progress < 100) {
      setProgress(progress + 100/12);
    } else {
      setProgress(progress = 100);
    }
  }

  return (
    <Wrapper>
      <ProgressBar now={progress} />
      <Container>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button 
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)} 
            style={{ width: '40%', minHeight: '200px', fontSize: '15px' }}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button 
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)} 
            style={{ width: '40%', minHeight: '200px', fontSize: '15px' }}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Container>
    </Wrapper>
  )
}

export default Quetions
