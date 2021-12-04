import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Typography} from "@mui/material"; 
import {Box} from "@mui/system"; 
import FirstPage from "./pages/FirstPage"; 
function App() {
  return (
    <div> 
      <Router>
        <Box sx={{textAlign: 'center'}}>  
          <Typography> 
            <Routes>
              <Route exact path="/" element={<FirstPage />} /> 
            </Routes>
          </Typography>
        </Box>
      </Router>
    </div>
  );
}

export default App;
