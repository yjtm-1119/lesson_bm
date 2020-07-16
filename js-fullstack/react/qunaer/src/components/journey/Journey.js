import React from 'react';
import PropTypes from 'prop-types';
// import './Journey.css';
import switchImg from '../../assets/imgs/switch.svg';

export default function Journey(props) {
  console.log(props)
  const { from, to,exchangeFromTo } = props;
  return (
    <div>
      <div className="journey">
        <div className="Journey-station">
          <input type="text" className="journey-input" name="from" value={from} readOnly/>
        </div>
        <div className="journey-switch" onClick={()=>{exchangeFromTo()}}>
          <img src={switchImg} alt=""/>
        </div>
        <div className="Journey-station">
          <input type="text" className="journey-input" name="to" value={to} readOnly/>
        </div>
      </div>
    </div>
  )
}


Journey.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired
}