<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 text-center">To-Do List</h1>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Add a new task"
      class="p-2 border rounded mb-4 w-full"
    />
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md"
      >
        <input
          type="checkbox"
          v-model="todo.completed"
          @change="updateTask(todo)"
          class="mr-2"
        />
        <span :class="{'line-through': todo.completed}" class="flex-grow">
          {{ todo.task }}
        </span>
        <button
          @click="deleteTask(todo.id)"
          class="ml-2 text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTask: '',
    };
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      axios.get('/api/todos').then((response) => {
        this.todos = response.data;
      });
    },
    addTask() {
      if (this.newTask) {
        axios
          .post('/api/todos', { task: this.newTask })
          .then((response) => {
            this.todos.push(response.data);
            this.newTask = '';
          });
      }
    },
    updateTask(todo) {
      axios.put(`/api/todos/${todo.id}`, { completed: todo.completed });
    },
    deleteTask(id) {
      axios.delete(`/api/todos/${id}`).then(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      });
    },
  },
};
</script>

<style scoped>
/* Aquí puedes agregar más estilos específicos si lo deseas */
</style>
