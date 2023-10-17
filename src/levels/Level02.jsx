
function Level02() {

    return (
        <>
            <p>Your first task is to decide what to do first:</p>
            <div>
                <input type="radio" name="action" value="Start"/> Start baking bread
                <input type="radio" name="action" value="Sell"/> Find folks to buy the bread
                <input type="radio" name="action" value="Delivery"/> Get some delivery trucks
                <input type="radio" name="action" value="Inventory"/> Take an inventory of what you have
            </div>
        </>
    )
}

export default Level02;
