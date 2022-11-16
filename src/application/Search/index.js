import React, { useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import SearchBox from './../../baseUI/search-box';

function Search(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState ('');
  // 由于是传给子组件的方法，尽量用 useCallback 包裹，以使得在依赖未改变，始终给子组件传递的是相同的引用
  const searchBack = useCallback(() => {
    setShow(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    setShow(true)
  }, [])

  const handleQuery = useCallback((q) => {
    setQuery(q);
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => navigate(`/recommend`)}
    >
      <Container>
        <div className="search_box_wrapper">
          <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
        </div>
      </Container>
    </CSSTransition>
  )
}

export default Search;