import React from "react";
import BottomChild from "./BottomChild/BottomChild";

class BottomBlock extends React.Component{
    render() {
        return (
            <div>
                А это нижний блок. Чуть ниже будет еще один дочерний компонент.
                <BottomChild />
            </div>
        );
    }
}

export default BottomBlock;