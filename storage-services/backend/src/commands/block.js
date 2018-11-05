const { getClient } = require('../db')

const saveBlock = async (blockInfo) => {
    const {blockName , id} = blockInfo.details;
    console.log("block Info" , blockInfo.details);
    const client = await getClient()
    let insertQuery =  `INSERT INTO block(block_name , location_id)
    VALUES($1 , $2)`;
    
    try{
    }catch(e){
        let parameters = [blockName ,id ];
        await client.query(insertQuery, parameters)
        await client.release();

        console.log(e);
        await client.release();
    }
}

module.exports = {
    saveBlock
}


