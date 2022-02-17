<img src="https://wwcdn.weixin.qq.com/node/wework/images/logo.c768c756ab.png" width="300">
<img src="https://www.openapis.org/wp-content/uploads/sites/3/2018/02/OpenAPI_Logo_Pantone-1.png" width="300">
<img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SWU-logo-clr.png" width="300">

#

[简体中文](./README_ZH.md)

## Description

This project aims to translate the WeCom documentation into OpenAPI Specification, and then you can generate client code in various programming languages. Currently, we output version 3.x of OpenAPI Specification.

## Installation

```bash
$ npm install
```

## Running the app

When the app is running, the OpenAPI Specification file `openapi.yaml` will be generated, you can open `http://localhost:3000/openapi` to view Swagger UI.

```bash
$ npm run start
```

## Generating client code

[swagger-codegen](https://github.com/swagger-api/swagger-codegen) is very popular tool to generate code from OpenAPI Specification. But if you use Golang, [go-swagge](https://github.com/go-swagger/go-swagger) is recommended.

### Example

[go-swagge](https://github.com/go-swagger/go-swagger) is based on OpenAPI Specification 2.0, so you
need to downgrade the version.

```bash
$ npm install -g api-spec-converter
$ api-spec-converter --from=openapi_3 --to=swagger_2 --syntax=yaml --order=alpha ./openapi.yaml > swagger.yaml
```

Then generate Golang code from `swagger.yaml` file.

```
$ brew install go-swagger

$ mkdir wecom-api && cd wecom-api

# NOTE: you need run go mod init to create a go.mod file
$ go mod init wecom-api

$ swagger generate client -f swagger.yaml -t wecom-api
```

## Dev

This project is based on Swagger integration of NestJS, and you can refer to [OpenAPI(NestJS)](https://docs.nestjs.com/openapi/introduction) for more details.

### API Definition in controller files

```
nest g --no-spec controller department
```

### Create DTO and Response structure

Separate structure are recommended because then you can get a name.

```
nest g --no-spec class department/Department
```

### API Properties

```
  @ApiProperty({
    required: false,
    type: 'string',
    isArray: true,
    maxItems: 100,
    example: '["abel"]',
    description: 'user id list, max length is 100',
  })
  userid_list: string[];
```

- `required`, `type` is required.
- `description`, `example` recommended。

```
  @ApiOperation({
    operationId: 'getGroupChat',
    summary: 'Get user group detail',
    description: 'Get user group detail',
    externalDocs: {
      url: 'https://developer.work.weixin.qq.com/document/path/92122',
    },
  })
```

- `operationId` Required, Unique, Is function name in genertation code.
- `summary` Required
- `externalDocs` Link to WeCom official document.

## Swagger UI Try it out

### Authorize

First, you need to get `access_token`, and pass it to `Authorize` button.
![](./screenshot/authorize_step.png)

### Proxy

Browser has CORS issue, so you can use `http://localhost:3000/cgi-bin` to test.
![](./screenshot/proxy_step.png)

## FAQ

[FAQ](./FAQ.md)
