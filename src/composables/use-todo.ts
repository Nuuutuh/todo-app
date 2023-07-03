import {ref} from 'vue';
import  {useData}  from './use-data';
import Todo from '@/interface/interface';
import {v4 as uuidv4} from 'uuid';

export function useTodo() {
  const newTodo = ref('');
  const {todos} = useData();
  const list = ref(todos);
  const ID = uuidv4();

  function addNewTodo() {
    if (newTodo.value.trim() !== '') {
      const index: Todo = {text: newTodo.value, completed: false, id: ID};
      list.value.push(index);
      newTodo.value = '';
    }
  }

  function deleteTodo(index: number) {
    list.value.splice(index, 1);
  }

  function editTodo(index: number) {
    const updatedText = prompt('Enter the updated task:', list.value[index].text);
    if (updatedText) {
      list.value[index].text = updatedText;
    }
  }

  return {
    newTodo,
    todos,
    addNewTodo,
    deleteTodo,
    editTodo,
    list,
  };
}
