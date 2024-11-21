import chalk from "chalk";
import { dbdisconnect } from "../db/index.js";
import { Task } from "../models/Task.model.js";
import Table from "cli-table3";

// Create a new table instance with headers and column widths

const table = new Table({
  head: ["ID", "Name", "Description", "Status"], // Table headers
  colWidths: [20, 20, 30, 15], // Column widths
});


// Function to list all tasks in the collection

export const listAllTask = async () => {
  try {
    const tasks = await Task.find();

    // Populate the table with task data
    tasks.forEach((task) => {
      table.push([task.id, task.name, task.description, task.status]);
    });

    // Display the table in the console
    console.log(table.toString());


    dbdisconnect();

  } catch (error) {

    console.log(
        chalk.red(`Error in List all Task ${error.message}`)
    );
  }
};


// Function to list tasks with a 'complete' status
export const doneTask = async () => {
  try {

     // Fetch tasks with 'complete' status from the database
    const doneTasks = await Task.find({ status: "complete" });

    // Check if there are no matching tasks
    if (doneTasks.length === 0) {
      console.log(
        chalk.green("No records found. The collection is currently empty.")
      );
    } else {
      console.log(
        chalk.green("Here are the documents in the collection:")
    );
       
      doneTasks.forEach((task) => {
        table.push([task.id, task.name, task.description, task.status]);
      });

      console.log(table.toString());
    }

    dbdisconnect();

  } catch (error) {
    console.log(
        chalk.red(`Error in to list done Task  ${error.message}`)
    );
  }
};


// Function to list tasks with a 'pending' status
export const pendingTask = async () => {
  try {

    const doneTasks = await Task.find({ status: "pending" });

    if (doneTasks.length === 0) {
      console.log(
        chalk.green("No records found. The collection is currently empty.")
      );
    } else {
      console.log(chalk.green("Here are the documents in the collection:"));

      doneTasks.forEach((task) => {
        table.push([task.id, task.name, task.description, task.status]);
      });

      console.log(table.toString());
    }

    dbdisconnect();

  } catch (error) {

    console.log(
        chalk.red(`Error in to list done Task  ${error.message}`)
    );
  }
};
