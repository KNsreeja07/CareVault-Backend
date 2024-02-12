"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const enums_1 = require("./enums");
const inputs_1 = require("./inputs");
const types_1 = __importDefault(require("./types"));
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
const schema = (0, graphql_tag_1.gql) `
  ${enums_1.enums}
  ${inputs_1.inputs}
  ${types_1.default}
  ${queries_1.queries}
  ${mutations_1.mutations}
`;
exports.default = schema;
