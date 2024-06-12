import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";


const ListScreen=()=>{
    const ListeName =[
        {names:'davia', ages:'20'},
        {names:'dada', ages:'45'},
        {names:'dana', ages: '32'},
        {names:'dannie', ages:'27'},
        {names:'davie', ages:'53'},
        {names:'davila', ages:'30'},

    ]
    return(
        <FlatList
        keyExtractor={ListeName=>ListeName.names}
            data={ListeName}
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{item.names}- Age {item.ages}</Text>
            }}
        
        />
    );
};
const styles= StyleSheet.create({

    textStyle:{
        marginVertical:50,
        borderWidth:1,
        paddingVertical:20
    }
});

export default ListScreen;