"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typedefs_1 = __importDefault(require("./typedefs"));
const PORT = process.env.PORT || 4000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: typedefs_1.default,
        });
        yield server.start();
        server.applyMiddleware({ app });
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
        });
        app.use((err, _req, res, _next) => {
            console.error('Error occurred:', err.message);
            res.status(500).send('Internal Server Error');
        });
    });
}
startServer().catch(err => {
    console.error('Error starting server:', err.message);
});