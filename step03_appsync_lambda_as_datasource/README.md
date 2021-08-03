# AppSync Lambda as Datasource

## Steps to compile code

create app with cdk

```
cdk init app --language typescript
```

install dependancies

```
npm i @aws-cdk/aws-appsync
npm i @aws-cdk/aws-lambda
```

create ./graphql/schema.gql

```
type Query {
  welcome: String
}

```

create ./lamnda/welcome.ts

```
exports.handler = async () => {
  return "Welcome from Async Lambda";
};

```

update ./lib/step03_appsync_lambda_as_datasource-stack.ts

```
    const api = new appsync.GraphqlApi(this, "GRAPHQL_API", {
      name: "cdk-api",
      schema: appsync.Schema.fromAsset("graphql/schema.gql"),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(200)),
          },
        },
      },
      xrayEnabled: true,
    });
```

```
    const lambda_function = new lambda.Function(this, "LambdaFucntion", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "welcome.handler",
      timeout: cdk.Duration.seconds(10),
    });
```

```
    new cdk.CfnOutput(this, "APIGraphQlURL", {
      value: api.graphqlUrl,
    });

    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || "",
    });
```

```
    const lambda_data_source = api.addLambdaDataSource(
      "lambdaDataSource",
      lambda_function
    );
```

```
    lambda_data_source.createResolver({
      typeName: "Query",
      fieldName: "welcome",
    });
```

## Test After deploy

After CDK Deploy, capture outputs from the log.

```
Outputs:
Step03AppsyncLambdaAsDatasourceStack.APIGraphQlURL = https://**************************.appsync-api.us-east-2.amazonaws.com/graphql
Step03AppsyncLambdaAsDatasourceStack.GraphQLAPIKey = ***-**************************
```

Setup Postman as outlined in Postman's Using GraphQL Instructions

Set POST request URL, x-api-key and Content-Type

```
x-api-key = 'your API Key'
Content-Type = application/graphql
```

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
