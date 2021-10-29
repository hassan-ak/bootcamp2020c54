# bootcamp2020c54 - AWS AppSync

## QraphQL API with AWS AppSync

### Class Notes: -

Rest Api dont have well defined data structure causing a lot of over and under seraching and also we dont have data structure of the response. QraphQl have very well defined schema having only one endpoint. In AWS GraphQl is implemented by AppSync with added features of security, authorization and data sources we can connect to 3 data sources (lambda, dynmodb, Http endpoint). Working with netlify we need to define appollo server to access data from GraphQL, while in AWS we dont need servers and resolvers.

### Why AppSync?

Organizations choose to build APIs with GraphQL because it helps them develop applications faster, by giving front-end developers the ability to query multiple databases, microservices, and APIs with a single GraphQL endpoint.

AWS AppSync is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more. Adding caches to improve performance, subscriptions to support real-time updates, and client-side data stores that keep off-line clients in sync are just as easy. Once deployed, AWS AppSync automatically scales your GraphQL API execution engine up and down to meet API request volumes.

### DataSource As Lambda

In this project we have used Lambda as a datasource which means our resolver will interact with lambda function for data operations.

Note, never print your API Key to the logs in a production system. This was added to make learning AppSync and GraphQL easier. If you want to use this pattern in a production system remove the two cloudformation outputs

### Sections

- [AppSync lambda as datasource](./step03_appsync_lambda_as_datasource)

### Reading Material

- [AppSync](https://aws.amazon.com/appsync/)
- [AppSync Docs](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html)
- [Building Real-time Serverless APIs with PostgreSQL, CDK, TypeScript, and AWS AppSync](https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/)
- [GraphQL Instructions](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/)

### Video Lecture

- [YouTube English](https://www.youtube.com/watch?v=iJj32I9A_Nc&ab_channel=PanacloudServerlessSaaSTraining)
- [Facebook English](https://www.facebook.com/zeeshanhanif/videos/10225249824337528)
- [YouTube Urdu](https://www.youtube.com/watch?v=mzl8tQzygOA)
- [Facebook Urdu](https://www.facebook.com/zeeshanhanif/videos/10225258717359848)
