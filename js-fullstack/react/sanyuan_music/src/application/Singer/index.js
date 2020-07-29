import React, { memo, useRef, useState, useEffect, useCallback  } from "react";
import { connect } from "react-redux";
import Header from "../../baseUI/header/index";
import { CSSTransition } from "react-transition-group";
import { Container } from "./style";
import { getSingerInfo } from "./store/actionCreators";

function Singer(props) {
  const { artist } = props;
  const { getSingerDataDispatch } = props;
  const header = useRef();
  const [showStatus, setShowStatus] = useState(true);
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, [])

  useEffect(() => {
    const id = props.match.params.id;
    getSingerDataDispatch(id);
  }, []);

  return (
    <CSSTransition
    in={showStatus}
    timeout={300}
    classNames="fly"
    appear={true}
    unmountOnExit
    onExited={() => props.history.goBack()}
    >
      <Container>
        <Header
          handleClick={setShowStatusFalse}
          title={artist.name}
          ref={header}
        ></Header>
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = state => ({
  artist: state.singerInfo.artist,
})
const mapDispatchToProps = dispatch => {
  return {
    getSingerDataDispatch(id) {
      dispatch(getSingerInfo(id));
    } 
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Singer));