import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // Points to our schema and the additional scalar Upload which is added by Apollo-Server at runtime
  schema: ["./src/typeDefs/**/*.ts"],

  generates: {
    "./src/types/generatedGraphQLTypes.ts": {
      plugins: ["typescript", "typescript-resolvers"],

      config: {
        // Generates graphQL enums as typescript union types.
        enumsAsTypes: true,

        // Makes the info argument passed to the resolver functions optional.
        optionalInfoArgument: true,

        // Makes the resolver function callable.
        makeResolverTypeCallable: true,

        // Adds suffix "Model" to the end of generated database model types.
        mapperTypeSuffix: "Model",

        // Mappers lets us provide database model types to be used in generated typescript types instead of graphql types. This
        // functionality is useful because what we retrieve from the database and what we choose to return from a graphql server
        // could be completely different fields. Address to models here is relative to the location of generated types.
        mappers: {
            Hospital: "../models/Hospital#HospitalInfoInterface",
            StaffMember : "../models/StaffMember#StaffMemberInterface",
            Administrator : "../models/Administrator#AdministratorInterface"
        },

        useTypeImports: true,
      },
    },
  },
};

export default config;
