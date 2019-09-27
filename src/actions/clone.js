export const POST_API_SUCCESS = 'POST_API_SUCCESS';
export const POST_API_BEGIN = 'POST_API_BEGIN';
export const PUT_API_SUCCESS = 'PUT_API_SUCCESS';
export const PUT_API_BEGIN = 'PUT_API_BEGIN';
export const postStudentSuccess = (data) => ({
    type: POST_API_SUCCESS,
    payload: data 
  });
  export const postAPIBegin = () => ({
    type: POST_API_BEGIN
  });

  export const putAPISuccess = (data) => ({
    type: PUT_API_SUCCESS,
    payload: data 
  });
  export const putAPIBegin = () => ({
    type: PUT_API_BEGIN
  });
export const postAPI = (opts) => {
    console.log('asd' ,opts)
    return dispatch => {
      dispatch(postAPIBegin());
      return fetch("https://reqres.in/api/users",{
        method: 'post',
        body: JSON.stringify(opts),
        headers: {
           "Content-Type": "application/json"
        }
      })
        .then()
        .then(res => res.json())
        .then(json => {
          dispatch(postStudentSuccess(json.data));
          console.log('josn1.data', json)
          return json.data;
        })
        .catch(error => dispatch());
    };
  }
  export const putAPI = (opts) => {
    console.log('asd' ,opts)
    return dispatch => {
      dispatch(putAPIBegin());
      return fetch("https://reqres.in/api/users",{
        method: 'post',
        body: JSON.stringify(opts),
        headers: {
           "Content-Type": "application/json"
        }
      })
        .then()
        .then(res => res.json())
        .then(json => {
          dispatch(putAPISuccess(json.data));
          console.log('josn1.data', json)
          return json.data;
        })
        .catch(error => dispatch());
    };
  }