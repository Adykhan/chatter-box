export const updateNotifications = (notifications) => {
  return (dispatch, getState) => {
    dispatch({type: 'UPDATE_NOTIFICAIONS', notifications})
  }
}
