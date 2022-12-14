import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet
} from 'react-native';
import {
    AlertError
} from '../../assets'
import {
    PrimaryButton
} from '../../Componets'

const onPress = ()=>{
    alert('asdf')
}

export default RegisterErrorScreen = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient 
                colors={['#131B63', '#481162']}
                style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#131B63" />

                <View style={styles.content}>
                    <Image source={AlertError} style={styles.imgAlert}/>
                    <Text style={styles.textHeader}>Register Accout is Failed</Text>
                    <Text style={[styles.textBody,{marginTop:20}]}>Error Message ishere</Text>
                </View>
                <PrimaryButton title='BACK' onPress={onPress} customeStyle={styles.btnSuccess}/>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:30,
        justifyContent:'center',
        alignContent:'center',
    },
    content:{
        alignItems:'center',
    },
    imgAlert:{
        marginBottom:120
    },
    textHeader:{
        fontFamily:'Lato-Bold',
        fontSize:24,
        color:'white',
    },
    textBody:{
        textAlign:'center',
        fontFamily:'Lato-Regular',
        fontSize:14,
        color:'#C34343',
    },
    btnSuccess:{
        marginTop:40
    }
})