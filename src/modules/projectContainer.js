import * as projectItem from './projectItem';
import * as saveLoad from "./saveLoad";

function createProjectContainer() {
	let projectItems = [];
	let currentProject = projectItems[0] != null ? projectItems[0] : null;
	
	function addItem(title, description) {
		let item = projectItem.createProjectItem(title, description);
		projectItems.push(item);
		saveLoad.saveProject(projectItems);
		return item;
	}
    function removeItem(index) {
		projectItems.splice(index, 1);
		currentProject = projectItems[0] != null ? projectItems[0] : null;
		if (currentProject != null) {
			currentProject.setSelected(true);
		}
	}
	function getItems() {
		return projectItems;
    }
    function selectProject(index) {
		projectItems.forEach(element => {
			element.setSelected(false);
		})
		currentProject = projectItems[index];
        if (currentProject != null) {
			currentProject.setSelected(true);
		}
    }
    function getCurrentProject() {
        return currentProject;
    }
	return {
		addItem,
		removeItem,
		getItems,
		selectProject,
		getCurrentProject,
	};
}

export { createProjectContainer };
