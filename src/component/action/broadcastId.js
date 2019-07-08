import { BROADCAST_ID  } from "../constants";

const broascastId = (id) => ({
    type: BROADCAST_ID,
    payload: id
});

export default broascastId;