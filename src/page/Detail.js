import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Detail() {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [댓글, set댓글] = useState([]);
  let [레시피, set레시피] = useState('');
  let [영상, set영상] = useState('');
  let [tab, setTab] = useState(0);
  let [like, setLike] = useState(false);



  // 주소 파라미터
  let {id} = useParams();
  let testdata = test.find((data) => {
    return data.id = id
  })
  // let data1 = result1.find((sue)=>{
  //   return sue.id == id
  // })
  // let data2 = result2.find((jin)=>{
  //   return jin.id == id
  // })
   console.log(testdata)
  // console.log(data2)

  return (
    <>
    <Button className='back' variant="light" onClick={()=>{navigate(-1)}}>{'<<'} 목록보기</Button>
      <div className="container">
          <div className='all'>
            <h1 className='nameD'>{testdata.title}</h1>
              {/* <div className='detailR'>작성자: {data1.userId}</div> */}
              {/* <div className='detailR'>작성일: {data1.date}</div> */}
            <div className='middle'>
              {/* <img src={data2.url} width="100%" /><br/> */}
            <div className='small'>

              <span onClick={(e)=>{
                e.stopPropagation()
                setLike(!like)
                console.log(like)
              }}>
                  {
                    like === true ? '❤️' : '🤍'
                  }
                  {/* {
                    like === true ?
                    infodata.dish_like +1
                    : infodata.dish_like
                  } */}
                </span>
              <span className='small'> 😋{/*infodata.ate*/}</span>
            </div><br/>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link eventKey="link0" onClick={()=>{
                setTab(0)
                }}>레시피</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={()=>{
                  setTab(1)
                }}>댓글</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={()=>{
                  setTab(2)
                }}>영상보기</Nav.Link>
              </Nav.Item>
            </Nav>
          <TabCom 댓글={댓글} 레시피={레시피} 영상={영상} tab={tab}/>
          </div>
      </div>
      </>
  );
}

function TabCom(props){
  return(
    [<div>{props.레시피}</div>, <div>{props.댓글}</div>, <div>{props.영상}</div>][props.tab]
    );
}
export default Detail;