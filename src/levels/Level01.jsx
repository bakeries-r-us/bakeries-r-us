import {useState} from "react";
import PropTypes from "prop-types";
function Level01({sendMessage}) {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    function onChangeValue(event) {
        sendMessage(event.target.value === 'Yes');
        setButtonDisabled(true);
    }

    return (
        <>
            <h1>Bakeries-R-Us</h1>
            <p>Bakeries-R-Us has given you an irresistible offer. They want you as their new CEO. Why you? Well, you're not
                sure, since you can't bake, but you shouldn't let a good opportunity go. In fact, they assure you that there
                will be no baking involved. All you have to do is ensure the bakery has enough ingredients to sell enough bread
                to make a profit.</p>

            <p>You will have to within a year turn a budget of one million
                dollars into a handsome profit. If you do, you will get a big bonus. If you don't, you will be demoted to
                unemployed.</p>

            <p>Do you accept the challenge of becoming CEO?</p>

            <p className="form-control" onChange={onChangeValue} >
                <input type="radio" name="continue" value="Yes" disabled={isButtonDisabled}/> Yes
                <input type="radio" name="continue" value="No" disabled={isButtonDisabled}/> No
            </p>
        </>
    )
}

Level01.propTypes = {
    sendMessage: PropTypes.func
}

export default Level01;
