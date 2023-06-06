import {useSelector} from "react-redux";

const Member = () => {
    const {email, password, nickname} = useSelector(state => state.signup);
    return (
        <div>
            <div>{email}, {password}, {nickname}</div>
            <button type="submit">회원정보 수정</button>
            <button type="submit">회원 탈퇴</button>
        </div>
    );
};

const MemberList = () => {
    return (
        <div>
            <div>회원 목록</div>
            <div>
                <Member/>
            </div>
        </div>
    );
};

export default MemberList;