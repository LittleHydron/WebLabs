const listReducer = (state = [], action) => {
    let elem = null;
    let newState = [...state];
    switch(action.type){
        case 'ADD':
            elem = state.filter(el=>el[0].id === action.body.id && el[0].color === action.body.color)
            if (elem.length === 0){
                newState.push([action.body, action.amount]);
            }else{
                newState[newState.indexOf(elem[0])][1] += action.amount;
            }
            break;
        case 'DELETE':
            elem = state.filter(el=>el[0].id === action.body.id && el[0].color === action.body.color)
            let ind = newState.indexOf(elem[0]);
            -- newState[ind][1];
            if (newState[ind][1] === 0) {
                newState.splice(ind, 1);
            }
            break;
        case 'INCREASE':
            ++ newState[action.index][1];
            break;
        case 'DECREASE':
            -- newState[action.index][1];
            if (newState[action.index][1] < 0){
                newState[action.index][1] = 0;
            }
            break;
    }
    return newState;
}

export default listReducer;