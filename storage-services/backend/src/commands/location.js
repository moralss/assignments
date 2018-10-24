const { getClient } = require('../db')

const saveLocation = async (location) => {
    const { street, state, city , id } = location
    const client = await getClient()

    
    
    let insertQuery =   `INSERT INTO location(city , state , street , business_id)
    VALUES($1 , $2 , $3 , $4)`;
    
    
    try{
        let parameters = [city , state, street, id ];
        await client.query(insertQuery, parameters)
   
    }catch(e){
        console.log(e);
        await client.end()        
    }

}

module.exports = {
    saveLocation
}


