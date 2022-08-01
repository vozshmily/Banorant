import axios from "axios";
import { useState, useEffect } from "react";
function AppApi() {

    const API = 'https://valorant-api.com/v1/maps';

    const [agents, setAgents] = useState([])
  

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () =>{
        const {data} = await axios.get(API)
        setAgents(data.data)
        //console.log(data)
    }

    console.log(agents)
    return (
        <AppApi.Provider>
            value={
              agents  
            }
        </AppApi.Provider>
    )
}

export default AppApi