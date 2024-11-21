import 'dotenv/config'
import { Command } from "commander";
import {dbconnection} from './db/index.js';
import { addTask } from './metods/addTask.js';
import { Update } from './metods/updataTask.js';
import { deletetask } from './metods/deleteTask.js';
import { doneTask, listAllTask, pendingTask } from './metods/taskList.js';


const program=new Command();

 
program
    .version('1.0.0')
    .description('Task manager')

dbconnection();
program
    .command('add')
    .description('Create a new todo.')
    .action(addTask)

program
    .command('update')
    .description('update task')
    .action(Update)

program
    .command('delete')
    .description('Delete task doc')
    .action(deletetask)

program
    .command('listdoc')
    .description('List all doc')
    .action(listAllTask)

program
    .command('donDocs')
    .description('List all doc')
    .action(doneTask)

program
    .command('pendingDocs')
    .description('List all doc')
    .action(pendingTask)

program.parse(process.argv);
