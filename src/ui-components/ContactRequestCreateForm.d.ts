/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactRequestCreateFormInputValues = {
    author?: string;
    header?: string;
    description?: string;
};
export declare type ContactRequestCreateFormValidationValues = {
    author?: ValidationFunction<string>;
    header?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactRequestCreateFormOverridesProps = {
    ContactRequestCreateFormGrid?: FormProps<GridProps>;
    author?: FormProps<TextFieldProps>;
    header?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactRequestCreateFormInputValues) => ContactRequestCreateFormInputValues;
    onSuccess?: (fields: ContactRequestCreateFormInputValues) => void;
    onError?: (fields: ContactRequestCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContactRequestCreateFormInputValues) => ContactRequestCreateFormInputValues;
    onValidate?: ContactRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactRequestCreateForm(props: ContactRequestCreateFormProps): React.ReactElement;
