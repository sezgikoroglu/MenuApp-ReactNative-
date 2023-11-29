 import axios from "axios";

 export default axios.create({
        baseURL:"https://api.yelp.com/v3/businesses",
        headers:{
            Authorization: "Bearer llghPibJUtnl5t5NAoFrjKg_8oAYSuEqkmIhmT9-IxlmeABD2NgSnvZeu85Vz1SiAp2XKq6mcq1udTsm-Tn4AjKN76MCXRWh3A1XhJEHoMt27LXadSDDyCZux0JnZXYx",

        }
 })