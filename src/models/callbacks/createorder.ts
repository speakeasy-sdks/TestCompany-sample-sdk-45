/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateOrderOrderUpdateResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;
}

export class CreateOrderOrderUpdateRequestBody extends SpeakeasyBase {
    /**
     * An order for a drink or ingredient.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => components.OrderInput)
    order?: components.OrderInput;
}
