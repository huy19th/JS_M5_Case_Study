import React from 'react';
import { useState } from 'react';
import { Icon } from '../../icons/Icons';
import { search } from '../../services/search';
import { useDispatch } from 'react-redux';
import { setSearchResult, clearSearchResult } from '../../store/Search';
import CloseIcon from '@mui/icons-material/Close';


function Search() {
  const [searchKey, setSearchKey] = useState('');
  const [isVisible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const handleChange = event => {
    setSearchKey(event.target.value);
    if (event.target.value) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  const handleClick = event => {
    setSearchKey('');
    setVisible(false);
    dispatch(clearSearchResult());
  }

  const handleSubmit = event => {
    if (searchKey) {
      search(searchKey).then(res => {
        dispatch(setSearchResult(res));
      })
    }
    event.preventDefault();
  }

  return (
    <div className='mr-auto ml-4 relative'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search-input' className='w-10 h-10 flex items-center justify-center absolute top-0 left-1 right-3 text-[#121212]'>
          <Icon size={24} name={"search"} />
        </label>
        <input type={'text'} id="search-input" autoFocus={true} placeholder={"Search Songs, Artists, Album,..."}
          className={"h-10 max-w-full w-[22.75rem] py-1.5 px-12 bg-white rounded-full text-ellipsis placeholder-black/50 text-black text-sm font-semibold outline-none"}
          value={searchKey}
          onChange={handleChange}
        />
        <span
          className={`w-10 h-10 flex items-center justify-center absolute top-0 left-19 right-3 text-[#121212] pl-4 ${isVisible ? null : 'hidden'}`}
          onClick={handleClick}
        >
          <CloseIcon sx={{ fontSize: 25 }} />
        </span>
      </form>
    </div>
  )
}

export default Search