<template>
    <div>
        <div v-if='newTodo'>
            <router-link to="/todos" class="router">Back</router-link>
            <router-link to="/" class="router">Home</router-link>
            <div >
                <ul class="center">
                    <li><strong>id:</strong> {{newTodo.id}}</li>
                    <li><strong>description: </strong> {{newTodo.title}}</li>
                    <li><strong>completed: </strong> {{newTodo.completed}}</li>
                </ul> 
            </div>                           
        </div>        
        <p v-else>Todo not found</p>        
    </div>
</template>

<script> 
export default {
    computed:{
        newTodo(){  
            return this.$store.getters.taskById(+this.$route.params.id)            
        }
    },
    name: 'App',
         data(){
            return{
            todos: []
            }
        },
}
</script>

<style lang="less" scoped>
    .router{
        display: inline;
        padding: 20px;
    }    
    ul{            
        text-align: left;  
        strong{
            color: rgb(64,199,129);
            text-transform: capitalize;
        }      
    }       
</style>