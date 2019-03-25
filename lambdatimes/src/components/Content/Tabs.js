import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              tabHandler={props.tabHandler}
              tabSelected={props.tabSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.array,
  tabSelected: PropTypes.func,
  tabHandler: PropTypes.func
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
