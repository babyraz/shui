import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "eu-north-1" });
const tableName = "shui-table";


export const handler = async (event) => {
    try {
        const command = new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: "pk = :pk",
            ExpressionAttributeValues: {
              ":pk": { S: "NOTE" },
            }
          });


        const { Items = [] } = await client.send(command);
        const notes = Items.map((item) => unmarshall(item));

        if (notes.length === 0) {
        return {
            statusCode: 200,
            body: JSON.stringify({
            message: "Det finns inga notes än.",
            notes: []
            }),
        };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: "Det funkar! Här är alla notes",
              notes,
            }),
          };



    } catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: err.message })
        };
    }
}
