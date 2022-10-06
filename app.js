const express = require("express");

const { ApolloServer } = require("apollo-server-express")

const typeDefs = require("./graphql/type")

const resolvers = require("./graphql/resolver")

const server = new ApolloServer ( { typeDefs, resolvers })

const app = express()
server.applyMiddleware({app})

app.listen(4000, () => console.log("Port is running on 4000"))