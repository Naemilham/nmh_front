import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import CreatorDetailPage from "./routes/CreatorDetailPage";
import CreatorListPage from "./routes/CreatorListPage";
import CreatorManagePage from "./routes/CreatorManagePage";
import InfoEditPage from "./routes/InfoEditPage";
import MailCreatePage from "./routes/MailCreatePage";
import SignUpPage from "./routes/SignUpPage";
import SignInPage from "./routes/SignInPage";
import SubScribeManagePage from "./routes/SubscribeManagePage";
import ApiTest from "./routes/ApiTest";
import WriterListPage from "./routes/WriterListPage";
import SubscribeListPage from "./routes/SubscribeListPage";
import MobilePage from "./routes/MobilePage";

function App() {
  return (
    <div className="app">
      <MobileView>
        <MobilePage />
      </MobileView>
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/creatordetail" element={<CreatorDetailPage />} />
            <Route path="/creatorlist" element={<CreatorListPage />} />
            <Route path="/creatormanage" element={<CreatorManagePage />} />
            <Route path="/infoedit" element={<InfoEditPage />} />
            <Route path="/mailcreate" element={<MailCreatePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/submanage" element={<SubScribeManagePage />} />
            <Route path="/apitest" element={<ApiTest />} />
            <Route path="/writerlist" element={<WriterListPage />} />
            <Route path="/subscribelist" element={<SubscribeListPage />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
    </div>
  );
}

export default App;
