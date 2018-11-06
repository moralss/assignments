const { getClient } = require('../db')


const saveBusiness = async (business) => {
    const { businessName, phoneNumbers, email } = business
    console.log("business" , business)
    const client = await getClient()    
    const statement = `INSERT INTO business(name, contact_number, contact_email) 
    values($1, $2, $3) RETURNING id;`
    const parameters = [businessName, phoneNumbers, email]
    try{
        await client.query(statement, parameters)    
        await client.release()

    }catch(e){
        console.log(e);
        await client.release()
    }
}

module.exports = {
    saveBusiness
}