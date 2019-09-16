export const callingAPI = () => dispatch => {
    return promise1.then(() => {
        
        fetch('http://108.160.133.232:4040/api/exams/3newexams').then((f) => f.json()).then((_f) => {
          



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

