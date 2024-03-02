import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ComingSoonPage from './Component/ComingSoon/ComingSoonPage'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/comingsoonpage' element={<ComingSoonPage />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
