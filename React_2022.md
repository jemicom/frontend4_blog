# react 설치

https://ko.reactjs.org/docs/create-a-new-react-app.html
https://create-react-app.dev/docs/getting-started/

npx create-react-app my-app
cd my-app
npm start


# react 버전 확인
```
create-react-app -V
4.0.3
```
```
create-react-app --version
4.0.3
```

# extention 설치
es7 react  snippet 설치
rafc : 화살표 함수 컴포넌트 생성, 
rafce : 화살표 함수 컴포넌트 생성, export 별도로 
rfc : funtion 컴포넌트 생성, export 별도로
rfce : funtion 컴포넌트 생성 
rcc : 클래스형 컴포넌트 생성

settings > emmet >  includes language : {key : javascript, value : javascriptreact}
 
# [React Developer Tools 설치하기]
크롬 앱스토어를 이용하여 React Developer Tools 설치한 후 
F12 > component 속성이 생기고 이것으로 react 구조를 확인할 수 있음 

# [Reactjs code snippets 설치하기]
리엑트에서 자주 사용되는 코드를 자동 생성해주는 플러그인 
설치후 리로드 
https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets
로 연결되면 명령어 단축 코드를 나열하고 있음 
RCC : 기본 리액트 컴포넌트 코드를 생성
RCCP : 프로퍼티 타입과 함께 리액트 컴포넌트 코드를 생성
RCFC : 생명주기와 함께 리액트 컴포넌트 코드를 생성
rpc : 리액트 퓨어 컴포넌트를 생성
rsc : 함수형 컴포넌트를 생성
rscp : 프로퍼티 타입과 함께 함수형 컴포넌트를 생성

#[Prettier 설치하기]
자동으로 Prettier 설정 적용하기 
Preferences > Settings > formatOnSave 체크


# 로고등 변경해 보기 => 노드몬이 없어도 자동 갱신 

> service@0.1.0 start D:\service
> react-scripts start

서버 종료 > 터미널창에서 ctrl + c
일괄 작업을 끝내시겠습니까 (Y/N)? y


# jsx
JavaScript + Xml => 바벨을 이용하여 웹문서로 변환하는 과정이 필요
선언형 화면구성
클래스 컴포넌트 : 대부분의 컴포넌트를 모두 갖고 있음 
함수형 컴포넌트 : 출력함수 부분만 간략히 구성한 컴포넌트지만 
           최근엔 함수 컴포넌트로 구현하는 것이 추세이지만
           클래스 컴포넌트 이해 없이 사용할 수 없음
           최근엔 hook이라는 도구를 사용하여 클래스 컴포넌트를 대치하고 있음 

# 프로젝트 구성 살펴보기
1. public 디렉토리 
index.html 이 있는 곳으로 현재 실행되고 있는 화면임
<div id='root'></div>
구조 안에 내용을 넣게 되어 있음 
디버그 창으로 확인하면 리액트가 만들어준 node로 구성되어 있음 
그중에 최상위 구조로 
<div class='App'> ...</div>으로 되어 있고 
이 App 클래스는 src 디렉토리에 있음 

2. src :대부분 제작되는 모든 파일은 src 안에 넣어야 함 
폴더 구조는 src>day01>component.js
폴더 구조는 src>day01>script.js

src폴더 중 진입파일은 index.js 파일로 
내용을 살펴 보면 
ReactDOM.render(<App />, document.getElementById('root'))

document.getElementById('root')은 index.html의  <div id='root'></div>을 말하고
<App />은 
import App from './App';
로드된 컴포넌트 App을 말함, 즉 실제 src의 App.js를 말하는 것임

App.js가 실제 구현될 내용이며 
함수방식으로 되어 있는 것을 클래스 방식으로 수정하여 사용해야 함 
```
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```


# 웹팩이 하는 일  : import 빌드 처리

리액트에서 js 또는 jsx 파일의 확장자를 생략해도 해당 파일를 자동으로 찾을 수 있게 설정 되어 있다. 
이것은 웹팩의 코드의 확장자를 검색하는 기능 덕분임 
1. 먼저 확장자가 있는 파일을 먼저 import 하고
2. 확장자가 없는 경우 웹팩의 확장자 옵션 목록을 보고 해당 확장자를 포함한 파일이 있는 지 확인 후 import 한다. 
예) import 'MyFile' ; 인경우 
    MyFile.js > MyFile.jsx 순으로 import
3. 만약 없으면 같은 이름의 폴더가 있다면 그안에 있는 index 파일을 검색함
예) import 'MyFile' ; 인경우
    MyFile.js > MyFile.jsx > index.js > index.jsx 순으로 import

