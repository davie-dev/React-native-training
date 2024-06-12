import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = ()=>{
    const name= 'davila'
    return( 
        <View>
            <Text style={styles.Titlestyle}>Getting started  with react native</Text>
            <Text style={styles.TextStyle} >hello {name} </Text>
        </View>
    
    )
    ;
};
const styles = StyleSheet.create({

    TextStyle:{
        fontSize:20
    },
    Titlestyle:{
        fontSize:30
    }
});
export default ComponentsScreen;