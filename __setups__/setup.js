import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  return {
    UIManager: {
      RCTView: () => ({
        directEventTypes: {},
        ScaleToFill: {},
      }),
    },
    KeyboardObserver: {},
    RNGestureHandlerModule: {
      attachGestureHandler: jest.fn(),
      createGestureHandler: jest.fn(),
      dropGestureHandler: jest.fn(),
      updateGestureHandler: jest.fn(),
      State: {},
      Directions: {},
    },
    PlatformConstants: {
      forceTouchAvailable: false,
    },
  };
});
jest.mock('react-native/Libraries/Components/Keyboard/Keyboard', () => {});
