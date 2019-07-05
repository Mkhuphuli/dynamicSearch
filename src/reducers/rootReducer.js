
import {combineReducers} from 'redux';
//import {firestoreReducer} from 'redux-firestore';


const initState = {
    locations:[""],
    locSubset:[""]
}

export const locationsReducer =(state=initState,action)=>{
    switch(action.type){
        case 'PRELOAD_ALL_LOCATIONS':
            return {
                locSubset:[""],
                locations: action.payload
            }
            
        case 'GET_ALL_MATCHES':
            return {
                ...state,
                locSubset:state.locations.filter(item=>{
                    return item.toLowerCase().includes(action.payload.toLowerCase())
                })
            }
        case 'SEARCH_BOX_EMPTY':
                return {
                    ...state,
                    locSubset:[""]
                }

        default:
            return state
    }
}


const rootReducer =combineReducers({
    locations: locationsReducer,
    //firestore: firestoreReducer,
})

export default rootReducer;

//===========================================================================================
//                         Actions
//===========================================================================================
export const loadAction=()=>{
    return (dispatch, getState, {getFirestore}) => {
        //aync code
        const firestore = getFirestore()
        firestore.collection("branches").get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                dispatch({type: 'PRELOAD_ALL_LOCATIONS', payload:doc.data()["locations"]})
            })
        })
    }
}


export const searchAction=(payload)=>{
    if (payload!==""){
        return{
            type: 'GET_ALL_MATCHES', 
            payload:payload
        }
    } else {
        return{
            type: 'SEARCH_BOX_EMPTY', 
            payload:payload
        }
    }
}
