import React from "react";
import {connect} from "react-redux";

const App = () => (
    <div>
        Hello app
    </div>
)

const mapStoreToProps = store => {
    return {

    };
};

export default connect(mapStoreToProps)(App);