import './Home.scss';
import { CiFilter } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import HomeFilter from './filter/HomeFilter';
import { routesList } from '../../mock';

const Home = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="home">
      <div className="home-heading">
        <h1>Routes list</h1>
        <div
          className="home-heading-filter"
          onClick={() => {
            setFilterOpen((prev) => !prev);
          }}
        >
          <CiFilter />
          <span>Filter</span>
          {filterOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      {filterOpen && <HomeFilter setOpen={setFilterOpen} />}
      <div className="home-content">
        <div className="home-content-table">
          <div className="home-content-table-search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search by route ID" />
          </div>
          <div className="home-content-table-info">
            <div className="home-content-table-info-head">
              <div
                className="home-content-table-info-head-title"
                style={{ width: '30px' }}
              ></div>
              <div className="home-content-table-info-head-title">
                <p>Route ID</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>Start address</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>End address</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>Workload index</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>Usage index</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>Start date</p>
              </div>
              <div className="home-content-table-info-head-title">
                <p>End date</p>
              </div>
            </div>
            <div className="home-content-table-info-body">
              {routesList.map(
                ({
                  id,
                  start_adr,
                  end_adr,
                  workload,
                  usage,
                  start_date,
                  end_date,
                }) => {
                  return (
                    <div
                      className="home-content-table-info-body-row"
                      key={id.number}
                    >
                      <div
                        className="home-content-table-info-body-row-col "
                        style={{ width: '30px' }}
                      >
                        {id.number}
                      </div>

                      <div className="home-content-table-info-body-row-col ">
                        {id.text}
                      </div>
                      <div className="home-content-table-info-body-row-col ">
                        {start_adr}
                      </div>
                      <div className="home-content-table-info-body-row-col ">
                        {end_adr}
                      </div>
                      <div className="home-content-table-info-body-row-col">
                        {workload}
                      </div>
                      <div className="home-content-table-info-body-row-col ">
                        {usage}
                      </div>
                      <div className="home-content-table-info-body-row-col">
                        {start_date}
                      </div>
                      <div className="home-content-table-info-body-row-col ">
                        {end_date}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
