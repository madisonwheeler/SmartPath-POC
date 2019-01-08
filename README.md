# SmartPath-POC

Basic Serverless API using typescript and AWS Lambda.

## Set-Up instructions:



Make sure node, nvm, sls, and awscli are installed:


Node: https://nodejs.org/en/download/

NVM: https://github.com/creationix/nvm

SLS: `npm install -g sls`

AWSCLI: `curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"`



Move into the demo-service directory:

`cd demo-service`



Install dependencies:

`npm install`



Configure your AWS credentials:

`serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY`



After making changes, deploy to AWS using:

`sls deploy`
