
const initialState = {
    businessInfo: []
}

export const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BUSINESS_DETAILS':
            return { ...state , businessInfo: [ action.payload]}
        default:
            return state;
    }
}

 