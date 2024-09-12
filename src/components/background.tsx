import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function TemplateBackground() {
    return (
        <View style={styles.conteudo}>
            <View>
                <Text>Loginscreen</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conteudo: {
        width: '100%',
        height: '100%',
        backgroundColor: '#adec94', 
        justifyContent: 'center',
        alignItems: 'center',
    }
});
