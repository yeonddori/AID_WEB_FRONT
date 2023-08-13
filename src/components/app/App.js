import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../base/header/Header";
import Sidebar from "../base/sidebar/Sidebar";
/*Pages import*/
import Home from "../pages/home/Home";
import Study from "../pages/study/Study";
import Board from "../pages/board/Board";
import Chat from "../pages/chat/Chat";
import Fullpage from "../pages/home/Fullpage";
import Submit from "../pages/submit/Submit";

const Center = styled.div`
  display: flex; /* Flexbox를 이용해서 내부 컨텐츠를 옆으로 나란히 배치 */
`;

const App = () => {
  return (
    <Router>
      <Header />
      <Center>
        <Routes>
          <Route exact path="/" element={<Fullpage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/board" element={<Board />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Center>
    </Router>
  );
};

export default App;
