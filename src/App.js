import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FullPaageLoader from './Components/FullPageLoader';
import Home from "./App_main";
import jod_1 from "./Components/Content1/jod/jod_1"
import jod_2 from "./Components/Content1/jod/jod_2"
import video from "./Components/Content1/video/jod1_ video"

const App = () => {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 0)
    }, []);
    return (
        loading ? <FullPaageLoader /> : [
            <Router>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/jod_1" component={jod_1} />
                    <Route exact path="/jod_2" component={jod_2} />
                    <Route exact path="/video" component={video}/>
                </Switch>
            </Router>
        ]

    );
}

export default App;