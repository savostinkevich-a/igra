import React from "react";
import {Layout, Spinner, Text} from "@ui-kitten/components";
import {connect} from "react-redux";
import {s} from "../../styles/styles";
import {ImageBackground} from "react-native";
import styled from 'styled-native-components';
import {BlurView} from 'expo-blur';

const BlurQuestion = styled(BlurView)`
  width: 100vw;
  height: 20vh;
  padding-top: 5vh;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-bottom: 5vh;
`

const BlurAnswer = styled(BlurView)`
  width: 80vw;
  height: 25vh;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5vh;
  justify-content: center;
`

const StyledText = styled(Text)`
  text-shadow: 1px 1px 2px #335C67;
  font-weight: 700;
  text-align: center;
`

const QuestionSingle = (props) => {

    const question = props.questions.currentQuestion

    const background = props.questions.mode

    if (props.questions.isFetching) {
        return <Layout style={s.centralView}><Spinner size='giant'/></Layout>
    }

    return (
        <ImageBackground source={
            background === 'common' && require("../../image/common-min.jpg") ||
            background === 'trash' && require("../../image/trash-min.jpg") ||
            background === 'kids' && require("../../image/kids-min.jpg") ||
            background === 'game' && require("../../image/game-min.jpg") ||
            background === 'movie' && require("../../image/movie-min.jpg")
        } style={s.background}>
            <Layout style={s.topView}>
                <BlurQuestion intensity={100} >
                    <StyledText>{question.question}</StyledText>
                </BlurQuestion>
                <BlurAnswer  intensity={95} tint={'light'}>
                    <StyledText>{question.answers.first.answerText}</StyledText>
                </BlurAnswer>
                <BlurAnswer  intensity={95} tint={'light'}>
                    <StyledText>{question.answers.second.answerText}</StyledText>
                </BlurAnswer>
            </Layout>
        </ImageBackground>
    )
}

let mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(QuestionSingle)
