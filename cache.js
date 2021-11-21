const axios = require('axios');

function cache(client,id,EXPIRATION){
    
    return new Promise((resolve,reject)=>{

        client.get(`rockets/${id}`,async(err,response)=>{
        
            if(err) console.error(err);
    
            if(response != null){
                console.log("Cache hit");
                resolve(JSON.parse(response))
            }
    
            else{
    
                try{
                    var response = await axios.get("https://api.spacexdata.com/v3/rockets");
                    //console.log(response.data);
                    client.setex(`rockets/${id}`,EXPIRATION,JSON.stringify(response.data),(err)=>{if(err); console.error(err);});
                    console.log("cahe miss");
                    resolve(response.data);
                }
    
                catch(err){
                    reject(err.message);
                }
            }
        });
    });
    
}

module.exports = cache;