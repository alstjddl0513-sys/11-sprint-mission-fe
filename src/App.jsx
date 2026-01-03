import Nav from './components/Nav';
import BestProductList from './components/BestProductList';
import SaleProductList from './components/SaleProductList';
import SearchBar from './components/SearchBar';
import RegisterButton from './components/RegisterButton';
import SortDropdown from './components/SortDropdown';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <BestProductList />
        <section>
          <div>
            <SearchBar />
            <RegisterButton />
            <SortDropdown />
          </div>
          <SaleProductList />
          <Pagination />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
