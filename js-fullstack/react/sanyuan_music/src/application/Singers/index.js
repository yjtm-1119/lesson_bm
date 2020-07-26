import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavContainer } from './style'
import { categoryTypes, alphaTypes } from '../../api/config';
export const index = () => {
  cosnt handleUpdateAlpha = () => {

  }
  cosnt handleUpdateCategory = () => {

  }
  return (
    <div>
      <NavContainer>
        <Horizen title="分类 (默认热门):" list={categoryTypes} handleClick={
          (v) = handleUpdateCategory(v)} />
        <Horizen title="首字母:" list={alphaTypes} handleClick={
          (v) = handleUpdateAlpha(v)} />
      </NavContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
