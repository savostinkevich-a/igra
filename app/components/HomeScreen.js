import React from "react";
import {useNavigation} from '@react-navigation/native';
import {Button, Layout} from "@ui-kitten/components";
import {ImageBackground} from "react-native";
import {s} from '../styles/styles'
import {connect} from "react-redux";
import {getQuestionsThunk} from "../redux/question-reducer";


const HomeScreen = (props) => {
    const navigation = useNavigation();

    const chooseMode = () => {
        getQuestionsThunk(props.questions.mode)
        navigation.navigate('Single Player')
    }

    const background = props.questions.mode

    return (
        <ImageBackground source={
            background === 'common' && require("../image/common-min.jpg") ||
            background === 'trash' && require("../image/trash-min.jpg") ||
            background === 'kids' && require("../image/kids-min.jpg") ||
            background === 'game' && require("../image/game-min.jpg") ||
            background === 'movie' && require("../image/movie-min.jpg")
        } style={s.background}>
            <Layout style={{...s.centralView, ...s.withPaddings}}>
                <Button style={s.navButton} onPress={chooseMode}>Выбрать режим</Button>
            </Layout>
        </ImageBackground>

    )
}

let mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, {getQuestionsThunk})(HomeScreen)
