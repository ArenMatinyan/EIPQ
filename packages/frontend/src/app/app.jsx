import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import CsvPage from '../pages/csv/CsvPage';
import HomePage from '../pages/homepage/HomePage';
import OverviewPage from '../pages/overviewpage/OverviewPage';
import { ROUTER } from '../router/router';
const { HOME_PAGE_ROUTE, OVERVIEW_PAGE_ROUTE, CSV_PAGE_ROUTE } = ROUTER;

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />}></Route>
        <Route path={OVERVIEW_PAGE_ROUTE} element={<OverviewPage />}></Route>
        <Route path={CSV_PAGE_ROUTE} element={<CsvPage />}></Route>
      </Routes>
    </Layout>
  );
}
export default App;
