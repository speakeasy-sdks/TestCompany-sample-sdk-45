# Ingredients
(*ingredients*)

## Overview

The ingredients endpoints.

### Available Operations

* [listIngredients](#listingredients) - Get a list of ingredients.

## listIngredients

Get a list of ingredients, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { ListIngredientsRequest } from "The-Speakeasy-Bar/dist/models/operations";

async function run() {
  const sdk = new TheSpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });
const ingredients: string[] = [
  "string",
];

  const res = await sdk.ingredients.listIngredients(ingredients);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `ingredients`                                                                         | *string*[]                                                                            | :heavy_minus_sign:                                                                    | A list of ingredients to filter by. If not provided all ingredients will be returned. |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[operations.ListIngredientsResponse](../../models/operations/listingredientsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
