import {
  NEW,
  IN_PROGRESS,
  DONE
} from '../components/Statuses';

const initialState = {
    [NEW]: true,
    [IN_PROGRESS]: true,
    [DONE]: true
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FILTER_CHANGE':
    return Object.assign(
        {},
        state,
        action.filter
      )
  default:
    return state
  }
}
