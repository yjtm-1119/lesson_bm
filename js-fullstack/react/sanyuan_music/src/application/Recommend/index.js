import React, { useEffect,useState,memo } from 'react';
import { connect } from 'react-redux';

function Recommend(props) {
  return (
    <>
      Recommend
    </>
  )
}
const mapStateToProps = (state) => ({
  recommendList: state.Recommend.recommendList
})
const mapDispatchToProps = (dispatch) => {
  const { recommendList } = props
  console.log(recommendList);
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)({meomo(Recommend)})