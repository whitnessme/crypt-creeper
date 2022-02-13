import { csrfFetch } from "./csrf";

const LOAD_BOOKING_USER = 'booking/loadBookingUser';
const LOAD_BOOKING_HAUNT = 'booking/loadBookHaunt';
const LOAD_ONE_BOOKING = 'booking/loadOneBooking'
const CREATE_BOOKING = 'booking/create';
const UPDATE_BOOKING = 'booking/update'
const REMOVE_BOOKING = 'booking/remove'

export const loadBookingUser = userBookings => {
    return {
        type: LOAD_BOOKING_USER,
        userBookings
    }
}

export const loadBookingHaunt = hauntBookings => {
    return {
        type: LOAD_BOOKING_HAUNT,
        hauntBookings
    }
}

export const loadOneBooking = oneBooking => {
    return {
        type: LOAD_ONE_BOOKING,
        oneBooking
    };
};

export const create = newBooking => {
    return {
        type: CREATE_BOOKING,
        newBooking,
    }
}

export const update = updatedBooking => {
    return {
        type: UPDATE_BOOKING,
        updatedBooking,
    }
}

export const remove = removedBooking => {
    return {
        type: UPDATE_BOOKING,
        removedBooking,
    }
}

// THUNKS

export const getBookingsByUser = (userId) => async (dispatch, getState) => {
    const res = await fetch(`/api/bookings/users/${userId}`);
    if (res.ok) {
        const userBookings = await res.json()
        return dispatch(loadBookingUser(userBookings))
    }
};

export const getBookingsByHaunt = (hauntId) => async (dispatch, getState) => {
    const res = await fetch(`/api/bookings/haunts/${hauntId}`);
    if (res.ok) {
        const hauntBookings = await res.json()
        return dispatch(loadBookingHaunt(hauntBookings))
    }
};

export const getOneBooking = (bookingId) => async (dispatch, getState) => {
    const res = await fetch(`/api/bookings/${bookingId}`);
    if (res.ok) {
        const booking = await res.json()
        console.log(booking)
        if(!booking) return null
        return dispatch(loadOneHaunt(booking))
    };
};

export const createNewBooking = (payload) => async (dispatch, getState) => {
    const res = await csrfFetch('/api/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const newBooking = await res.json()
        dispatch(create(newBooking))
        return newBooking;
    };
};

export const updateBooking = (payload, bookingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    if (res.ok) {
        const updatedBooking = await res.json()
        dispatch(update(updatedBooking))
    }
};

export const deleteBooking = (bookingId) => async (dispatch, getState) => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    if (res.ok) {
        // const deletedHaunt = await res.json();
        dispatch(remove(bookingId))
        // return deletedHaunt;
    }
};

// Reducer 
const initialState = {byUser: {}, byHaunt: {}, entries: {}}
const bookingsReducer = (state = initialState, action) => {
    let newState;
    let byUser;
    let byHaunt;
    switch(action.type) {
        case LOAD_BOOKING_USER:
            newState = {...state}
            byUser = {}
            action.userBookings.forEach(booking => byUser[booking.id] = booking)
            newState.byUser = byUser;
            return newState;
        case LOAD_BOOKING_HAUNT:
            newState = {...state}
            byHaunt = {}
            action.hauntBookings.forEach(booking => byHaunt[booking.id] = booking)
            newState.byHaunt = byHaunt;
            return newState;
        case LOAD_ONE_BOOKING:
            newState = {...state};
            entries = {};
            entries[action.oneBooking.id] = action.oneBooking;
            newState.entries = entries;
            return newState;  
        case CREATE_BOOKING:
            newState = {...state, [action.newBooking.id]: action.newBooking}
            return newState;
        case UPDATE_BOOKING:
            newState = {...state, [action.updatedBooking.id]: action.updatedBooking};
            return newState;
        case REMOVE_BOOKING:
            newState = {...state};
            delete newState[action.bookingId]
            return newState;
        default:
            return state;
    };
};

export default bookingsReducer;