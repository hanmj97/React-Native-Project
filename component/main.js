import React from 'react';
import {StyleSheet, View, Text} from "react-native" ;

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>react-native를 사용해서 어플 만들기</Text>
            <Text style={styles.member}>팀원 : 한민재, 박준석</Text>
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
      flex:1 ,
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
});

export default Main;