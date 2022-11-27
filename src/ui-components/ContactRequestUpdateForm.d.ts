/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ContactRequest } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactRequestUpdateFormInputValues = {
    author?: string;
    header?: string;
    description?: string;
};
export declare type ContactRequestUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    header?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactRequestUpdateFormOverridesProps = {
    ContactRequestUpdateFormGrid?: FormProps<GridProps>;
    author?: FormProps<TextFieldProps>;
    header?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactRequest?: ContactRequest;
    onSubmit?: (fields: ContactRequestUpdateFormInputValues) => ContactRequestUpdateFormInputValues;
    onSuccess?: (fields: ContactRequestUpdateFormInputValues) => void;
    onError?: (fields: ContactRequestUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContactRequestUpdateFormInputValues) => ContactRequestUpdateFormInputValues;
    onValidate?: ContactRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactRequestUpdateForm(props: ContactRequestUpdateFormProps): React.ReactElement;
