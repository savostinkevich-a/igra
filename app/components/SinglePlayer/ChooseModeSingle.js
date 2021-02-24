import React, {useState, useEffect} from "react";
import {useNavigation} from '@react-navigation/native';
import {Button, Layout, Text} from "@ui-kitten/components";
import {ImageBackground} from "react-native";
import {s} from "../../styles/styles";
import {connect} from "react-redux";
import styled from 'styled-native-components';
import {BlurView} from 'expo-blur';
import {getQuestionsThunk, setMode} from "../../redux/question-reducer";

const StyledBlur = styled(BlurView)`
  width: 100vw;
  height: 10vh;
  margin-bottom: 2vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  padding-bottom: 10px;
`

const ModeItem = styled(ImageBackground)`
  width: 80vw;
  height: 10vh;
  margin-bottom: 2vh;
  border-radius: 10px;
  overflow: hidden;
  background: transparent;
  border: 1px solid #335C67;
`
const StyledLayout = styled(Layout)`
  height: 10vh;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  background-color: transparent;
`

const StyledContainer = styled(Layout)`
    height: 100%;
`

const StyledText = styled(Text)`
  text-shadow: 1px 1px 2px #335C67;
  font-weight: 700;
`

const ChooseModeSingle = (props) => {
    const navigation = useNavigation()

    let setMode = (mode) => {
        props.setMode(mode)
        props.getQuestionsThunk(mode)
    }

    let startGame = () => {
        navigation.navigate('Single Player Question')
    }

    const background = props.questions.mode

    return (
        <ImageBackground source={
            background === 'common' && require("../../image/common-min.jpg") ||
            background === 'trash' && require("../../image/trash-min.jpg") ||
            background === 'kids' && require("../../image/kids-min.jpg") ||
            background === 'game' && require("../../image/game-min.jpg") ||
            background === 'movie' && require("../../image/movie-min.jpg")
        } style={s.background} >
            <StyledContainer style={s.topView}>
                <StyledBlur intensity={100}>
                    <StyledText category={'h5'}>Выбери режим игры</StyledText>
                </StyledBlur>
                <ModeItem source={require('../../image/common-min.jpg')} blurRadius={5}>
                    <StyledLayout onTouchStart={() => {setMode('common')}}>
                        <StyledText category={'h6'}>Нормальный</StyledText>
                    </StyledLayout>
                </ModeItem>
                <ModeItem source={require('../../image/trash-min.jpg')} blurRadius={5}>
                    <StyledLayout onTouchStart={() => {setMode('trash')}}>
                        <StyledText category={'h6'}>Трешёвый</StyledText>
                    </StyledLayout>
                </ModeItem>
                <ModeItem source={require('../../image/kids-min.jpg')} blurRadius={5}>
                    <StyledLayout onTouchStart={() => {setMode('kids')}}>
                        <StyledText category={'h6'}>Детский</StyledText>
                    </StyledLayout>
                </ModeItem>
                <ModeItem source={require('../../image/movie-min.jpg')} blurRadius={5}>
                    <StyledLayout onTouchStart={() => {setMode('movie')}}>
                        <StyledText category={'h6'}>Кино</StyledText>
                    </StyledLayout>
                </ModeItem>
                <ModeItem source={require('../../image/game-min.jpg')} blurRadius={5}>
                    <StyledLayout onTouchStart={() => {setMode('game')}}>
                        <StyledText category={'h6'}>Игры</StyledText>
                    </StyledLayout>
                </ModeItem>
                <Button style={s.navButton} disabled={props.questions.isFetching} onPress={startGame}>Начать игру</Button>
            </StyledContainer>
        </ImageBackground>
    )
}

let mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, {setMode, getQuestionsThunk})(ChooseModeSingle)
