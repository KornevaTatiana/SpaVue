<template>
    <div>    
        <li>            
            <router-link tag="span" :to="'/newTodo/'+ todo.id">
                <span v-bind:class="{done: todo.completed}">         
                    <strong>{{todo.index}}</strong>
                    {{todo.title}}
                </span> 
            </router-link>  
            <button class='check'
                v-on:click='todo.completed = !todo.completed'
            >&#10003;</button>          
        </li>             
    </div>    
</template>

<script>
export default {
    props: {
        todo:{
            type: Object,
            required: true
        },
        index: Number
    }    
}
</script>

<style lang="less" scoped>
@ColorMain: rgba(64, 199, 129, 0.8);
.btn{
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    color:#fff;
    font-weight: bold;
    cursor: pointer;  
}
    li{        
        border: 2px ridge #ccc;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        margin: 0.5rem;
        cursor: pointer;
        &:hover {        
            border: 1px solid @ColorMain;
            background:  rgba(64, 199, 129, 0.2);
        } 
        span:hover{
            color:  rgba(64, 199, 129, 0.9); 
            font-weight: bold;
        }   
        .done{        
            text-decoration: line-through;
        } 
        .check{                
            background-color:  @ColorMain;
            .btn;
            border-radius: 50%;            
            &:hover{            
                background-color: rgba(31, 136, 82, 0.8)
            }
            &:active {    
                box-shadow: 0 5px #666;
                transform: translateY(4px);               
            } 
            &:focus{
                outline: none;
            }  
        }                 
    }        
</style>