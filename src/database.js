import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://jbernal:Jairo2020.@cluster0-y5q90.gcp.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        })
        console.log('>>> DB in connected');
    } catch {
        console.log('Error!!')
    }
}