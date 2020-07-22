import React, { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';
function Recommend(props) {
  const { recommendList } = props
  console.log(recommendList);
  return (
    <>
      Recommend
    </>
  )
}

const mapStateToProps = (state) => ({
  recommendList: state.recommend.recommendList
})
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));