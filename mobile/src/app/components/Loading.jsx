import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { backgroundColour, secondaryColour } from '../styles/styles';

const Loading = () => {
    return (
        <View style={styles.view}>
            <ActivityIndicator animating={true} size='lage' color={secondaryColour} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: backgroundColour
    }
})

export default Loading;