import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  let { inputValue, inputChange, clickButton, list } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// constructor(props) {
//   super(props);
//   this.state = store.getState();
// }
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      // console.log(e.target.value);
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton() {
      // console.log(111)
      let action = {
        type: 'add_item',
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);