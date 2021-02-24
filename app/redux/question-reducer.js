const axios = require('axios')

let GET_QUESTIONS = 'GET_QUESTIONS';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let SET_QUESTION_INDEX = 'SET_QUESTION_INDEX'
let SET_MODE = 'SET_MODE'
let UPDATE_ANSWER_RATE = 'UPDATE_ANSWER_RATE'

const baseUrl  = 'http://192.168.0.110:3000/api'

let initialState = {
    questions: [],
    isFetching: false,
    questionIndex: 1,
    indexes: [],
    mode: 'common',
    currentQuestion: {}
};
const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS: {
            return { ...state, questions: action.questions };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case SET_MODE: {
            return {
                ...state,
                mode: action.mode
            }
        }
        case SET_QUESTION_INDEX: {
            let randomIndex = Math.floor(Math.random() * state.questions.length)
            while (state.indexes.some(index => index === randomIndex)) {
                randomIndex = Math.floor(Math.random() * state.questions.length)
            } if (state.indexes.length === state.questions.length - 1) {
                return {
                    ...state,
                    questionIndex: randomIndex,
                    indexes: [],
                    currentQuestion: state.questions[randomIndex]
                }
            }
            return {
                ...state,
                questionIndex: randomIndex,
                indexes: [...state.indexes, randomIndex],
                currentQuestion: state.questions[randomIndex]
            }
        }
        case UPDATE_ANSWER_RATE: {
            if (action.select === 'first') {
                return {
                    ...state,
                    currentQuestion: {
                        ...state.currentQuestion, answers: {
                            ...state.currentQuestion.answers, first: {
                                ...state.currentQuestion.answers.first , answerRate: state.currentQuestion.answers.first.answerRate + 1
                            }
                        }
                    }
                }
            } else if (action.select === 'second') {
                return {
                    ...state,
                    currentQuestion: {
                        ...state.currentQuestion, answers: {
                            ...state.currentQuestion.answers, second: {
                                ...state.currentQuestion.answers.second , answerRate: state.currentQuestion.answers.second.answerRate + 1
                            }
                        }
                    }
                }
            }
        }
        default:
            return state;
    }
}


export const getQuestions = (questions) => ({
    type: GET_QUESTIONS, questions
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const setMode = (mode) => ({
    type: SET_MODE, mode
})

export const setQuestionIndex = () => ({
    type: SET_QUESTION_INDEX
})

export const updateAnswerRate = (select) => ({
    type: UPDATE_ANSWER_RATE, select
})

export const getQuestionsThunk = (mode) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        axios.get(`${baseUrl}/questions/${mode}`).then(response => {
            dispatch(getQuestions(response.data))
            dispatch(setQuestionIndex())
            dispatch(toggleIsFetching(false))
        })
    }
}

export const updateAnswerRateThunk = (id, answers) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/questions/${id}`, {answers}).then(response => {

        })
    }
}

export default questionsReducer
