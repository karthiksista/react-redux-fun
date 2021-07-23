import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  console.log(props);
  return (
    <>
      <h2> No of cakes -{props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}> Buy 10 IceCreams </button>
    </>
  );
}

const mapStateToProps = state => {
  console.log('WO', state);
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer);

// export default CakeContainer;
