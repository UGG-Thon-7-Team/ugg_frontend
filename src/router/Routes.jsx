import { Routes as ReactRouters, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import SearchPage from '@pages/SearchPage';
import LibraryPage from '@pages/LibraryPage';
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
        <Route path="library" element={<LibraryPage />} />
        <Route path="celebdetail" element={<CelebDetailPage />} />
        <Route path="bookdetail" element={<BookDetailPage />} />
        <Route path="buybook" element={<BuyPage1 />} />
        <Route path="buybook2" element={<BuyPage2 />} />
        <Route path="buybook3" element={<BuyPage3 />} />
      </Route>
    </ReactRouters>
  );
}
