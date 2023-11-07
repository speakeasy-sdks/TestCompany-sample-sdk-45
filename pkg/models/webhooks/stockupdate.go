// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package webhooks

import (
	"github.com/speakeasy-sdks/TestCompany-sample-sdk-45/pkg/models/shared"
	"net/http"
)

type StockUpdateResponse struct {
	// HTTP response content type for this operation
	ContentType string
	// An unknown error occurred interacting with the API.
	Error *shared.Error
	// HTTP response status code for this operation
	StatusCode int
	// Raw HTTP response; suitable for custom response parsing
	RawResponse *http.Response
}

func (o *StockUpdateResponse) GetContentType() string {
	if o == nil {
		return ""
	}
	return o.ContentType
}

func (o *StockUpdateResponse) GetError() *shared.Error {
	if o == nil {
		return nil
	}
	return o.Error
}

func (o *StockUpdateResponse) GetStatusCode() int {
	if o == nil {
		return 0
	}
	return o.StatusCode
}

func (o *StockUpdateResponse) GetRawResponse() *http.Response {
	if o == nil {
		return nil
	}
	return o.RawResponse
}

type StockUpdateRequestBody struct {
	Drink      *shared.DrinkInput      `json:"drink,omitempty"`
	Ingredient *shared.IngredientInput `json:"ingredient,omitempty"`
}

func (o *StockUpdateRequestBody) GetDrink() *shared.DrinkInput {
	if o == nil {
		return nil
	}
	return o.Drink
}

func (o *StockUpdateRequestBody) GetIngredient() *shared.IngredientInput {
	if o == nil {
		return nil
	}
	return o.Ingredient
}
