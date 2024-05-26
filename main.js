import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let todosItem = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What you want to add your Todos?'
        },
        {
            name: 'moreTodos',
            type: 'confirm',
            message: 'Want to more your add Todos'
        }
    ]);
    todos.push(todosItem.todo);
    condition = todosItem.moreTodos;
    console.log(todos);
}
