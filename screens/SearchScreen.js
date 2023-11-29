import { StyleSheet, Text, ScrollView } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
 
    const [searchApi,results,errorMessage]=useResults(); //useResults.js i destruction ile resultsları alıp, listelemek için props olarak yolluyoruz.
    const [term, setTerm] = useState("")    

    const filterByPrice=(price)=>{
        return results?.filter((result)=>{ //fiyatlara göre filtreledikten sonra props olarak ResulList e gönderdik
            return result.price === price
        })
    }

    return (
    <ScrollView>
      <SearchBar 
        term={term}
        onTermChange={setTerm}   //değeri update ettik setTerm fonksiyonunu çalıştırarak
        onTermSubmit={()=>searchApi(term)} //tüm işler bitince inputa girilen, searchApi ye yolla
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> :
        <>
        <ResultsList  title="Ucuz Restoranlar" results={filterByPrice("₺")}/>
       <ResultsList  title="Uygun Restoranlar" results={filterByPrice("₺₺")}/>
       <ResultsList  title="Pahalı Restoranlar" results={filterByPrice("₺₺₺")}/>
       </>
      }
      {
        results.length==0 ?  <></> :
        <>
         <ResultsList  title="Ucuz Restoranlar" results={filterByPrice("₺")}/>
        <ResultsList  title="Uygun Restoranlar" results={filterByPrice("₺₺")}/>
        <ResultsList  title="Pahalı Restoranlar" results={filterByPrice("₺₺₺")}/>
        </>
      }
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({})