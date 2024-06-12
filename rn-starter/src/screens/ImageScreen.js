import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen =()=>{

    return(
        <View>
            <ImageDetail
            title='image 1'
            image= {require('../../assets/forest.jpg')}
            scrore={12}
            />
            <ImageDetail
            title='image 2'
            image= {require('../../assets/beach.jpg')}
            scrore={12}
            />
            <ImageDetail
            title='image 3'
            image= {require('../../assets/mountain.jpg')}
            scrore={12}
            />
        </View>
    );
};
const styles = StyleSheet.create({

});
export default ImageScreen;