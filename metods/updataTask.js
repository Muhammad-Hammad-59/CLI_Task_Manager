import inquirer from "inquirer";
import { Task } from "../models/Task.model.js";
import { dbdisconnect } from "../db/index.js";


// Function to prompt the user for task details to update

const updatatask= async ()=>{
   const update= await inquirer.prompt(
        [
            {
                type: "input",
                name: "idd",
                message: "Give Task id:"
            },
            {
                type: "input",
                name: "name",
                message: "Update name: ",
                default: Task.name,
            },
            {
                type: "input",
                name: "description",
                message: "Update description : ",
                default: Task.description,
            },
            {
                type: "list",
                name: "status",
                choices: [ "complete" , "pending"] ,
                message: "Task status: "
            }
        ]
    )

    return update;
}

export const Update= async ( ) => {
    try {
        const updatedtask= await updatatask();
       
        
         const targettask= await Task.findOne({_id: updatedtask.idd})
 
          // Check if the task was found
         if (!targettask) {
            console.log("Task not found with the provided ID.");
            dbdisconnect();
            return;
        }

        // Update the task in the database using the task ID and the updated data
        Task.updateOne( { _id: targettask._id },updatedtask).then(()=>{
            console.log("Task updated success")
            dbdisconnect();
        })

    } catch (error) {
        console.log("update task error: ", error.message);
    }
}

 