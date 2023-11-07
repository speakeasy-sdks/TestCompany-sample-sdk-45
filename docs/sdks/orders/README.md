# Orders
(*.orders*)

## Overview

The orders endpoints.

### Available Operations

* [createOrder](#createorder) - Create an order.

## createOrder

Create an order for a drink.

### Example Usage

```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { CreateOrderOrderUpdateRequestBody, CreateOrderOrderUpdateResponse } from "The-Speakeasy-Bar/dist/models/callbacks";
import { ErrorT, OrderInput, OrderType } from "The-Speakeasy-Bar/dist/models/components";
import { CreateOrderRequest } from "The-Speakeasy-Bar/dist/models/operations";

(async() => {
  const sdk = new TheSpeakeasyBar({
    apiKey: "",
  });
const requestBody: OrderInput[] = [
  {
    productCode: "APM-1F2D3",
    quantity: 26535,
    type: OrderType.Drink,
  },
];
const callbackUrl: string = "string";

  const res = await sdk.orders.createOrder(requestBody, callbackUrl);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `requestBody`                                                | [components.OrderInput](../../models/shared/orderinput.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `callbackUrl`                                                | *string*                                                     | :heavy_minus_sign:                                           | The url to call when the order is updated.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
