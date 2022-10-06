const user = [
    {id: 1, name : "anish", age : 20, },
    {id: 2, name : "hariharan", age : 21}
]

module.exports = {
    Query: {
        user : () => user
    }
};

