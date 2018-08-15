import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

const mapStateToProps = ({ BarCode }) => {
  return { BarCode }
};

const ScanWraper = compose(
  withState('message', 'setMessage', null),
  connect(mapStateToProps, actions),
  withHandlers({
    onBarCodeRead: props => async({ data }) => {
      // check if bar code is already in store
      let upc = _.find(props.BarCode.upc, { upc: data })
      // if it does not exist make API call to ask if anyone just recently add the bar code
      if (!upc) {
        upc = await props.fetchBarCode(data);
      }
      if (upc) {
        props.setMessage('Scan Successful');
      } else {
        props.setMessage('Bar Code does not exist in data base');
      }
    }
  })
);

export default(ScanWraper);
