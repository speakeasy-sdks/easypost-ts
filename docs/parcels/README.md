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
import { CreateParcelResponse } from "EasyPost/dist/sdk/models/operations";

const sdk = new EasyPost({
  security: {
    apiKey: "Bearer YOUR_BEARER_TOKEN_HERE",
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

## get

Get parcel by ID

### Example Usage

```typescript
import { EasyPost } from "EasyPost";
import { GetParcelResponse } from "EasyPost/dist/sdk/models/operations";

const sdk = new EasyPost({
  security: {
    apiKey: "Bearer YOUR_BEARER_TOKEN_HERE",
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
