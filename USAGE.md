<!-- Start SDK Example Usage -->
```typescript
import {
  GetParcelRequest,
  GetParcelResponse
} from "EasyPost/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "EasyPost";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: GetParcelRequest = {
  parcelId: "corrupti",
};

sdk.getParcel(req).then((res: GetParcelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->