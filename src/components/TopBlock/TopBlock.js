import React from "react";
import SomeComponent from "./SomeStuff/SomeComponent";

class TopBlock extends React.Component {
render() {

    return (
       <div>Просто текст для проверки. Лежит в TopBlock
           <SomeComponent />
       </div>
    )

    ;
}
}

export default TopBlock