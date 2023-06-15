/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Successful operation
 */
export class Parcel extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "length" })
    length?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mode" })
    mode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "predefined_package" })
    predefinedPackage?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    weight?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width?: number;
}
