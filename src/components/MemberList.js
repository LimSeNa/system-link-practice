const Member = ({ email, password, nickname }) => {
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
                <Member/>
                <Member/>
            </div>
        </div>
    );
};

export default MemberList;