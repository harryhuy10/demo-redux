<<<<<<< HEAD
export const callingAPI = () => dispatch => {
    return promise1.then(() => {
        
        fetch('https://reqres.in/api/users?page=1').then((f) => f.json()).then((_f) => {
          


            console.log(_f)
            dispatch({
                type: 'callingAPI',
                payload: _f.data
            })
        }

        )
    })
}
var promise1 = new Promise(function (resolve, reject) {
    resolve('done')

});

=======
export const callingAPI = () => dispatch => {
    return promise1.then(() => {
        
        fetch('https://reqres.in/api/users?page=1').then((f) => f.json()).then((_f) => {
          


            console.log(_f)
            dispatch({
                type: 'callingAPI',
                payload: _f.data
            })
        }

        )
    })
}
var promise1 = new Promise(function (resolve, reject) {
    resolve('done')

});

>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