# 간단한 자바스트립트 테스트
앱 시작
node ./src/02/02-2.js
앱 컴포넌트는 
npm start로 app.js 실행

# [ 기본 문자 출력]
```
function App() {
  return (
    <div className="App">
      Hello React!!
    </div>
  );
}

export default App;
```

# [  기본태그 출력]
```
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1> 태그 출력 </h1>
      <p> html이라고 쓰고 jsx라고 읽는다. </p>
    </div>
  );
}

export default App;
```

# [ html 적용하기 ]
```
import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1>HTML 적용하기</h1>
      <p> <i>React</i>로 파라그래프만들기 </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>JQUERY</li>
      </ul>
    </div>
  );
}
```

# 데이터 출력 
```
function App() {
  const name = 'jemicom';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          나의 첫번째 리엑트 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> react </p>
        <p>{' react '}</p>
        <p>{ 2022 }</p>
        <p>{ [2,0,2,2] }</p>
        <p>[2,0,2,2]</p>
        <p>{ [2,0,2,2] }</p>
        {/* <p>{ {a:1,b:2}}   // error</p> */}
        <p>{ true === false } </p>
        <p>{ 10 == 4  } // 값이 보이진 않고 </p>
        <p>{ name } 함수변수값 출력  </p>
      </header>
      {/* <p> react </p> */}
    </div>
  );
}
```

# [3. css 디자인 ]
```
import React from 'react';

function App() {
  return (
    <div className="App">
      // <h1 style={{ 디자인코드 }}></h1>
      <h1 style={{
        color:"purple",
        backgroundColor:'lavender'
        // - 표현 안되고 카멜케이스로 사용해야함 
        // 특별한 경우가 아니면 인라인 표기법은 사용하지 않음 
      }}
      > css 적용 </h1>
    </div>
  );
}

export default App;
```

# [변수와 데이터 출력]
```
function App(){
  const name = 'kim'; // 변수 만들어서 
  return(
    <div className="App">
      <h1 style={{
        color:"purple",
        backgroundColor:'lavender'
        // - 표현 안되고 카멜케이스로 사용해야함 
        // 특별한 경우가 아니면 인라인 표기법은 사용하지 않음 
      }}
      > 
      Hello, React {name}, <p>{ 2 + 3}</p> 
      // 출력할 수 있고      // 연산도 가능하나  불리언이나 객체는 출력 불가능
      </h1>
    </div>
  )
}
```

# [변수 출력을 이용한 링크]
```
function App(){
  const name = 'kim';
  const naver = { 
      name:"naver",
      url:'https://www.naver.com/'
  }
  return(
    <div className="App">
      <h1 style={{
        color:"purple",
        backgroundColor:'lavender'
      }}
      > 
      Hello, React {name}, <p>{ 2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
      // href의  따옴표 없는 것 주의
      // 화면 띄운 후 링크를 검사(F12)하여 element 창에서 
      // <a href="https://www.naver.com/">naver</a> 로 생성되는 것 확인
    </div>
  )
}
export default App;
```

# Math.random 을 이용한 랜덤 출력 
```
const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      return (
        <div className="App" >
          <header className="App-header">
            <p>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}
```

# 여러번 출력해도 각각 다른 값을 사용 
```
const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      return (
        <div className="App">
          <header className="App-header">
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}
```

# 디자인 적용하여 화면 가운데 배치 
```
const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      return (
        <div className="App" style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <header className="App-header"  style={{
            width:'200px',
            height: '150px'
          }}>
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}
``` 

# 디자인 변수로 추출
```
const appStyle = {
    width:'100%',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
const headerStyle = {
    width:'200px',
    height: '150px'
}

const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      return (
        <div className="App" style={appStyle}>
          <header className="App-header"  style={headerStyle}>
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
            <p>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}
```
# p 태그 디자인 변수로 출력 하기 
```
const colorHandle = () =>{
    const color = Math.floor(Math.random()*360);
    console.log(color)
    return color; 
} 

const pStyle = {
    background: `hsl( ${colorHandle()}, 50%, 50%)`
    // 난수를 발생했음에도 불구하고 같은 색 출력 
}

const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
      return (
        <div className="App" style={appStyle}>
          <header className="App-header"  style={headerStyle}>
            <p style={pStyle}>
               Hello { handleNameChange() }!!
            </p>
            <p style={pStyle}>
               Hello { handleNameChange() }!!
            </p>
            <p style={pStyle}>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}

export default App
```

