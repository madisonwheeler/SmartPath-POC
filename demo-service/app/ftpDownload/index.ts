import { APIGatewayProxyHandler } from 'aws-lambda';
import { downloadFromFTP } from './core';

export const download: APIGatewayProxyHandler = async (event, context) => {
  const content = await downloadFromFTP();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: content,
    }),
  };
}
