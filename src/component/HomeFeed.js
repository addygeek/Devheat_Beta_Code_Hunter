import "../css/HomeFeed.css";
import Post from "./Post";
import Qnsbox from "./Qnsbox";

export function HomeFeedpage() {
 return(
    <div className="HomeFeedpage">
        <Qnsbox/>
        <Post/>
    </div>
 );
}
export default HomeFeedpage