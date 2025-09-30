import { DynamoDBClient, PutItemCommand, QueryCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from 'uuid';

export const handler = async (event) => {
    try {

        

    } catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: err.message })
        };

    }
}
