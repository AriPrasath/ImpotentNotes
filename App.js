import React from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainApp from './screens/mainApp/MainApp';

const App = () => {

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
