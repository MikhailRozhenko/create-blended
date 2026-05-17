import { getFromLS, saveInLS } from './local-storage-api';
import { renderTasks } from './render-tasks';

const tasks = getFromLS('tasks') || [];

export function addTask(event) {
  event.preventDefault();
  const titleInputValue = event.target.elements.taskName.value.trim();
  const descriptionInputValue =
    event.target.elements.taskDescription.value.trim();
  console.log(titleInputValue, descriptionInputValue);
  if (titleInputValue === '' || descriptionInputValue === '') {
    alert('fields can not be empty');
    return;
  }
  const task = {
    title: titleInputValue,
    desc: descriptionInputValue,
  };
  tasks.push(task);
  saveInLS('tasks', tasks);
  renderTasks(tasks);
  event.target.reset();
}
