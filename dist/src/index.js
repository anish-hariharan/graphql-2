"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("graphql");
const task_1 = require("resolvers/task");
const main = async () => {
    const apolloserver = new apollo_server_express_1.ApolloServer({
        schema: await (0, graphql_1.buildSchema)({
            resolvers: [task_1.TaskResolver],
            validate: false,
        }),
    });
    await apolloserver.start();
    const app = (0, express_1.default)();
    apolloserver.applyMiddleware({ app });
    app.get("/", (_req, res) => res.send("<h1> Hello </h1>"));
    app.listen("2004", () => console.log("Running in 2004"));
    main().catch((err) => {
        console.log("the error is " + err);
    });
};
//# sourceMappingURL=index.js.map