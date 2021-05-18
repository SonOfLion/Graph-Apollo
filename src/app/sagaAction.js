export const REQUEST_LINK = "REQUEST_LINK";
export const REQUEST_LINK_SUCCESS = "REQUEST_LINK_SUCCESS";
export const REQUEST_LINK_FAILED = "REQUEST_LINK_FAILED";

export const requestLink = () => {
    return {
        type: "REQUEST_LINK",
    }
}

export const requestLinkSuccess = data => {
    return {
        type: "REQUEST_LINK_SUCCESS", payload: data
    }
}

export const requestLinkFailed = () => {
    return {
        type: "REQUEST_LINK_FAILED",
    }
}