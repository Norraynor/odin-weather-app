function saveProject(projectArray) {
    localStorage.setItem('main', JSON.stringify(projectArray));
}

function saveTodo(projectTitle,todoArray) {
    localStorage.setItem(projectTitle, JSON.stringify(todoArray));
}

// projects container key: name value: key of project
//todos in project: key: from container value: all todos

function loadProject(container) {
    const projectContainer = localStorage.getItem('main');
    const parsedProjectContainer = JSON.parse(projectContainer);
    console.log(parsedProjectContainer);
    parsedProjectContainer.forEach(project => {
        console.log(project);
        //add project to container
        let projectItem = container.addItem(project.title, project.description)
        //add todos to project
        let todos = localStorage.getItem(project.title);
        const parsedTodos = JSON.parse(todos);
        if (parsedTodos !== null) {
            parsedTodos.forEach((todo) => {
                        projectItem.addItem(
                            todo.title,
                            todo.description,
                            todo.dueDate,
                            todo.priority
                        );
                    });            
        }
    });
}

export {
    saveProject,
    saveTodo,
    loadProject,
}