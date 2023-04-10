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

// Normalizing Data Helper Function
const normalize = function(array, obj) {
    array.forEach(ele => {
        obj[ele.id] = ele
    })
}

// Reducer

const initialState = {"area": {}, "essentials": {}, "amenities": {}};

const featureReducer = (state = initialState, action) => {
    let newState = {"area": {}, "essentials": {}, "amenities": {}}
    switch(action.type) {
        case GET_ALL_FEATURES:
            normalize(action.features.area, newState.area)
            normalize(action.features.essentials, newState.essentials)
            normalize(action.features.amenities, newState.amenities)
            return newState;
        case CREATE_AREA_FEATURE:
            newState = {...state, "area": {...state.area, [action.newAreaFeature.id]: action.newAreaFeature}}
            return newState;
        default:
            return state; 
        } 
}

export default featureReducer;