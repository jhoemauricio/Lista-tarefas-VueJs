
//cria um array com as propriedades
var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        //propriedade true para listar feito e nao feito
        //true = feito
        done: true
    },
    {
        text: 'Aprendendo básico vue',
        done: false
    }
];

//constante com a lógica da aplicação
const todosApp = {

    //dados da aplicação
    data(){
        //retorna um objeto
        return {
            //dados da variavel global
            todos: window.todos,

            //nova propriedade para adicionar nova tarefa
            newTodo: {
                done: false
            }
        }
    }

}

//inicializa a aplicação
 Vue.createApp(todosApp).mount('#app');