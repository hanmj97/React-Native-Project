import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from "react-native";
import Axios from "axios";

const Main = () => {
    const signup = () => {
        Axios.post("http://115.23.176.107:8000/signup", {
            id: "hanmj97",
            pw: 7891,
            name: "한민재",
            mbti: "ISFJ",
        }).then((res) => {
            console.log("회원가입 버튼 클릭");
        }).catch((e) => {
            console.error(e);
        });
    }


    return (
        <View style={styles.container}>
            <View id="header" style={styles.header}>

            </View>
            <View id="todolist" style={styles.todolist}>

            </View>

            <Button onPress={async () => {
                signup();
            }} title="Learn More" color="#666666"/>
        </View>
    );
};

const colors = {
    black: '#000000',
    gray: '#666666',
    blue: '#1C215D',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    header: {

    },
    todolist: {

    }
});

export default Main;