import { useEffect , useState} from "react"
import yelp from "../api/yelp"

export default () => {

    const[results,setResults]=useState()
    const [errorMessage, setErrorMessage] = useState("")

   const searchApi = async(searchTerm) =>{
        try {
        const response = await yelp.get("/search",{
            params:{
                limit:50,
                location:"istanbul",
                term:searchTerm
            }
        })
        setResults(response.data.businesses)
        setErrorMessage("")
        } catch (error){
            setErrorMessage("Bağlantı hatası")
        }
    }

    useEffect(()=>{
        searchApi("Toast") //inputta yazan değeri useeFFECT İLE searchApi ye göndercez
    
    },[])

    return [searchApi,results,errorMessage]
    //search Api yi dışarı açtık, textinputtan aldığım değeri searchApi methoduna gönderrebiliriz.
}