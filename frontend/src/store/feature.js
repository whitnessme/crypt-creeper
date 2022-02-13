import { csrfFetch } from "./csrf";

const CREATE_AREA_FEATURE = 'feature/addAreaFeature'

export const createAreaFeature = newAreaFeature => {
    return {
        type: CREATE_AREA_FEATURE,
        newAreaFeature
    };
};

// Thunk Creators

export const createNewAreaFeature = ({feature, hauntId}) => async (dispatch, getState) => {
    const res = await csrfFetch(`/api/areaFeatures/${hauntId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(feature)
    })
    if(res.ok) {
        const newAreaFeature = await res.json()
        dispatch(createAreaFeature(newAreaFeature))
    };
};

// Reducer

const initialState = {};

const featureReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case CREATE_AREA_FEATURE:
            newState = {...state, [action.newAreaFeature.id]: action.newAreaFeature}
            return newState;
        default:
            return state; 
        } 
}

export default featureReducer;