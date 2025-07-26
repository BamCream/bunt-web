import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {path} from 'src/constants/path/path';
import PageTemplate from "src/components/common/pageSection";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 나중에 상수형으로 수정 */}
                <Route path="/" element={
                        <PageTemplate/>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;