import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "./store";
import { sagaActions } from "./sagaAction";
import gql from 'graphql-tag';

export const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

export function* fetchDataSaga() {
    console.log('zalupa')
    try {
        let result = yield call(() =>
            FEED_SEARCH_QUERY({ url: "http://localhost:4000" })
        );
        console.log(result.data)
        yield put(fetchData(result.data));
    } catch (e) {
        console.log(e)
        yield put({ type: "TODO_FETCH_FAILED" });
    }
}
console.log(sagaActions)

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}