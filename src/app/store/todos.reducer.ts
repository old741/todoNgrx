
import { Todo } from "../todo.model";
import * as todoAction from './todos.actions'


export interface TodoState {
    datas: Todo[];
  }

const initialState = {
    datas: [
      {
        message: 'manger une pizza',
        done: false
      }
    ]
  };

export function todosReducer(state:TodoState = initialState, action:todoAction.TodosActionType):TodoState{
    console.log(state);
    console.log(action);
    switch(action.type){
        case todoAction.TODO_CREATE: return {
            ...state,
            datas:[...state.datas,action.payload]
        };
        case todoAction.TODO_DELETE: return {
            ...state,
            // filter 1er param l'itération en cour une todo   
            // 2eme param et l'index de l'itération en cour
            // la méthode filter sur un array ne modifie pas l'array elle en retourne un new
            // donc pas la peine de renvoyer la ligne ci dessous
            //  datas:[...state.datas.filter((todo,index)=>{ index !== action.payload})]

            datas:state.datas.filter((todo,index)=> index !== action.payload)
        }
        case todoAction.TODO_TOGGLE: 
        const selectedTodo = state.datas[action.payload];
        selectedTodo.done = !selectedTodo.done;
        const newTodos = [...state.datas];
        newTodos[action.payload] = selectedTodo;

        return {
            ...state,
            datas:newTodos
        };

        default : return state;
    }
    // le state est déja retourner dans le switch
   // return state;
}

