/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateParcelResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    badRequest?: shared.BadRequest;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata()
    parcel?: shared.Parcel;

    /**
     * Server Error
     */
    @SpeakeasyMetadata()
    serverError?: shared.ServerError;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Unauthorized
     */
    @SpeakeasyMetadata()
    unauthorized?: shared.Unauthorized;
}
