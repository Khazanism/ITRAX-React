(function () {
    const customRedux = (function () {

        function createStore(reducer) {
            let state;
            let listners = [];

            const getState = () => state;

            const dispatch = (action) => {
                state = reducer(state, action);
                listners.forEach((listner) => listner())
                // call for each listner
            }

            const subscribe = (listner) => {
                // register listner
                listners.push(listner)
                console.log(listners);
            }

            dispatch({})


            return {
                getState,
                dispatch,
                subscribe
            }
        }


        return {
            createStore
        }
    })()


    if(!window.customRedux) {
        window.$redux = window.customRedux = customRedux;
    }


})()