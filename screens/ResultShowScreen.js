import { StyleSheet, Text, View , FlatList, Image} from 'react-native'
import React, { useEffect , useState} from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export default function ResultShowScreen({route}) {

    const [result,setResult]=useState(null)
    const id=route.params.id;

    const getResult=async(id)=>{

        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[])

    if(!result){
        return null;
    }
   
    return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.title}>
      {
        result.is_closed ? (<AntDesign name="closecircleo" size={30} color="black" />) :
        (<MaterialIcons name="delivery-dining" size={30} color="black" />)
      }
      </View>
      <FlatList
         data={result.photos} 
         renderItem={({item})=> {
            return <Image source={{uri:item}} style={styles.img}/> 
         }}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        height:180,
        margin:10,
        borderRadius:20
    },
    title:{
        alignSelf:"center",
        margin:10,
        fontSize:20,
        fontWeight:"bold"
    },
    phone:{
        alignSelf:"center"
    }
})