# p 태그 각각의 다른 색상 출력해 보기 
```
import React from 'react'

const App = () => {
    const name = 'kim';
    const handleNameChange =()=>{
        const names = ['kim', 'lee', 'park'];
        const int = Math.floor(Math.random()*3);
        return names[int];
    }
    const colorHandle = () =>{
        const color = Math.floor(Math.random()*360);
        console.log(color)
        return color; 
    } 
      return (
        <div className="App" style={appStyle}>
          <header className="App-header"  style={headerStyle}>
            <p style={{
                background: `hsl( ${colorHandle()}, 50%, 50%)`
            }}>
               Hello { handleNameChange() }!!
            </p>
            <p style={{
                background: `hsl( ${colorHandle()}, 50%, 50%)`
            }}>
               Hello { handleNameChange() }!!
            </p>
            <p style={{
                background: `hsl( ${colorHandle()}, 50%, 50%)`
            }}>
               Hello { handleNameChange() }!!
            </p>
          </header>
        </div>
      );
}

export default App
```

# [ 이벤트 사용하기 ]
# [ 1. 버튼에 매개변수 없는 함수 이벤트 연결하기 ]
```
import React from 'react';

function App() {
  function showName() {
    console.log('kim');
  }
  return(
    <div className="App">
        <h1>이벤트 핸들러</h1>
        <button onClick={showName}>Show Name</button>
        {/*// 매개변수가 없는 경우 ()를 사용하지 않는다. */}


        <button onClick={()=>{console.log( 30 )}}>Show Age</button>
    </div>
  )
}

export default App;
```
# 화면에 출력하기 위한 작업 
```
const App = () => {
  function showName() {
    console.log('kim');
    document.querySelector('.print').innerHTML = 'KIM'
  }
  return(
    <div className="App">
        <h1>이벤트 핸들러</h1>
        <div class='print'></div>
        <button onClick={showName}>Show Name</button>
        {/*// 매개변수가 없는 경우 ()를 사용하지 않는다. */}


        <button onClick={()=>{console.log( 30 );document.querySelector('.print').innerHTML = 305}}>Show Age</button>
    </div>
  )
}

export default App
```


# [9-2. 버튼에 매개변수 있는 함수 이벤트 연결하기 ]
```
import React from 'react';

function App() {
  function showName( name ) {
    console.log( name);
  }
  
  function showAge( age ) {
    console.log( age);
  }

  return(
    <div className="App">
        <h1>이벤트 핸들러</h1>
        
        <button onClick={()=>{  showName('kim')   }}>Show Name</button>
      
        <button onClick={()=>{  showAge(30)     }}>Show Age</button>
    </div>
  )
}

export default App;
```

# [9-3. 키이벤트 사용하여 텍스트 쓰기]
```
import React from 'react';

function App() {
  const onSubmit = ()=>{
    alert('submit call')
  }
  
  const onKeyUp = ()=>{
    alert('key up')
  }
  const onKeyUpEnter = (e)=>{
    if(e.keyCode === 13){
        // enter 키코드값 13
        alert('enter key up')
    }
  }

  return (
    <div className="App">
         <button onClick={()=> alert('Hello')}> submit </button>
         <button onClick={onSubmit}> onSubmit call </button>
         <input onKeyUp={ onKeyUp } />
         <input onKeyUp={ onKeyUpEnter } />
    </div>
    );
}

export default App;
```
 
# [9-4. 키이벤트 사용하여 텍스트 쓰기]
```
import React, { Component } from 'react';
const App = () => {
  function showText(e) {
    console.log(e.target.value);
  }

  return(
    <div className="App">
        <h1>이벤트 핸들러</h1>
        <input type="text" onChange={showText} />
        // 함수 정의 없이 다음과 같이 바꿀수 있다.
        <input type="text" onChange={e=>{ 
            console.log(e.target.value )
          }} 
        />
    </div>
  )
}
export default App;
```

# example 
## Content 컴포넌트에 이벤트 넣기
```
import React from 'react';

export default function Content() {
    
    const handleNameChange =()=>{
      const names = ['kim', 'lee', 'park'];
      const int = Math.floor(Math.random()*3);
      return names[int];
    }
    
    let num = 0;
    const handleClick = ()=>{
        console.log( 'clicked ' + ++num);
        //console.log( 'clicked ' + ++num + handleNameChange());
    }

    const handleClickName = (name)=>{
        console.log( 'clicked ' + name);
    }

    const handleClickName2 = (e)=>{
        console.log( e.target.innerText );
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
               Hello { handleNameChange() } !!
            </p>
            <button onClick={handleClick}> Click </button>
            <button onClick={()=> handleClickName('kim')}> Click </button>
            <button onClick={(e)=> handleClickName2(e)}> Click </button>
        </main>
    );
  }
```
