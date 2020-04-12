import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class BottomChild extends React.Component {
    SomeFunction = (param) => {
        console.log('Это реально работает!!! ===>'+ param)
    };

    render() {
        return (
            <div>
                А это дочка BottomBlock(BottomChild)Именно тут будет лежать скрипт (изначально)
            </div>
        );

    }
};

const mapStateToProps = (state) => {
    return {
        color: state
    }
};


export default connect(mapStateToProps, actions)(BottomChild);