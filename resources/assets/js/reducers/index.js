import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import reminders from './reducer_reminder';

export default combineReducers({
    user,
    goals,
    reminders
});
