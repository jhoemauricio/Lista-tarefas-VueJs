
//cria um array com as propriedades
// var todos = [
//     {
//         text: 'Aprender HTML, CSS e Javascript',
//         //propriedade true para listar feito e nao feito
//         //true = feito
//         done: true
//     },
//     {
//         text: 'Aprendendo básico vue',
//         done: false
//     }
// ];

//constante com a lógica da aplicação
const todosApp = {

    //dados da aplicação
    data(){
        //retorna um objeto
        return {
            //dados da variavel global
            todos: [],

            //nova propriedade para adicionar nova tarefa
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        //método para adicionar a tarefa
        addTodo: function(){

            //verifica se a propriedade text tem alguma coisa escrita
            if(this.newTodo.text){
                     //pega o array 'todos' e adiciona o novo objeto
            this.todos.push(this.newTodo);
            //o objeto volta ao estado original limpando assim os campos do formulário
            this.newTodo = {
                done: false
            }

            } else {
                alert("To-do text is required");
            }
       
        }
    }

}

//inicializa a aplicação
 Vue.createApp(todosApp).mount('#app');