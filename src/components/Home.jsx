import {Link} from "react-router-dom";

function Home(){
  return (
    <>
      <h1>Programming and Web Development</h1>
      <div className="courses">
          <div className="exp">
            <h2><Link to="/exploratory">Exploratory</Link></h2>
          </div>
          <div className="t1">
            <h2><Link to="/tech1">Tech 1</Link></h2>
          </div>
          <div className="t2">
            <h2><Link to="tech2">Tech 2</Link></h2>
          </div>
          <div className="t3">
            <h2><Link to="/tech3">Tech 3</Link></h2>
          </div>
      </div>
    </>
  );
}

export default Home;