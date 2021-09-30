import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Animated, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const Urt = () => {
    const urt = useRef(new Animated.Value(0)).current;
    const color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
    const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const recursive = () => {
        Animated.timing(urt, {
            toValue: Math.ceil(Math.random()*windowWidth),
            duration: 1000,
            useNativeDriver: false,
        }).start();
        setTimeout(() => {
          recursive();
        }, 1000)
    }
    useEffect(() => {
        recursive();
    }, [])
    return (
        <Animated.View style={[styles.width, {
            width: urt,
            backgroundColor: color,
        }]}/>
    );
}
const styles = StyleSheet.create({
    width: {
        height: 60,
    }
});