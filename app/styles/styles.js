import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    flex: {
        flex: 1
    },
    topView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    centralView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    text: {
        textAlign: "center",
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    withPaddings:{
        padding: 20,
        paddingTop: 40,
        paddingBottom: 0
    },
    navButton: {
        minWidth: 150,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        elevation: 5
    },
    notActive: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0
    },
    answersButton: {
        width: 330,
        height: 120,
        marginTop: 40,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    bottom: {
        marginTop: 'auto'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    playersList: {
        maxHeight: 350
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});
