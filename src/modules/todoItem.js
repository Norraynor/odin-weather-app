import * as dateFns from '../../node_modules/date-fns'

function createTodoItem(title ='', description='', dueDate=new Date(), priority = 9) {
	let complete = false;
    let selected = false;
    dueDate = new Date(dueDate).toDateString();

	function getSelected() {
		return selected;
	}
	function setSelected(bool) {
		selected = bool;
	}
    function isUrgent() {
        return dateFns.differenceInCalendarDays(dueDate, new Date().toDateString()) < 2;
    }
	return {
		title,
		description,
		dueDate,
		priority,
		complete,
		getSelected,
        setSelected,
        isUrgent,
	};
}
function setComplete(todoItem, bool) {
	todoItem.complete = bool;
}
function changePriority(todoItem, priority) {
	todoItem.priority = priority;
}
function getComplete() {
	return complete;
}

export { createTodoItem, setComplete, changePriority, getComplete };
