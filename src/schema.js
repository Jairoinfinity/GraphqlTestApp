import {resolvers} from './resolvers';
import {makeExecutableSchema} from 'graphql-tools'

const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        users: [User]
    }

    type Task {
        _id: ID
        title: String
        description: String
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})