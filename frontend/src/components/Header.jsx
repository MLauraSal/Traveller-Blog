import { Navbar } from "./Navbar";

export default function Header() {

    

    return (
      <>
        <Navbar/>
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleLg">BLOG</span>
            <span className="headerTitleSm">Travellers</span>
          </div>
          <img
            className="headerImg"
            src="https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </>
    );
  }