import React from "react";
import { Image, StyleSheet,Text,View } from "react-native";

const ImageDetail =({title, scrore, image})=>{
    return(
        <View>
            <Image source={image}/>
            <Text> {title}</Text>
            <Text>Image scrore - {scrore} </Text>
        </View>
    )
};
const styles = StyleSheet.create({

})
export
 default ImageDetail;