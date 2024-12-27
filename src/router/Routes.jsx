import { Routes as ReactRouters, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import SearchPage from '@pages/SearchPage';
import LibraryPage from '@pages/LibraryPage';
import CertificationPage from '@pages/CertificationPage';
import MainLayout from '@layouts/MainLayout';
import CelebDetailPage from '../pages/CelebDetailPage';
import BookDetailPage from '../pages/BookDetailPage'
import BuyPage1 from '../pages/BuyPage1'
import BuyPage2 from '../pages/BuyPage2';
import BuyPage3 from '../pages/BuyPage3';

export default function Routes() {
  return (
    <ReactRouters>
      {/* 레이아웃 공통 적용 */}
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        {/* 내 서재 */}
        <Route path="library" element={<LibraryPage />} />

        <Route path="library/certification" element={<CertificationPage />} />

        <Route path="celebdetail/:id" element={<CelebDetailPage />} />
        <Route path="bookdetail/:id" element={<BookDetailPage />} />
        <Route path="buybook/:id" element={<BuyPage1 />} />
        <Route path="buybook2/:id" element={<BuyPage2 />} />
        <Route path="buybook3/:id" element={<BuyPage3 />} />

      </Route>
    </ReactRouters>
  );
}
