import { BROADCAST_ID  } from "../constants";

const addId = (state = null, action) => {
    switch (action.type) {
        case BROADCAST_ID :
            return {
                ...state,
                currid: [
                    ...action.payload,
                ]
            };
        default:
            return state;
                
    }
};

export default addId; 