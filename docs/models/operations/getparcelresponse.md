# GetParcelResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `badRequest`                                               | [shared.BadRequest](../../models/shared/badrequest.md)     | :heavy_minus_sign:                                         | Bad Request                                                |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | HTTP response content type for this operation              |
| `parcel`                                                   | [shared.Parcel](../../models/shared/parcel.md)             | :heavy_minus_sign:                                         | OK                                                         |
| `serverError`                                              | [shared.ServerError](../../models/shared/servererror.md)   | :heavy_minus_sign:                                         | Server Error                                               |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | HTTP response status code for this operation               |
| `rawResponse`                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)    | :heavy_minus_sign:                                         | Raw HTTP response; suitable for custom response parsing    |
| `unauthorized`                                             | [shared.Unauthorized](../../models/shared/unauthorized.md) | :heavy_minus_sign:                                         | Unauthorized                                               |