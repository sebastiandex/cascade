import React from "react";
import  './someComponent.css'
class SomeComponent extends React.Component{
    render() {
        return (
            <div className="blueBg">Тут лежит кнопка по которой выплняется функция из другого компонента
                <button onClick={()=> this.SomeFunction('отруки')}>Жмяк</button>
                <br></br>
                Лежит это всё в SomeComponent
            </div>
        );
    }
}
export default SomeComponent;