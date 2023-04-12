/* eslint-disable */

import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { CurrentQuestion } from 'components/CurrentQuestion'
import quizIcon from '../assets/icon.jpg'


export const StartPage = () => {
  const question = useSelector((state) => state.quiz)
  const dispatch = useDispatch();

  return (
    <>
      {!question.quizStart ? (
        <OuterWrapperStartPage>
          <InnerWrapperStartPage>
            <Start>
              <img className='start-icon' src={`${quizIcon}`} alt="icon"/>
              <h1>FRONT END</h1>
              <StartButton onClick={() => dispatch(quiz.actions.startQuiz())} type="button">Lets get started!</StartButton>
            </Start>
          </InnerWrapperStartPage>
      </OuterWrapperStartPage>
      ) : (
        <CurrentQuestion />
      )}

    </>

  )
}

const Start = styled.div`
display: flex;
flex-direction: column;
text-align: center;
border: solid 6px #0dc9e6;
height: 200px;
width: 200px;
position: absolute;
`
// const startIcon = styled.icon`
// width: 99px;
// position: absolute;
// margin-bottom: 0px;
// margin-top: -10px;
// `

const StartButton = styled.button`
  padding: 10px;
  color: white;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
  border: solid 1px #0dc9e6;
  width: 133px;
  background-color:#0dc9e6;
  position: relative;
  top: 10px;
  text-transform: uppercase;
`
const OuterWrapperStartPage = styled.div`
background: #231f20;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  border: 1px solid red;
`

 const InnerWrapperStartPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: transparent;
width: 80%;
height: 100vh;
align-items: center;
margin: 0 auto;`

// const Start = styled.div`
// display: flex;
// flex-direction: column;
// text-align: center;
// border: solid 8px #BDE0FE;
// height: 200px;
// width: 200px;
// position: absolute;
// `

// const StartButton = styled.button`
// padding: 10px;
// color: white;
// background-color: black;
// border-radius: 10px;
// margin-top: 5px;
// font-size: 12px;
// font-weight: 500;
// width: 100px;
// `
// export const OuterWrapperStartPage = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: auto;
//   border: 1px solid red;
// `

// export const InnerWrapperStartPage = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// background-color: transparent;
// width: 60%;
// height: 100vh;
// align-items: center;
// margin: 0 auto;`