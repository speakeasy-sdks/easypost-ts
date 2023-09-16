# Parcels

## Overview

Operations about parcels

### Available Operations

* [create](#create) - Creates a new parcel
* [get](#get) - Get parcel by ID

## create

Creates a new parcel

### Example Usage

```typescript
import { EasyPost } from "EasyPost";
import { CreateParcelResponse } from "EasyPost/dist/sdk/models/operations";

const sdk = new EasyPost({
  security: {
    apiKey: "",
  },
});

sdk.parcels.create({
  parcel: {
    height: "5",
    length: "20.2",
    weight: "65.9",
    width: "10.9",
  },
}).then((res: CreateParcelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ParcelInput](../../models/shared/parcelinput.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateParcelResponse](../../models/operations/createparcelresponse.md)>**


## get

Get parcel by ID

### Example Usage

```typescript
import { EasyPost } from "EasyPost";
import { GetParcelResponse } from "EasyPost/dist/sdk/models/operations";

const sdk = new EasyPost({
  security: {
    apiKey: "",
  },
});

sdk.parcels.get({
  parcelId: "corrupti",
}).then((res: GetParcelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetParcelRequest](../../models/operations/getparcelrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetParcelResponse](../../models/operations/getparcelresponse.md)>**

