import { Routes as ReactRouters, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
import MyPage from '@pages/MyPage';
import MainLayout from '@layouts/MainLayout';

export default function Routes() {
  return (
    <ReactRouters>
      {/* 레이아웃 공통 적용 */}
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="mypage" element={<MyPage />} />
      </Route>
    </ReactRouters>
  );
}
