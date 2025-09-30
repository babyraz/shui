import { DynamoDBClient, PutItemCommand, QueryCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const tableName = "shui-table";
const client = new DynamoDBClient({ region: "eu-north-1" });


export const handler = async (event) => {
    try {

        const body = JSON.parse(event.body);
        const username = body.username;
        const text = body.text;
        const id = `ID${uuidv4().toUpperCase().slice(0, 5)}`;
        const createdAt = new Date().toISOString();

        const note= {
            pk: { S: "NOTE" },
                sk: { S: id},
                id: { S: id },
                username: { S: username },
                text: { S: text },
                createdAt: { S: createdAt },
        }
        await client.send(
            new PutItemCommand({
            TableName: tableName,
            Item: note
        }))


        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Note created: ${note}`
                
            })
        }

    } catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: err.message })
        };
    }
}
