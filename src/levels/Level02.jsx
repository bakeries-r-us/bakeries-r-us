
function Level02() {

    function start() { }

    function sell() { }

    function deliver() { }

    function inventory() { }

    return (
        <>
            <p>Your first task is to decide what to do first:</p>
            <p className="form-control">
                <input type="radio" name="action" value="Start"/> Start baking bread
                <input type="radio" name="action" value="Sell"/> Find folks to buy the bread
                <input type="radio" name="action" value="Delivery"/> Get some delivery trucks
                <input type="radio" name="action" value="Inventory"/> Take an inventory of what you have
            </p>
        </>
    )
}

export default Level02;
