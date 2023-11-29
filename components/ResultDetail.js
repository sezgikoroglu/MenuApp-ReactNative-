import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (

    <View style={styles.container}>
        
      <Image style={styles.img} 
            source={result.image_url ? {uri:result.image_url} : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Yıldızlı Restoran ({result.review_count})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
    name:{
        fontSize:17,
        fontWeight:"bold",
    },
    img:{
        width:250, height:120, borderRadius:8,
        marginBottom:5,
    },
    rating:{
        fontWeight:"500"
    }
})