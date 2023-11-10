<!-- Start SDK Example Usage -->
```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { DrinkType } from "The-Speakeasy-Bar/dist/models/components";
import { ListDrinksRequest } from "The-Speakeasy-Bar/dist/models/operations";

(async () => {
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
<!-- End SDK Example Usage -->