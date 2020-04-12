import React from "react";

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
}
export default BottomChild;