import Customer from "../component/Customer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import Table from "react-bootstrap/Table";

function Board_Page() {
  // axiox의 값을 받아오는 메서드-----------------------------------------
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.0.23:8080/api/dish/get").then((response) => {
      setBoards(response.data);
    });
  }, []);
  console.log({ boards });
  //------------------------------------------------------------------------

  return (
    <div className="rmfwkrtjd">
      <h2>게시판 관리</h2>
      <Table striped bordered hover className="Table">
        <thead>
          <tr>
            <th>번호</th>
            <th>사진</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일</th>
            <th>수 정 / 삭 제 </th>
          </tr>
        </thead>
        <tbody>
          <Customer boards={boards} />
        </tbody>
      </Table>
    </div>
  );
}
export default Board_Page;
