// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContactRequest } = initSchema(schema);

export {
  ContactRequest
};