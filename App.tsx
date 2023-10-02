import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Container from './src/container/Container';
import {persistStore} from 'redux-persist';
import store from './src/redux/store/store';
const persistor = persistStore(store);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="transparent"
            barStyle={'light-content'}
            showHideTransition={'fade'}
            translucent={true}
          />
          <Container />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
