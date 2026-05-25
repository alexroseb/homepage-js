import {Link} from "react-router-dom";

function Home(){
  return (
    <>
      <h1>Programming and Web Development</h1>
      <div className="courses">
          <Link to="/exploratory" className="exp"><div>
            <h2>Exploratory</h2>
          </div></Link>
          <Link to="/tech1" className="t1"><div>
            <h2>Tech 1</h2>
          </div></Link>
          <Link to="/tech2" className="t2"><div>
            <h2>Tech 2</h2>
          </div></Link>
          <Link to="/tech3" className="t3"><div>
            <h2>Tech 3</h2>
          </div></Link>
      </div>
    </>
  );
}

export default Home;