import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation })=> {
  return (
    <View style={styles.text}>
      <Button 
        onPress={()=> navigation.navigate('List')}
        title="Go to List demo"
      />
      <Button 
        onPress={()=> navigation.navigate('Component')}
        title="Go to List Components"
      />
      <Button 
        onPress={()=> navigation.navigate('Image')}
        title="Go to List Image"
      />
      <Button 
        onPress={()=> navigation.navigate('Count')}
        title="Go to List Counter"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical:60
  },
});

export default HomeScreen;
