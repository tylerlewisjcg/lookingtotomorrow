import axios from 'axios';


// initialize state
let initialState = {
  
}

//const variables


//reducer function

////////what is my reducer doing/ are each of my tables doing/ why do i need to join them?
/////// what info does each component need from any other components
////Achievements page
/////lightswitch functions can be stored in reducer to be used generically on each page
export default function reducer(state = initialState, action){
    switch(action.type){
        case xxxxxx:
        return Object.assign({}, state, { xxxxxx: action.payload});

        case xxxx:
        return Object.assign({}, state, { xxxxxx: action.payload});



        default:
            return state;
    }
}

//action creators
