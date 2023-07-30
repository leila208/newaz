import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
function Content() {
  const [contents, setContents] = useState([]);

  const getInfo = async (e='') => {
    let data = await fetch("https://admin.azgpen.com/blog/BlogView/").then((a) =>
      a.json()
    );
   

    setContents(data)
   
    
      getSortedDataFunction(e)
    
    

  };
  
  
  const[sortedData,setSortedData] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [test, setTest] = useState("");

  const getSortedDataFunction = async (e) => {
    if (e) {
     
      if (e == "az") {
        setSortedData(
          contents?.results?.sort(
            (a, b) => a.title.charCodeAt() - b.title.charCodeAt()
          )
        );
      } else if (e == "za") {
        setSortedData(
          contents?.results?.sort(
            (a, b) => b.title.charCodeAt() - a.title.charCodeAt()
          )
        );
      } else {

        setSortedData(contents?.results);
      }
    } else {
      
      setSortedData(contents?.results);
    }
    setTest(e)
  }
  const searching = (e) => {
    setSearchInput(e.target.value);
  };

 useEffect(() => {
   getInfo(test);
   
 }, [sortedData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
 

 
  
 

   const currentPosts = contents?.results?.slice(firstPostIndex, lastPostIndex); 

  return (
    <>
      <section>
        <div className="k">
          <p>Bloq</p>
        </div>
        <div className="container">
          <div className="blogdetail">
            <div className="blogsearch">
              <div className="search">
                <div className="searching">
                  <input
                    className="input"
                    type="text"
                    placeholder="Bloqu axtar"
                    value={searchInput}
                    onChange={searching}
                  />
                </div>
              </div>
              <div className="recent">
                <div className="bloqhead">Ən yeni bloqlar</div>
                {sortedData?.slice(0, 6).map((a) => (
                  <>
                    <div className="recent-blog" key={a.id}>
                      <div
                        className="recent-details "
                        // data-aos="fade-left"
                        // data-aos-duration="3000"
                      >
                        <div className="recent-image">
                          <img src={a.image} />
                        </div>
                        <div className="recent-text">
                          <Link to={`/blogdetails/${a.slug}`}>
                            <h1>{a.text}</h1>
                          </Link>
                          <div className="calendar">
                            <i className=" orange fa-regular fa-calendar"></i>{" "}
                            <p>18 May 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="blogcontents">
              <div className="paginations">
                <Pagination
                  totalPosts={contents?.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                />
                <select
                  className="select"
                  onChange={(e) => getSortedDataFunction(e.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option className="option" value="DEFAULT" disabled>
                    Əlifba sırasına görə filtrlə
                  </option>
                  <option className="option" value="az">
                    A-Z
                  </option>
                  <option className="option" value="za">
                    Z-A
                  </option>
                </select>
              </div>
              <div className="blogcontent">
                {sortedData
                  ?.filter((a) => {
                    if (searchInput == "") {
                      return a;
                    } else if (
                      a.title.toLowerCase().includes(searchInput.toLowerCase())
                    ) {
                      return a;
                    }
                  })
                  .map((a) => (
                    <div
                      className="rateblog"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <div className="rateblog-img">
                        <img src={a.image} />
                      </div>
                      <div className="rated-details">
                        <div className="rated-icons">
                          <i className="fa-solid fa-right-long " id="brown"></i>
                          <ul>
                            <li>
                              <i className="fa-brands fa-facebook-f"></i>
                            </li>
                            <li>
                              <i className="fa-brands fa-twitter"></i>
                            </li>
                          </ul>
                        </div>

                     
                        <Link to={`/blogdetails/${a.slug}`} key={a.id}>
                          {" "}
                          <h1>{a.title}</h1>
                          Daha ətraflı
                          <i className="fa-solid fa-angles-right"></i>
                        </Link>
                      </div>
                      <div> </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Content;