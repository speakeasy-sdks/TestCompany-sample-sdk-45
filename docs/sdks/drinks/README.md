# Drinks
(*.drinks*)

## Overview

The drinks endpoints.

### Available Operations

* [getDrink](#getdrink) - Get a drink.
* [listDrinks](#listdrinks) - Get a list of drinks.

## getDrink

Get a drink by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { GetDrinkRequest } from "The-Speakeasy-Bar/dist/models/operations";

(async() => {
  const sdk = new TheSpeakeasyBar({
    apiKey: "",
  });
const name: string = "string";

  const res = await sdk.drinks.getDrink(name);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetDrinkResponse](../../models/operations/getdrinkresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## listDrinks

Get a list of drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { DrinkType } from "The-Speakeasy-Bar/dist/models/components";
import { ListDrinksRequest } from "The-Speakeasy-Bar/dist/models/operations";

(async() => {
  const sdk = new TheSpeakeasyBar({
    apiKey: "",
  });
const drinkType: DrinkType = DrinkType.Spirit;

  const res = await sdk.drinks.listDrinks(drinkType);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `drinkType`                                                                  | [components.DrinkType](../../models/shared/drinktype.md)                     | :heavy_minus_sign:                                                           | The type of drink to filter by. If not provided all drinks will be returned. |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListDrinksResponse](../../models/operations/listdrinksresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
