import { Fragment } from 'react';
import { CONFIG } from '../../../config';

const HomeFilter = ({ setOpen }) => {
  return (
    <div className="home-filter-field">
      {CONFIG.filterConfig.map(({ id, placeholder, type }) => {
        return (
          <Fragment key={id}>
            {type === 'select' ? (
              <select name="" id="">
                <option hidden> {placeholder}</option>
              </select>
            ) : (
              <input type="text" placeholder={placeholder} />
            )}
          </Fragment>
        );
      })}
      <button
        className="home-filter-field-cancel"
        onClick={() => {
          setOpen(false);
        }}
      >
        Cancel
      </button>
      <button className="home-filter-field-filter">Filter</button>
    </div>
  );
};

export default HomeFilter;
