import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <ul>
                <li><Link to="/signup">회원가입 하러가기</Link></li>
                <li><Link to="/member">회원목록 보러가기</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;