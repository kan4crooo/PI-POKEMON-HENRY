import {
    GET_POKEMONS, 
    GET_ALL_TYPES, 
    FILTER_CREATED, 
    ORDER_NAME, 
    FILTER_TYPE,
    ORDER_STR,
    ORDER_BY_ATTACK,
    GET_POKEMON_NAME,
    POST_POKEMON,
    GET_DETAILS,
    CLEAN_DETAIL,
    CLEAN_POKEMONS
} from "../actions/index";

const initialState= {
    pokemons:[],
    allPoke:[],
    types:[],
    pokeDetails:[]
}

const rootReducer= (state= initialState, action)=>{
    switch (action.type) {
        case GET_POKEMONS:
         return {
            ...state,
            pokemons: action.payload,
            allPoke: action.payload,
            
         };
         case CLEAN_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
            case GET_ALL_TYPES:
                return {
                    ...state,
                    types:action.payload,
                };
                case FILTER_CREATED:
                    const copy= state.allPoke;
                    const filteredCreated=
                    action.payload==="Created"?
                    copy.filter(poke=> poke.createdDb):
                    copy.filter(poke=>!poke.createdDb);
                    return {
                        ...state,
                        pokemons: action.payload=== "All"? copy: filteredCreated
                    };
                case FILTER_TYPE:
                    let copy2= state.pokemons;
                    let typeFiltered= action.payload === "all"? copy2: copy2.filter( e=>e.types.some(e=>e.name=== action.payload));
                    if( typeFiltered.length<=0){
                        typeFiltered= copy2;
                        alert("the pokemon type indicated was not found");
                    };
                    return {
                        ...state, 
                        pokemons: typeFiltered
                    };
                    case ORDER_NAME:
                        let copy3= state.pokemons;
                        let sortedName= action.payload==="asc"?
                        copy3.sort((a, b)=>{
                            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                        }):
                        copy3.sort((a, b)=>{
                            return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                        })
                        return {
                            ...state,
                            pokemons: sortedName
                        };
                    case GET_POKEMON_NAME:
                        return {
                            ...state,
                            pokemons: action.payload
                        };
                    case GET_DETAILS:
                        return{
                            ...state,
                            pokeDetails: action.payload
                        };
                    case CLEAN_DETAIL:
                        return {
                            ...state,
                            pokeDetails: action.payload
                        };
                    case POST_POKEMON:
                        return {
                            ...state
                        };
                    case ORDER_STR:
                        let copy4= state.pokemons;
                        let sortedStr= action.payload === "asc"?
                        copy4.sort((a, b)=> a.attack-b.attack):
                        copy4.sort((a, b)=>b.attack-a.attack);
                        return {
                            ...state,
                            pokemons: sortedStr
                        };
                    case ORDER_BY_ATTACK:
                        let sortedAttack= action.payload==="strong"?
                        state.pokemons.sort(function(a, b){
                            if(a.attack>b.attack){
                                return -1;
                            }
                            if(b.attack>a.attack){
                                return 1;
                            }
                            return 0;
                        }):
                        state.pokemons.sort(function(a, b){
                            if(a.attack>b.attack){
                                return 1;
                            }
                            if(b.attack>a.attack){
                                return -1;
                            }
                            return 0;
                        })
                        return {
                            ...state,
                            pokemons: sortedAttack
                        }
                        default:
                            return {...state};
    }
}





export default rootReducer;
