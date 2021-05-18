import { takeEvery, put, call } from "redux-saga/effects";
import { requestLink, requestLinkSuccess, requestLinkFailed } from "./sagaAction";
import {FEED_SEARCH_QUERY} from "../components/Search";


const delay = (ms, res) =>  new Promise(() => setTimeout(res,ms))

function* fetchDataSaga(action) {
    try {
        const [requestLink, { data } ] = action.payload.linksQuery

        const request = requestLink( { variables: { filter: action.payload.searchFilter }})

        console.log(data)
        yield  call (delay(2000, request).then(( ) => data))
        yield put({ type: "REQUEST_LINK_SUCCESS", payload: data })

    } catch (error) {
        console.log(error)
        yield put(requestLinkFailed())
    }
}

export function* watchFetchLink() {
    yield takeEvery("REQUEST_LINK", fetchDataSaga)
}