import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from './Link';
import {connect,useDispatch} from 'react-redux';
import * as sagaActions from '../app/sagaAction';
import {requestLinkSuccess} from "../app/sagaAction";

export const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        url
        description
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
        createdAt
      }
    }
  }
`;

const Search = ({ links, requestLinkSuccess }) => {
  const [searchFilter, setSearchFilter] = useState('');
  const linksQuery = useLazyQuery( FEED_SEARCH_QUERY,{ fetchPolicy: "network-only"} );
  const dispatch = useDispatch()

  return (
      <>
        <div>
          Search
          <input
              type="text"
              onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
              onClick={() =>  dispatch({ type: "REQUEST_LINK", payload: { linksQuery, searchFilter } }) }
          >
            OK
          </button>
        </div>
        {/*{data &&
          data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
        ))}*/}
      </>
  );
};


const mapState = ( state ) => {
  return {
    links: state.links,
  }
}

/*
const mapDispatch = (dispatch) => {
  return {
    requestLinkSuccess: (data) =>  dispatch(sagaActions.requestLinkSuccess(data))
  }
}
*/

export default connect( mapState  )(Search);


/*  const callApolloVsSaga = () => {
    const [executeSearch, { called, loading }] = useLazyQuery(
      FEED_SEARCH_QUERY,
      {variables: { filter: searchFilter }}
    );
    if (called && loading) return <p>Loading...</p>;
    if (!called) {
      return <button onClick={() => executeSearch()}>Search</button>
    }*/

