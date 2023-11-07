<!-- Start SDK Example Usage -->


```go
package main

import (
	"context"
	testcompanysamplesdk45 "github.com/speakeasy-sdks/TestCompany-sample-sdk-45"
	"github.com/speakeasy-sdks/TestCompany-sample-sdk-45/pkg/models/shared"
	"log"
)

func main() {
	s := testcompanysamplesdk45.New(
		testcompanysamplesdk45.WithSecurity(""),
	)

	var drinkType *shared.DrinkType = shared.DrinkTypeSpirit

	ctx := context.Background()
	res, err := s.Drinks.ListDrinks(ctx, drinkType)
	if err != nil {
		log.Fatal(err)
	}

	if res.Classes != nil {
		// handle response
	}
}

```
<!-- End SDK Example Usage -->