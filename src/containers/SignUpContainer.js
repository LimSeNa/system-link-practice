import SignUpForm from "../components/SignUpForm";
import {batch, useDispatch, useSelector} from "react-redux";
import {changeInput, registerPost} from "../modules/signup";
import {insert} from "../modules/member";

const SignUpContainer = () => {
    const dispatch = useDispatch();
    const {email, password, nickname} = useSelector(state => state.signup);
    const members = useSelector(state => state.member.members);

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
        /*dispatch(
            registerPost({
                email,
                password,
                nickname,
            }),
        );*/
        batch(() => {
            dispatch(registerPost({
                email,
                password,
                nickname,
            }));
            dispatch(insert({
                id: members.length + 1, // 새로운 요소의 인덱스로 할당
                email,
                password,
                nickname,
            }));
        });
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