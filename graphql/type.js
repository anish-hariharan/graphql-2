const { gql } = require("apollo-server-express")

module.exports = gql`
    type User {
        id : Int
        name : String
        age : Int
    }
    type Query{
        findUser(id: Int) : [User]
        user : [User]
    }`;