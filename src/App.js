import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
// import도 이동 
// 모든 state와 handler 를 context로 이동 
// props도 지우기
import { BrowserRouter , Routes,  Route  } from 'react-router-dom';
import './App.css'
// https://reactrouter.com/docs/en/v6/hooks/use-navigate
// https://curryyou.tistory.com/476
// https://velog.io/@sham/react-router-dom-v6%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0
import { DataProvider } from './context/DataContext'
// export는 DataContext이지만 그 내부의 DataProvider 사용 

const App = () => {
  
  return (
    <BrowserRouter>
        <div className="App">
          <Header title="점포개설 정보" />
            <DataProvider>
              <Nav  />
              <Routes >
                <Route path="/"  element={<Home  />} />
                <Route path="/post/:id" element={ 
                    <PostPage /> 
                } />
                {/* http://localhost:3000/post/1 */}
                {/* http://localhost:3000/post/없는번호확인 */}

                <Route path="/post" element={ 
                    <NewPost  /> 
                }  />

                <Route path="/about" element={ <About /> } />
                {/* http://localhost:3000/about */}
                <Route path="/*" element={ <Missing /> } />
                {/* http://localhost:3000/아무거나 */}
              </Routes>
            </DataProvider>
          <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App