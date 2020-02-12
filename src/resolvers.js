import { task } from './sample';

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World with GraphQL";
        },
        greet: (root, args, ctx) => {
            return "Hello "+args.name;
        },
        tasks: () => {
            return task;
        }
    },
    Mutation: {
        createTask: (_, { input }) => {
            input._id = task.length;
            task.push(input);
            return input
        }
    }
}