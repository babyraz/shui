import { v4 as uuidv4 } from 'uuid';

export const handler = async (event) => {
    try {
        
        


        return {
            statusCode: 200,
            body: JSON.stringify({

            })
        }

    } catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: err.message })
        };
    }
}
