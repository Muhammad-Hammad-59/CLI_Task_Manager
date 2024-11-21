import chalk from "chalk"
import { Task } from "../models/Task.model.js"
import { dbdisconnect } from "../db/index.js"
import inquirer from "inquirer"

// Function to prompt the user for task details (name and description)
const gettaskdetail= async ()=>{
   const taskdetial= await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter task detail: '
        }

    ])

    return taskdetial;
}

// Function to add a new task to the database
export const addTask= async ()=>{

    try {

        // Call the gettaskdetail function to get the name and description of the task from the user
        const tasks= await gettaskdetail();

        await Task.create(tasks).then(()=>{
            console.log(
                chalk.green('New Task added')
            )
            dbdisconnect();
         })
          
    } catch (error) {
        console.log(
            chalk('Error in Addtask :', error.message)
        )
    }

     
}