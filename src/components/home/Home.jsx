import Headder from "../../components/headder/Headder";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Headder />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}