import React, { Component } from 'react';
import { View } from 'react-native';
import { Permissions } from 'expo';
import { connect } from 'react-redux';
import RenderScan from '../components/renderScan';
import * as actions from '../actions';

class Scan extends Component {
  state = {
    cameraPermission: null
  }
  componentDidMount = async() => {
    this.requestCameraPermission();
    // fetch all bar codes in data base and save to store
    await this.props.fetchBarCodes();
  }
  requestCameraPermission = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.setState({
        cameraPermission: status
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RenderScan {...this.state} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    margin: 'auto'
  }
};
export default connect(null, actions)(Scan);
