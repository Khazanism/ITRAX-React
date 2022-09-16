console.log($redux);


const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const DEPOSITE_MONEY = "DEPOSITE_MONEY";

const withdraw = (amount) => {
    return {
        type: WITHDRAW_MONEY,
        payload: amount
    }
}

const deposite = function (amount) {
    return {
        type: DEPOSITE_MONEY,
        payload: amount
    }
}



const bankReducer = (state = 1000, action) => {
    switch(action.type) {
        case WITHDRAW_MONEY:
            return state - action.payload;
        case DEPOSITE_MONEY:
            return state + action.payload;
        default:
            return state;
    } 
}


const store = $redux.createStore(bankReducer)

// console.log(store);
// store.dispatch(withdraw(100))
// store.dispatch(deposite(500))
// console.log(store.getState());

// store.subscribe(() => {
//     console.log("CURRENT STATE", store.getState())
// })

let amountInput = document.querySelector("#amount")
let amountValue = document.querySelector("#value");
amountValue.innerHTML = store.getState();
document.querySelector("#withdraw").addEventListener('click', () => {
    store.dispatch(withdraw(+amountInput.value)); 
})
document.querySelector("#deposite").addEventListener('click', () => {
    store.dispatch(deposite(+amountInput.value)); 
})

store.subscribe(() => {
    console.log("CURRENT STATE", store.getState())
    amountValue.innerHTML = store.getState();
})

