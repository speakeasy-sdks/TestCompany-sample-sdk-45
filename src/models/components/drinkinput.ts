/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { DrinkType } from "./drinktype";
import { Expose } from "class-transformer";

export class DrinkInput extends SpeakeasyBase {
    /**
     * The name of the drink.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The price of one unit of the drink in US cents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;

    /**
     * The product code of the drink, only available when authenticated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "productCode" })
    productCode?: string;

    /**
     * The type of drink.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: DrinkType;
}
