import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../../assets/logo.png'

const HeaderLogo = () => {
    return (
        <Image source={logo} style={styles.img} />
    )
};

const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        width: 150,
        marginRight: 10
    }
})

export default HeaderLogo;