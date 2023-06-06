import SignUpForm from "../components/SignUpForm";
import {useDispatch} from "react-redux";
import {changeInput} from "../modules/signup";

const SignUpContainer = () => {
    const dispatch = useDispatch();

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeInput({
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <SignUpForm
            onChange={onChange}
            onClick={onSubmit}
        />
    );
};

export default SignUpContainer;