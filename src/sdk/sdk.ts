/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Authentication } from "./authentication";
import { Config } from "./config";
import { Drinks } from "./drinks";
import { Ingredients } from "./ingredients";
import { Orders } from "./orders";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * The production server.
 */
export const ServerProd = "prod";
/**
 * The staging server.
 */
export const ServerStaging = "staging";
/**
 * A per-organization and per-environment API.
 */
export const ServerCustomer = "customer";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://speakeasy.bar",
    [ServerStaging]: "https://staging.speakeasy.bar",
    [ServerCustomer]: "https://{organization}.{environment}.speakeasy.bar",
} as const;

/**
 * The environment name. Defaults to the production environment.
 */
export enum ServerEnvironment {
    Prod = "prod",
    Staging = "staging",
    Dev = "dev",
}

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;

    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;

    /**
     * Allows setting the organization variable for url substitution
     */
    organization?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.6.1";
    genVersion = "2.280.6";
    userAgent = "speakeasy-sdk/typescript 0.6.1 2.280.6 1.0.0 The-Speakeasy-Bar";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * The Speakeasy Bar: A bar that serves drinks.
 *
 * @remarks
 * A secret underground bar that serves drinks to those in the know.
 *
 * @see {@link https://docs.speakeasy.bar} - The Speakeasy Bar Documentation.
 */
export class TheSpeakeasyBar {
    /**
     * The authentication endpoints.
     */
    public authentication: Authentication;
    /**
     * The drinks endpoints.
     */
    public drinks: Drinks;
    /**
     * The ingredients endpoints.
     */
    public ingredients: Ingredients;
    /**
     * The orders endpoints.
     */
    public orders: Orders;
    public config: Config;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = {
            prod: {},
            staging: {},
            customer: {
                environment: props?.environment?.toString() ?? "prod",
                organization: props?.organization?.toString() ?? "api",
            },
        };

        if (!serverURL) {
            const server = props?.server ?? ServerProd;
            serverURL = ServerList[server];
            defaults = serverDefaults[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new components.Security({ apiKey: props?.apiKey }),

            serverURL: serverURL,
            serverDefaults: defaults,
            retryConfig: props?.retryConfig,
        });

        this.authentication = new Authentication(this.sdkConfiguration);
        this.drinks = new Drinks(this.sdkConfiguration);
        this.ingredients = new Ingredients(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.config = new Config(this.sdkConfiguration);
    }
}
