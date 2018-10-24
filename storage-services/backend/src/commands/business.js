const { getClient } = require('../db')

const saveBusiness = async (business) => {
    const { name, contact_number, contact_email } = business
    const client = await getClient()

    const statement = `INSERT INTO business(name, contact_number, contact_email) 
    values($1, $2, $3) RETURNING id;`

    const parameters = [name, contact_number, contact_email]

    try{
        await client.query(statement, parameters)    
        await client.end()

    }catch(e){
        console.log(e);
        await client.end()        
    }

}

module.exports = {
    saveBusiness
}