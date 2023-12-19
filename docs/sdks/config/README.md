# Config
(*config*)

### Available Operations

* [subscribeToWebhooks](#subscribetowebhooks) - Subscribe to webhooks.

## subscribeToWebhooks

Subscribe to webhooks.

### Example Usage

```typescript
import { TheSpeakeasyBar } from "The-Speakeasy-Bar";
import { Webhook } from "The-Speakeasy-Bar/dist/models/operations";

async function run() {
  const sdk = new TheSpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.config.subscribeToWebhooks([
    {},
  ]);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [operations.RequestBody[]](../../models/.md)                 | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SubscribeToWebhooksResponse](../../models/operations/subscribetowebhooksresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
