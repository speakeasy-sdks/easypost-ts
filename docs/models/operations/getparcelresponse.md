# GetParcelResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `badRequest`                                               | [shared.BadRequest](../../models/shared/badrequest.md)     | :heavy_minus_sign:                                         | Bad Request                                                |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `parcel`                                                   | [shared.Parcel](../../models/shared/parcel.md)             | :heavy_minus_sign:                                         | OK                                                         |
| `serverError`                                              | [shared.ServerError](../../models/shared/servererror.md)   | :heavy_minus_sign:                                         | Server Error                                               |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)    | :heavy_minus_sign:                                         | N/A                                                        |
| `unauthorized`                                             | [shared.Unauthorized](../../models/shared/unauthorized.md) | :heavy_minus_sign:                                         | Unauthorized                                               |