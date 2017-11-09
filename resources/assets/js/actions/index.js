// FOR THE REMINDERPRO WEB APPLICATION
/*
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from "../constants";

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }

    console.log('action in addReminder', action);

    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };

    console.log('deleting in actions', action);
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}
*/

// FOR THE GOALCOACH WEB  APPLICATION
import { SIGNED_IN, SET_GOALS } from "../constants";

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }

    return action;
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    };

    return action;
}
