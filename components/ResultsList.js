import { StyleSheet, Text, View, FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation} from "@react-navigation/native"

export default function ResultsList({title,results}) {

    const navigation=useNavigation()
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList  // aynı listedeki yer alan restoranları sıraladık/ ResultDetail ==>restoran detaylarını içerir
        horizontal //yanyana gelmesi için, scrool da yapar
        showsHorizontalScrollIndicator={false}  //scrollu gösterme
        data={results}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={
                    ()=>navigation.navigate("Result",{id:item.id})  // tıklayınca restoranın hakkında sayfasına yöndendirdik
                }>
                    <ResultDetail result={item}/>                   
                </TouchableOpacity>
            )
        }}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:15,
    },
    title:{
        
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:15
    },

})