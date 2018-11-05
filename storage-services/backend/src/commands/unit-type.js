const { getClient } = require('../db')

const  saveUnitType  = async (unitType) => {
    const { name , length, width , height } = unitType
    const client = await getClient()

    let insertQuery =  `INSERT INTO unit_type( name , length, width , height )
    VALUES($1 , $2 , $3 , $4)`;
    let parameters = [name , length, width , height ];
    
    try{
        await client.query(insertQuery, parameters)
   
    }catch(e){
        console.log(e);
        await client.end()        
    }
}

module.exports = {
     saveUnitType 
}
