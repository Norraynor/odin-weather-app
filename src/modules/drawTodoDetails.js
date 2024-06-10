function drawTodoDetails(todo) {
	const container = document.createElement("div");
	container.classList.add("details");
	const title = document.createElement("div");
	title.classList.add("details-title");
	const dueDate = document.createElement("div");
	dueDate.classList.add("details-date");
	const priority = document.createElement("div");
	priority.classList.add("details-priority");
    const description = document.createElement('div');
	description.classList.add('details-description');
	const titleContainer = document.createElement('div');
	titleContainer.classList.add('details-header')
	if (todo != null) {		
		title.textContent = todo.title;
		dueDate.textContent = todo.dueDate;
		priority.textContent = todo.priority;
		if (todo.isUrgent()) {
			priority.textContent = 'URGENT!';
		}
		description.textContent = todo.description;
	}
	titleContainer.appendChild(title);
	titleContainer.appendChild(priority);
	titleContainer.appendChild(dueDate);
	container.appendChild(titleContainer);
    container.appendChild(description);

	return container;
}

export { drawTodoDetails };
