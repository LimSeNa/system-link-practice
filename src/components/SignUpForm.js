const SignUpForm = ({email, password, nickname,onChange, onSubmit}) => {
    return (
        <div>
            <form>
                <input
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={email}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={onChange}
                    value={password}
                />
                <input
                    name="nickname"
                    placeholder="Nickname"
                    onChange={onChange}
                    value={nickname}
                />
                <button onClick={onSubmit}>회원가입</button>
            </form>
        </div>
    );
};

export default SignUpForm;