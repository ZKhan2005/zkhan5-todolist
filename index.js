#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//===== todos array =====//
// ===== function =====//
// ===== operation  ====//
let todos = [" Offer Prayer ", " Workout ", " Study ", " Coding ", " Cooking ", " Shopping "];
async function createTodo(todos) {
    let ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "select operation",
        choices: ["add", "update", "view", "delete"]
    });
    if (ans.select == "add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: " Add  Task  In  Your  ToDos  List..",
        });
        todos.push(addTodo.todo);
        console.log(chalk.bgBlueBright(todos));
    }
    if (ans.select == "update") {
        let updateTask = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: " UpDate  In  Your  ToDos  List.. ",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: " Add  In  Todos  List..",
        });
        let newTodos = todos.filter(val => val !== updateTask.todo);
        todos = [...newTodos, addTodo.todo];
        console.log(chalk.blueBright(todos));
    }
    if (ans.select == "view") {
        console.log(chalk.redBright(todos));
    }
    if (ans.select == "delete") {
        let deleteTask = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: " Delete  This  Task..",
            choices: todos.map(item => item)
        });
        let newTodos = todos.filter(val => val !== deleteTask.todo);
        todos = [...newTodos];
        console.log(chalk.magentaBright(todos));
    }
}
createTodo(todos);
