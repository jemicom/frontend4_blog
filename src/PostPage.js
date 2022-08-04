import React from 'react'
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'
import DataContext from './context/DataContext';

// post { id, title, body, datetime } 
const PostPage = () => {
  const {posts, handleDelete, delBtn} = useContext(DataContext);
  
  const {id} = useParams();
  // <Link to={`/post/${post.id}`}> param 가져옴
  const post = posts.find(post => (post.id).toString() === id);
  // 여러개 기사중 id가 같은 기사만 가져오기 

  // http://localhost:3000/post/없는번호확인  
  return (
    <div className="PostPage">
        <article className="post">
            { post && 
                  <> 
                      <h2>{post.title}</h2>
                      <p className="postDate">{post.datetime}</p>
                      <p className="postBody">{post.body}</p>
                      <Link to={`/edit/${post.id}`}> 
                          <button  className="editButton">
                            수정 
                          </button> 
                      </Link>
                      <button  className="deleteButton" onClick={()=>{ handleDelete(post.id)}}>
                        삭제
                      </button>
                      <Link to="/"> 다른 내용 확인하기 </Link>
                  </>
            }
            {
              !post && 
              <>
                  <h2>{  delBtn ? "삭제하였습니다." : "정보를 찾을 수 없습니다." } </h2>
                  <p>
                      <Link to="/"> 내용 다시 찾으려면 클릭하세요.</Link>
                  </p>
              </>
            }
        </article>
    </div>
  )
}

export default PostPage