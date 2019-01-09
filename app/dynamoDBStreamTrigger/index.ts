import { APIGatewayProxyHandler } from 'aws-lambda';

export const dynamo: APIGatewayProxyHandler = async (event, context) => {
  console.log('------------- Event Object -------------');
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'DynamoDB Streams trigger',
      input: event,
    }),
  };
}
