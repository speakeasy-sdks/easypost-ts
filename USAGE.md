<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ParcelInput,
  CreateParcelResponse
} from "EasyPost/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "EasyPost";
const sdk = new SDK({
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
   // handle response
});
```
<!-- End SDK Example Usage -->