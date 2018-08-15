import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { compose, branch, renderComponent, withProps } from 'recompose';
import { BarCodeScanner, Constants } from 'expo';
import { material } from 'react-native-typography';
import ScanWraper from './scanWraper';


const { height, width } = Dimensions.get('window');
const PermisstionNotGranted = () => (
  <View>
    <Text>Camera Permission Not Granted</Text>
  </View>
);

const PermisstionGranted = (props) => (
  <View style={styles.container}>
    <BarCodeScanner
      onBarCodeRead={props.onBarCodeRead}
      style={{ height, width }}
    >
      <View style={styles.messageStyle}>
        <Text style={[material.body, { color: '#2D86EA', fontWeight: 'bold', fontSize: 17 }]}>{props.message}</Text>
      </View>
      <View
        style={styles.outerBoxStyle}
      >
        <View
          style={styles.boxStyle}
        />
      </View>
    </BarCodeScanner>
  </View>
);

const CameraScan = ScanWraper(PermisstionGranted);

const renderScan = compose(
  branch(
    ({ cameraPermission }) => cameraPermission,
    renderComponent(() => <CameraScan />),
    renderComponent(() => <PermisstionNotGranted />),
  )
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  outerBoxStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxStyle: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  messageStyle: {
    marginTop:50,
     flexDirection: 'row',
     backgroundColor:'transparent',
     justifyContent:'center',
  }
});

export default renderScan(<View />);
