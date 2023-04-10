import { csrfFetch } from "./csrf";

const GET_ALL_FEATURES = 'features/getALL'
const CREATE_AREA_FEATURE = 'features/addAreaFeature'

export const getAllFeatures = features => {
    return {
        type: GET_ALL_FEATURES,
        features
    }
}

export const createAreaFeature = newAreaFeature => {
    return {
        type: CREATE_AREA_FEATURE,
        newAreaFeature
    };
};

// Thunk Creators

export const grabFeatures = (hauntId) => async (dispatch) => {
    const res = await csrfFetch(`/api/features/${hauntId}`)
    if (res.ok) {
        const features = await res.json()
        dispatch(getAllFeatures(features))
    }
}

export const createFeature = (feature, hauntId, type) => async (dispatch, getState) => {
    const res = await csrfFetch(`/api/features/${hauntId}/${type}`, {
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