import { NavermapsProvider } from "react-naver-maps";
import "./App.css";

import MapPage from "./MapPage";

function App() {
  return (
    <NavermapsProvider 
    ncpClientId='Client_ID'
    submodules={['geocoder']}>
      <MapPage />
    </NavermapsProvider>
  );
}

export default App;