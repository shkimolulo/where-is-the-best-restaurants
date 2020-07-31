import React, {ReactElement} from 'react';
import {View} from 'react-native';
import MainComponent from './MainComponent';

// 함수가 들어가야 되는데 인자는 없고 리턴은 컴포넌트로 
// 타입스크립트는 자바스크립트로 나중에 빌드가 되는데 한 번 체크가 되는 것
const App: () => ReactElement = () => {
  return <MainComponent />;
};


export default App;
