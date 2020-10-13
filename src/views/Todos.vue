<template>
  <div>     
    <router-link to="/" class="router">Home</router-link>    
    <AddTodo
      @Add-todo='AddTodo'
    />
    <span>search</span>
    <select v-model="filter" class="select">      
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>    
    <TodoList     
      v-if='filteredTodos.length'
      v-bind:todos="filteredTodos"       
    />  
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data(){
    return{
        todos: [],        
        filter: 'all'
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(response => response.json())
    .then(json => {      
        this.todos=json        
      }    
    )
  },  
  computed:{
    newTodos(){      
        return this.$store.getters.newTodos
    },
    filteredTodos(){
      if(this.filter === 'all'){
        return this.newTodos
      }
      if(this.filter === 'completed'){
        return this.newTodos.filter(t=>t.completed)
      }
      if(this.filter === 'not-completed'){
        return this.newTodos.filter(t=>!t.completed)
      }    
    }    
  },
  methods:{        
    AddTodo (newTodo){
      this.todos.push(newTodo)
    }   
  },
  components: {
    TodoList: TodoList, 
    AddTodo: AddTodo  
  }
}
</script>
<style> 
  .select{
    margin: 10px;
    color:rgb(64,199,129);
  }
</style>