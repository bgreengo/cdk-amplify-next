const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

async function listPosts() {
    const params = {
        TableName: process.env.POST_TABLE,
    }
    try {
        const data = await docClient.scan(params).promise()
        return data.Items
    } catch (err) {
        console.log('Dynamodb error; ', err)
        return null
    }
}

export default listPosts