import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from "react-native" ;

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>react-native를 사용해서 어플 만들기</Text>
            <Text style={styles.member}>팀원 : 한민재, 박준석</Text>
            <Text style={styles.member2}>test123123123123{"\n"}</Text>

            <Button onPress={() => Alert.alert('로그인 화면 이동')} title="Learn More" color="#666666"/>
            {/* 알림창 라이브러리 찾아봐야할듯 project t2 on sex*/}
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