import React, { Component} from 'react';
import { Button } from 'antd';

import { renderRoutes } from "react-router-config";
import './Main.less'
class LessVariables extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-main">
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        );
    }
}

export default LessVariables;
