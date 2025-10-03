import { DynamoDBClient, GetItemCommand, UpdateItemCommand} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "eu-north-1" });
const tableName = "shui-table";

export const handler = async (event) => {
    try {

        const body = JSON.parse(event.body);
        const username = body.name;
        const {id} = event.pathParameters;
        const text = body.text;

        const getOldNote = new GetItemCommand({
            TableName: tableName,
            Key: {
                pk: { S: "NOTE" },
                sk: { S: id }
            }
        });

        const {Item} = await client.send(getOldNote);

           if (!Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Anteckningen kunde inte hittas" })
            };
        
        }

        const updateNoteCommand = new UpdateItemCommand({
            TableName: tableName,
            Key: {
                pk: { S: "NOTE" },
                sk: { S: id }
            },
            UpdateExpression: "SET #t = :text",
            ExpressionAttributeNames: {
                "#t": "text"  // maps the placeholder #t to the actual attribute "text"
            },
            ExpressionAttributeValues: {
                ":text": { S: text }
            }
        });

        const updatedNote = {
            id,
            username,
            text
        };
        
    
        await client.send(updateNoteCommand);

        return{
            statusCode:200,
            body: JSON.stringify({
                message: `Note ${id} har uppdaterats`,
                note: updatedNote
            })
        }  
        

    } catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: err.message })
        };

    }
}
