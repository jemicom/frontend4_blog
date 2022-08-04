import React from 'react'
import { useContext } from 'react'
// component 구조 : Home : post표시여부 > Feed : map > Post : 내용 디자인
import {Link} from 'react-router-dom'
import DataContext  from './context/DataContext'

const Home = () => {
  const  {searchResults} = useContext(DataContext);
  // props 를 전달하는 대신 context에서 props를 가져다 사용함 
  
  return (
    <main className="Home">
      { searchResults.length ? (
         searchResults.map(post=>(
          <div className="post"  key={post.id} >
              <Link to={`/post/${post.id}`}>
                  <h2>{post.title}</h2>
                  <p className="postDate">{post.datetime}</p>
              </Link>
              <p className="postBody">{
                  (post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`
              }</p>
          </div>
      )) 
      ) :  (
        <p style={{marginTop:'40px'}}> 내용을 찾을 수 없습니다. </p>
      )}
    </main>
  )
}

export default Home