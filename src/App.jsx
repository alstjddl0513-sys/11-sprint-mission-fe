import { useState } from 'react';
import Nav from './components/Nav';
import BestProductList from './components/BestProductList';
import SaleProductList from './components/SaleProductList';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
// import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');

  return (
    <div>
      <Nav />
      <main>
        <BestProductList />
        <section>
          <div className="saleListNav">
            <h2 className="saleProducts">판매 중인 상품</h2>
            <div className="saleBarMenus">
              <SearchBar onSearch={setKeyword} />
              <a href="/">상품 등록하기</a>
              <SortDropdown onSort={setOrderBy} />
            </div>
          </div>
          <SaleProductList keyword={keyword} orderBy={orderBy} />
          {/* <Pagination /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
