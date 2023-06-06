import {useSelector} from "react-redux";

const Member = ({onRemove}) => {
    const members = useSelector(state => state.member.members);

    return (
        <div>
            {members.map(member => (
                <div>
                <div key={member.id}>
                    {member.email}, {member.password}, {member.nickname}
                </div>
                <button type="submit">회원정보 수정</button>
                <button onClick={onRemove}>회원 탈퇴</button>
                </div>
            ))}
        </div>
    );
};

const MemberList = ({onRemove}) => {
    return (
        <div>
            <div>회원 목록</div>
            <div>
                <Member onRemove={onRemove}/>
            </div>
        </div>
    );
};

export default MemberList;