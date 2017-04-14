export const geo = () => {
  return dispatch => fetch('https://freegeoip.net/json/').then(response => {
     return response.json()
  }).then(json => {
    dispatch({
       type: 'GEO_POSITION',
       position: json.city
     });
  }).catch(e => {
     console.log('parsing failed', e)
  })
}
