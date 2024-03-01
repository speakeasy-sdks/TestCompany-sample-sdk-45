<!-- Start SDK Example Usage [usage] -->
```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { DrinkType } from "The-Speakeasy-Bar/dist/models/components";
import { ListDrinksRequest } from "The-Speakeasy-Bar/dist/models/operations";

async function run() {
    const sdk = new TheSpeakeasyBar();
    const drinkType: DrinkType = DrinkType.Spirit;

    const res = await sdk.drinks.listDrinks(drinkType);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->