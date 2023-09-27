import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Student from './Student';

export default function RouterPrac1() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/student/:name" element={<Student />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
