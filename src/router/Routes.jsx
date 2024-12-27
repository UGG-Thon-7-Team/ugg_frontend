import { Routes as ReactRouters, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import SearchPage from '@pages/SearchPage';
import LibraryPage from '@pages/LibraryPage';
import MainLayout from '@layouts/MainLayout';

export default function Routes() {
  return (
    <ReactRouters>
      {/* 레이아웃 공통 적용 */}
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="library" element={<LibraryPage />} />
      </Route>
    </ReactRouters>
  );
}
