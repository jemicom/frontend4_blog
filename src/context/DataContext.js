import { createContext, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

// useState, props + component , context
const DataContext = createContext({});
// DataContext를 생성하고 

// 데이터 처리를 위해 새로운 Provider 생성 
// DataContext와 DataProvider 모두 export 해야함 
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "가맹점을 하고 싶은데 어떻게 하면 되나요?",
      body: "점포가 있거나 점포계약을 체결할 예정인 경우는 점포위치와 연락처를 남겨주시면 현장에서 담당자가 철저한 상권분석과 시장조사를 통해서 점포브리핑을 해드리고 최종적인 입점여부를 판단하여 알려드리고 현장에서 상세하게 상담도 가능합니다.\n점포가 없는 경우는 담당자와 전화통화를 통하여 기본적인 상담을 하시고 본사에 내방하여 자세한 상담을 받으시기를 권장합니다. \n내방이 어려운 분은 연락처를 남겨주시면 현장에서 담당자와 상담이 가능하도록 하겠습니다.",
      datetime:"2021-12-30"
    },
    {
      id: 2,
      title: "점포조건은 어떻게 되나요?",
      body: "용우동은 주방면적이 14.8m2(14.8 제곱미터)정도 면적이 있어야만 신속하고 효율적으로 주방에서움직일수 있기 때문에 주방 및 홀 전체 면적이 실평수 33m2(33 제곱미터) 이상이어야 가능합니다.\n 그리고 일반건물은 1층에서만 입점이 가능하고 할인점 및 백화점 그리고 대형쇼핑몰은 층수에 제한을 두지는 않습니다.\n 또한 상주인구3000명 이상의 대형 오피스빌딩도 지하식당가에 개설이 가능하나 이경우는 면적이 39.6m2(39.6 제곱미터) 이어야 합니다.\n 활성화된 복합상가의 푸드코트도 좋은 효과가 있는 입점지입니다.\n 단,이 모두가 기존 용우동과 상권이 겹치는 경우는 기존점 보호를 위해서 입점이 불가합니다. \n 현장실사를 통해 정확한 상권분석을 하고 예비점주의 올바른 판단이 가능하도록 도움을 드리고 있습니다.\n",
      datetime:"2021-12-30"
    },
    {
      id: 3,
      title: "본사에서 점포도 구해주시나요?",
      body: "원칙적으로는 본사에서 점포를 구해주지는 않습니다.다만 투자금액이나 희망지역을 고려해서 입점가능한 상권을 추천해드리고 있습니다.\n 추천상권에서 매물점포 조사를 하시고 본사에 의뢰하면 점포의 상권분석을 철저하게 진행해드리고 있습니다.\n 물론 상권분석비용은 본사에서 부담합니다. 필요한 경우는 본사에서 시장조사를 마친 적절한 점포를 추천해드리기도 합니다.",
      datetime:"2021-12-30"
    },
    {
      id: 4,
      title: "입점 점포 평가의 기준은 어떻게 되나요?",
      body: `용우동 입점 점포의 가장 큰 기준은 물론 매출입니다.
      상권 내에서 동종업종 최고의 매출이 가능한 입지어야 하고 향후 매출이 꾸준히 증가할 수 있는 발전하고 있는 상권과 입지여야 합니다.
      최저매출기준으로 일 평균 60만원이상의 매출이 발생할 것으로 기대가 되어야 하고 적절한 유동인구와 배후 주거지 및 상주인구를 확보하고 있어야 매출이 안정적으로 발생할 수 있습니다.
      또 하나의 중요한 기준은 각 매장의 손익분기점을 고려하여 안정적인 수익이 확보되는 곳이어야 합니다.
      투자대비 월 수익율과 매출대비 순이익율이 본사기준에 적합해야 하며 임대가 및 권리금이 주변시세와 비교해서 적절한지도 판단기준이 됩니다.
      영업종료후의 환금성(투자비용을 권리금으로 회수할 수 있는지)과 건물의 하자여부, 향후 재건축 및 안정적인 영업보장기간도 꼭 체크항목입니다.`,
      datetime:"2021-12-30"
    }
  ]);
  const [search, setSearch] = useState('');
  const [ searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  //현재는 오류 아마도 index.js router를 설정하면 될 것 같음 

  const [ delBtn, setDelBtn ] = useState(false);

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // NewPost 페이지 필요 내용
  useEffect(() => {
     const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults );
  }, [posts, search])


  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [ newPost, ...posts]; 
    // 최신 내용을 맨위로 오도록 저장
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');

    //window.location.href = 'http://localhost:3000/'
}

const handleDelete = (id)=>{
    // 자세히 보기 메뉴로 변경 
    setDelBtn(true);
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
   // navigate('/');
   // window.location.href = 'http://localhost:3000/'
}

  return (
    <DataContext.Provider value= {{
      search, setSearch, searchResults,  posts,  handleDelete , handleSubmit ,
      postTitle ,  setPostTitle ,  postBody,   setPostBody , delBtn
    }} >
        { children }
    </DataContext.Provider>
  )
}

export default  DataContext  ;
// 2개 클래스 export 어떻게 하드라... 



 