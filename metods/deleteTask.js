import inquirer from "inquirer";
import { dbdisconnect } from "../db/index.js";
import { Task } from "../models/Task.model.js";
import chalk from "chalk";

// Function to prompt the user for the document ID to delete
const deleteTaskQ= async ()=>{
 const docIdtoDelete= await inquirer
 .prompt(
    [
        {
            type:"input",
            message:"Enter Doc id to delete:",
            name:"_id"
        }
    ]
 )

 return docIdtoDelete;
}

// Main function to delete a task
export const deletetask= async ()=>{

    try {
        const docId= await deleteTaskQ();
       

        const deleteDocId={_id:docId}

        Task.deleteOne(deleteDocId).then(()=>{
            console.log(
                chalk.green(`Task having id: '${docId._id}' deleted`)
            )
            dbdisconnect();
        })


    } catch (error) {
        console.log(
            chalk.red("Error in delete task :",error.message)
            );
    }
}

