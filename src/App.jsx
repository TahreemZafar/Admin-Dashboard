import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Dashboard from "./Pages/dashboard/Dashboard";
import Calendar from "./Pages/calendar/Calendar";
import Board from "./Pages/board/Board";
import DataGrid from "./Pages/dataGrid/DataGrid";


const App = () => {
  return <div id="dashboard">
     
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="calendar" element={<Calendar />} />
           <Route path="board" element={<Board />} />
           <Route path="users" element={<DataGrid />} />

         </Route>
       </Routes>
     </BrowserRouter>
  </div>;
};

export default App;
