import SignUpForm from "../components/SignUpForm";
import {useDispatch, useSelector} from "react-redux";
import {changeInput, registerPost} from "../modules/signup";

const SignUpContainer = () => {
    const dispatch = useDispatch();
    const {email, password, nickname} = useSelector(state => state.signup)

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeInput({
                key: name,
                value
            })
        );
    };

    const onRegister = e => {
        e.preventDefault();
        dispatch(
            registerPost({
                email,
                password,
                nickname,
            }),
        );
        alert(`${nickname}님 회원가입 성공!`);
    };

    return (
        <SignUpForm
            email={email}
            password={password}
            nickname={nickname}
            onChange={onChange}
            onRegister={onRegister}
        />
    );
};

export default SignUpContainer;