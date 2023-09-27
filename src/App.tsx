import {NativeRouter, Route, Routes} from 'react-router-native';
import MenuScreen from './screens/MenuScreen';
import NotesScreen from './screens/NotesScreen';
import MessScreen from './screens/MessScreen';
import GalleryScreen from './screens/GalleryScreen';



export default function App() {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<MenuScreen/>}/>
                <Route path="/notes" element={<NotesScreen/>}/>
                <Route path="/mess" element={<MessScreen/>}/>
                <Route path="/gallery" element={<GalleryScreen/>}/>\
            </Routes>
        </NativeRouter>
    );
}
