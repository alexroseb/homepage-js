import {BrowserRouter, Routes, Route, useLocation, Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import './styles/App.css';
import Home from "./components/Home";
import Tech1 from "./components/Tech1";
import Tech2 from "./components/Tech2";
import Tech3 from "./components/Tech3";
import Exploratory from "./components/Exploratory";
import Nav from "./components/Nav";

function AnimateRoutes(){
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/"
            element = {
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
            />
          <Route 
            path="/tech1"
            element = {
              <>
                <Nav />
                <PageWrapper>
                  <Tech1 />
                </PageWrapper>
              </>
            }
            />
            <Route 
            path="/tech2"
            element = {
              <>
                <Nav />
                <PageWrapper>
                  <Tech2 />
                </PageWrapper>
              </>
            }
            />
          <Route 
            path="/tech3"
            element = {
              <>
              <Nav />
                <PageWrapper>
                  <Tech3 />
                </PageWrapper>
              </>
            }
            />
          <Route 
            path="/exploratory"
            element = {
              <>
                <Nav />
                <PageWrapper>
                  <Exploratory />
                </PageWrapper>
              </>
            }
            />
        </Routes>
    </AnimatePresence>
  );
}

function PageWrapper ({children}){
  return (
    <motion.div
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -20}}
      transition = {{duration: .5}}
  >
    {children}
    </motion.div>
  )
}
function App() {

  return (
    <>
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
