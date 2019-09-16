export const changeInput = (sth) => dispatch => {
    dispatch({
     type: 'CHANGE_INPUT',
     payload: 'CHANGE'+sth
    })
   }
