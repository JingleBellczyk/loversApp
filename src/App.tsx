import {NativeRouter, Route, Routes} from 'react-router-native';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<MenuScreen />} />
      </Routes>
    </NativeRouter>
  );
}
