<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->