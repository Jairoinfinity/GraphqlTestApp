import { task } from './sample';
import User from './models/User';

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
        },
        users: async () => {
            const users = await User.find();
            return users;
        }
    },
    Mutation: {
        createTask: (_, { input }) => {
            input._id = task.length;
            task.push(input);
            return input
        },
        createUser: async (_, { input }) => {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_, { _id, input }) => {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
}