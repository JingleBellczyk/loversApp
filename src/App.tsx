import {NativeRouter, Route, Routes} from 'react-router-native';
import MenuScreen from './screens/MenuScreen';
import NotesScreen from './screens/NotesScreen';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<MenuScreen />} />
        <Route path="/notes" element={<NotesScreen />} />
      </Routes>
    </NativeRouter>
  );
}
