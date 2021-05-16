import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from './Link';
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../app/sagaAction";
import { FEED_SEARCH_QUERY } from '../app/saga'


const Search = () => {

  const [searchFilter, setSearchFilter] = useState('');

  const dispatch = useDispatch();

  let pizda = () => {
    dispatch()
  }
  // const [executeSearch, { links }] = useLazyQuery(
  //   useDispatch({ type: sagaActions.FETCH_DATA_SAGA })
  // );

  const links = useSelector(state => state.links);

  console.log('zalupa',links, dispatch);

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          onClick={() =>
             pizda()
            }
        >
          OK
        </button>
      </div>
      {links && links.feed &&
        links.feed.todos.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
    </>
  );
};

export default Search;
