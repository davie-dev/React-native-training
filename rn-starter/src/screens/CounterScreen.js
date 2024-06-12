import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";


const CounterScreen =()=>{
    const [counter, setcounter]= useState(0);
    return(
        <View>
             <Button
            title="Increas value"
                onPress={()=> setcounter(counter+1)}
            />
            <Button
                title="Decreas value"
                onPress={()=> setcounter(counter-1)}
            />
            <View>
                <Text>current count: {counter}</Text>
            </View>
        </View>
       
    );
};
const styles= StyleSheet.create({

});
export default CounterScreen;