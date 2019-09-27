<<<<<<< HEAD
export const simpleAction = () => dispatch => {
    var action = Math.random()
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action' + ' ' + action
    })
}
export const hardAction = () => dispatch => {
  
    dispatch({
        type: 'HARD_ACTION',
        payload: 'hard',
        
    })
=======
export const simpleAction = () => dispatch => {
    var action = Math.random()
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action' + ' ' + action
    })
}
export const hardAction = () => dispatch => {
  
    dispatch({
        type: 'HARD_ACTION',
        payload: 'hard',
        
    })
>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
}