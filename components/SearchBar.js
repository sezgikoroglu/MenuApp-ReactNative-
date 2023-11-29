import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign  style={styles.iconStyle} name="search1" size={30} color="black" />
    <TextInput style={styles.inputStyle}  
                placeholder='ara' 
                autoCapitalize='false' 
                autoCorrect={false}
                value={term}                //değerimiz(inputumuz) değiştikten sonra
                onChangeText={onTermChange} //callback olarak yukarıya props olarak geçicez
                onEndEditing={onTermSubmit} //inputa yazılıp tıklanınca tetiklenir(inputayazmabitince)
               />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"lightgray",
        flexDirection:"row",
        margin:10,
        height:50,
        alignItems:"center",
        borderRadius:20,
    },
    iconStyle:{
        marginHorizontal:15,
    },
    inputStyle:{
        fontSize:18,
        flex:1,
        //backgroundColor:"pink"
    }

})