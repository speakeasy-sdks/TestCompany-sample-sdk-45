/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class ListDrinksRequest extends SpeakeasyBase {
    /**
     * The type of drink to filter by. If not provided all drinks will be returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drinkType" })
    drinkType?: components.DrinkType;
}

export class ListDrinksResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * An unknown error occurred interacting with the API.
     */
    @SpeakeasyMetadata()
    error?: components.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * A list of drinks.
     */
    @SpeakeasyMetadata({ elemType: components.Drink })
    classes?: components.Drink[];
}
