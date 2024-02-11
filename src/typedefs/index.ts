import { gql } from 'graphql-tag';
import {enums} from './enums';
import inputs from './inputs';
import types from './types';
import queries from './queries';
import mutations from './mutations';

const schema = gql`
  ${enums}
  ${inputs}
  ${types}
  ${queries}
  ${mutations}
`;

export default schema;
