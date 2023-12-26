import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../assets/css/section/_header.css";

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }
    handleSearch();

    return (
        <div className='search__wrap'>
            <div id='search'>
                <div className="search__inner">
                    <label htmlFor="searchInput"></label>
                    <input
                        type="search"
                        id='searchInput'
                        placeholder='검색어를 입력해주세요!'
                        autoComplete='off'
                        className='search__input'
                        // onChange={e => setSearchKeyword(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                </div>
            </div>
            <div>
                <ul class="keyword">
                    <li class=""><a href="/search/webstoryboy">webstoryboy</a></li>
                    <li class=""><a href="/search/html">HTML</a></li>
                    <li class="active"><a href="/search/css">CSS</a></li>
                    <li class=""><a href="/search/javascript">JavaScript</a></li>
                    <li class=""><a href="/search/react.js">React.js</a></li>
                    <li class=""><a href="/search/vue.js">Vue.js</a></li>
                    <li class=""><a href="/search/next.js">Next.js</a></li>
                    <li class=""><a href="/search/node.js">Node.js</a></li>
                    <li class=""><a href="/search/sql">SQL</a></li>
                    <li class=""><a href="/search/React Portfolio">portfolio</a></li>
                    <li class=""><a href="/search/NewJeans">music</a></li>
                </ul>
            </div>
        </div   >
    )
}

export default Search