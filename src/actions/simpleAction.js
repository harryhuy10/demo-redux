export const simpleAction = () => dispatch => {
    var action = Math.random()
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'+' '+action
    })
   }