import * as todoItem from "./todoItem";
import * as projectItem from "./projectItem";

function createForm(itemName, container) {
    let item = projectItem.createProjectItem();
    if (itemName === 'todo') {
        item = todoItem.createTodoItem();
    }
	const dialog = document.createElement("dialog");
	dialog.classList.add("form");
    const form = document.createElement("form");
    form.method = 'post';
	const fieldset = document.createElement("fieldset");
	const legend = document.createElement("legend");
	legend.textContent = itemName.toUpperCase();
    fieldset.appendChild(legend);
    //add to form in for loop
    let properties;
    if (item !== undefined) {
			console.log(item);
			properties = Object.getOwnPropertyNames(item).filter(
				(element) => typeof item[element] !== "function"
			);
			properties.forEach((key) => {
				const label = document.createElement("label");
				label["for"] = key;
				label.textContent = key;
				//for = same as input id
				const input = document.createElement("input");
				input.type = "text";
				switch (key) {
					case "complete":
						input.type = "checkbox";
						break;
					case "priority":
						input.type = "number";
						break;
					case "dueDate":
						input.type = "date";
						break;
					default:
						break;
				}
				if (key === "complete") {
				}

				input.id = key;
				input.name = key;
				//id = same as for in label
				const div = document.createElement("div");
				div.classList.add("form-grid");
				div.appendChild(label);
				div.appendChild(input);
				fieldset.appendChild(div);
			});
		}
    const confirmButton = document.createElement("button");
    confirmButton.textContent = 'Confirm';
    confirmButton.type = 'submit';
    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();
        //handle form data here
        let inputs = fieldset.querySelectorAll('input');
        let title,description,dueDate,priority;
        for (const element of inputs) {
            element.id == 'title' ? (title = element.value) :title;
            element.id == 'description' ? (description = element.value) : description;
            element.id == "dueDate" ? (dueDate = element.value) : dueDate;
            element.id == "priority" ? (priority = element.value) : priority;
        }
        if (itemName == 'project') {
            container.addItem(title,description);            
        }        
        if (itemName == 'todo') {            
            container.getCurrentProject().addItem(title, description, dueDate, priority); 
        }
        dialog.close();
    })
    const closeButton = document.createElement("button");
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    })
    const buttons = document.createElement('div');
    buttons.classList.add('form-buttons');
    buttons.appendChild(confirmButton);
    buttons.appendChild(closeButton);


    form.appendChild(fieldset);
    form.appendChild(buttons);
    dialog.appendChild(form);
    return dialog;
}

export {createForm}