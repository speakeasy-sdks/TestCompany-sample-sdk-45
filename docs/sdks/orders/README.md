# Orders
(*.Orders*)

## Overview

The orders endpoints.

### Available Operations

* [CreateOrder](#createorder) - Create an order.

## CreateOrder

Create an order for a drink.

### Example Usage

```go
package main

import(
	"context"
	"log"
	testcompanysamplesdk45 "github.com/speakeasy-sdks/TestCompany-sample-sdk-45"
	"github.com/speakeasy-sdks/TestCompany-sample-sdk-45/pkg/models/shared"
	"github.com/speakeasy-sdks/TestCompany-sample-sdk-45/pkg/models/callbacks"
)

func main() {
    s := testcompanysamplesdk45.New(
        testcompanysamplesdk45.WithSecurity(""),
    )


    requestBody := []shared.OrderInput{
        shared.OrderInput{
            ProductCode: "APM-1F2D3",
            Quantity: 26535,
            Type: shared.OrderTypeDrink,
        },
    }

    var callbackURL *string = "string"

    ctx := context.Background()
    res, err := s.Orders.CreateOrder(ctx, requestBody, callbackURL)
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `requestBody`                                            | [][shared.OrderInput](../../models/shared/orderinput.md) | :heavy_check_mark:                                       | N/A                                                      |
| `callbackURL`                                            | **string*                                                | :heavy_minus_sign:                                       | The url to call when the order is updated.               |


### Response

**[*operations.CreateOrderResponse](../../models/operations/createorderresponse.md), error**
| Error Object       | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.APIError | 5XX                | application/json   |
| sdkerrors.SDKError | 400-600            | */*                |
