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
            <Text style={styles.title}>react-native를 사용해서 어플 만들기</Text>
            <Text style={styles.member}>팀원 : 한민재, 박준석</Text>
            <Text style={styles.member2}>test123123123123{"\n"}</Text>

            <Button onPress={async () => {
                signup();
            }} title="Learn More" color="#666666"/>

            {/* 알림창 라이브러리 찾아봐야할듯 123 */}
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
    title: {
        fontSize: 25,
    },
    member: {
        color: colors.blue,
        fontSize: 25,
    },
    member2: {
        color: colors.black,
        fontSize: 30,
    },
});

export default Main;