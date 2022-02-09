## Description

将企业微信的文档转义为 swagger open API 文档

## Installation

```bash
$ npm install
```

## Running the app

启动后会生成 swagger spec 文件 `swagger-spec.yaml`

```bash
$ npm run start
```

## Swagger 版本转换

此项目生成的 swagger spec 文件是 swagger 3.0 版本，go-swaager 项目目前只支持 swagger 2.0 版本，所以需要进行版本转换。

```
$ npm install -g api-spec-converter
$ api-spec-converter --from=openapi_3 --to=swagger_2 --syntax=yaml --order=alpha ./swagger-spec.yaml > swagger.yaml
```

## 生成 golang 代码

```
$ brew install go-swagger

$ mkdir wecom-api
$ cd wecom-api && go mod init wecom-api

$ swagger generate client -f swagger.yaml -t wecom-api
```

## Dev

目前只支持 WeCom 平台，为了后续支持其他平台，所以把企业微信的内容放在 `src/wecom` 目录中。

- 创建 controller 文件，声明 Swagger 文档

```
nest g --no-spec controller wecom/department
```

- 创建 DTO、Response 等结构体

```
nest g --no-spec class wecom/department/Department
```
