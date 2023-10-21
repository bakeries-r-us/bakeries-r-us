import {useState} from "react";

function Level02() {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    function onChangeValue(event) {
        switch (event.target.value) {
            case 'Start':
                start();
                break;
            case 'Sell':
                sell();
                break;
            case 'Delivery':
                deliver();
                break;
            case 'Inventory':
                inventory();
                break;
        }
        setButtonDisabled(true);
    }

    function start() { }

    function sell() { }

    function deliver() { }

    function inventory() { }

    return (
        <>
            <p>Your first task is to decide where to begin. Do you want to:</p>
            <p className="form-control" onChange={onChangeValue}>
                <input type="radio" name="action" value="Start" disabled={isButtonDisabled}/> Start baking bread
                <input type="radio" name="action" value="Sell" disabled={isButtonDisabled}/> Find folks to buy the bread
                <input type="radio" name="action" value="Delivery" disabled={isButtonDisabled}/> Get some delivery trucks
                <input type="radio" name="action" value="Inventory" disabled={isButtonDisabled}/> Take an inventory of what you have
            </p>
        </>
    )
}

export default Level02;
