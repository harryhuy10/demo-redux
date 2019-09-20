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

