import {useDispatch, useSelector} from "react-redux";
import {out} from "../modules/member";
import MemberList from "../components/MemberList";

const MemberContainer = () => {
    const id = useSelector(state=> state.member.members);
    const dispatch = useDispatch();

    const onRemove = () => {
        dispatch(out(id))
    };

    return (
        <MemberList onRemove={onRemove}/>
    );
};

export default MemberContainer;