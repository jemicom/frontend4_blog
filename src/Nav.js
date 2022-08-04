import React, {useContext} from 'react'
import { Link} from 'react-router-dom'
import DataContext  from './context/DataContext'

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <nav className="Nav">
         <form className="searchForm" onSubmit={(e)=>e.preventDefault()} >
            <label htmlFor="search"> Search Posts </label>
            <input id="search"
                   type="text"
                   placeholder="개설 정보 검색"
                   value={search}
                   onChange={ e=> setSearch(e.target.value)}
                   autoComplete="off"
            />
         </form>
         <ul>
              <li><Link to="/">개설정보</Link></li>
              <li><Link to="/post">문의하기</Link></li>
              <li><Link to="/about">About</Link></li>
         </ul>
    </nav>
  )
}

export default Nav