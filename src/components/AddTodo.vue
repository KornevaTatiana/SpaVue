<template>  
    <form @submit.prevent="onSubmit">
        <input id="title" type="text" placeholder=" Create a new todo..." v-model="title" required>    
        <label for="title"></label>        
        <button type="submit" >Create</button>
    </form>   
</template >   

<script>
    export default {
        data(){
            return{
                title: ''
            }
        },
    methods: {
        onSubmit(){
            if (this.title.trim()){
                const newTodo = {
                    id: Date.now(),
                    title:this.title,
                    completed: false
                }    
                console.log(newTodo)                        
                this.$emit('Add-todo', newTodo)
                this.title = '' 
                this.$store.dispatch('createTodo', newTodo)                                
            }
        },
    },    
}
</script>

<style lang='less' scoped>
 form {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    input {
        width: 400px;  
        cursor: pointer;
        &[type="text"]:hover{
            padding: 12px;
            border: 4px solid rgba(64, 199, 129, 0.5);
            background:  rgba(64, 199, 129, 0.2);
        }    
        &:focus {
            outline: 0;
            outline-offset: 0;
        }     
    }
    button{ 
        cursor: pointer;      
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64,199,129);
        box-shadow: 0 -3px rgb(53,167,110) inset;
        transition: 0.2s;
        &:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
    } 
 }
</style>

