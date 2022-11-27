import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ContactRequestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerContactRequest = {
  readonly id: string;
  readonly author?: string | null;
  readonly header?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactRequest = {
  readonly id: string;
  readonly author?: string | null;
  readonly header?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactRequest = LazyLoading extends LazyLoadingDisabled ? EagerContactRequest : LazyContactRequest

export declare const ContactRequest: (new (init: ModelInit<ContactRequest, ContactRequestMetaData>) => ContactRequest) & {
  copyOf(source: ContactRequest, mutator: (draft: MutableModel<ContactRequest, ContactRequestMetaData>) => MutableModel<ContactRequest, ContactRequestMetaData> | void): ContactRequest;
}