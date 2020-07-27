import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavContainer } from './style'
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index';
export const index = (props) => {
  const { category, alpha } = props;
  const handleUpdateAlpha = () => {

  }
  const handleUpdateCategory = () => {

  }
  return (
    <div>
      <NavContainer>
        <Horizen title="分类 (默认热门):" list={categoryTypes} handleClick={
          (v) => handleUpdateCategory(v)} oldValue={category} />
        <Horizen title="首字母:" list={alphaTypes} handleClick={
          (v) => handleUpdateAlpha(v)} oldValue={alpha} />
      </NavContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  category: state.singers.category,
  alpha: state.singers.alpha,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
