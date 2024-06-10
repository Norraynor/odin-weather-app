import "./style.css";
import * as projectContainer from "./modules/projectContainer";
import * as DOMController from './modules/DOMController';
import * as dateFns from '../node_modules/date-fns';
import * as saveLoad from "./modules/saveLoad";

function component() {
	const element = document.createElement("div");
	const container = projectContainer.createProjectContainer();
	saveLoad.loadProject(container);
	//container.addItem('defult', 'default project');
	container.selectProject(0);
	// let currentProject = container.getCurrentProject();

	// currentProject.addItem('example', 'example todo', new Date().toDateString(), 1);
	// currentProject.selectTodo(0);
	// let currentTodo = currentProject.getCurrentTodo();
	// console.log(currentTodo.isUrgent());
	DOMController.setProjectContainer(container);
	element.appendChild(DOMController.drawMainContainer());
	DOMController.setTopElement(element);
	return element;
}

document.body.appendChild(component());
