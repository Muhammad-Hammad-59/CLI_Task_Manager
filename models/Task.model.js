import mongoose from "mongoose";


const TaskSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
 },
 description: {
    type: String,
    required: true,
 },
 status: {
    type: String,
    required: true,
    enum: ['complete','pending'],
    default: 'pending',
    trim: true

 }
},{timestamps: true});

export const Task =mongoose.model('Task',TaskSchema)