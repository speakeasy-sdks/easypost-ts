/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ParcelInputParcel extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height: string;

    @SpeakeasyMetadata()
    @Expose({ name: "length" })
    length: string;

    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    weight: string;

    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width: string;
}

export class ParcelInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "parcel" })
    @Type(() => ParcelInputParcel)
    parcel?: ParcelInputParcel;
}
