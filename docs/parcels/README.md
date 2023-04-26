# parcels

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
import { CreateParcelResponse, ParcelInput } from "EasyPost/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new EasyPost({
  security: {
    apiKey: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.ParcelInput = {
  parcel: {
    height: "5",
    length: "20.2",
    weight: "65.9",
    width: "10.9",
  },
};

sdk.parcels.create(req).then((res: CreateParcelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get parcel by ID

### Example Usage

```typescript
import { EasyPost } from "EasyPost";
import { GetParcelRequest, GetParcelResponse } from "EasyPost/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new EasyPost({
  security: {
    apiKey: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetParcelRequest = {
  parcelId: "corrupti",
};

sdk.parcels.get(req).then((res: GetParcelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
