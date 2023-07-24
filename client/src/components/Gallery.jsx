import axios from "../utils/axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const lastImageRef = useRef(null);
  const observer = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const limit = 20;
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/post?_page=${page}&_limit=${limit}`);
      if (data.length === 0) {
        setDone(true);
      } else {
        setPosts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    // no data or data is loading
    if (loading || done) return;
    if (observer.current) {
      // if observer is already observing then disconnect it
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (lastImageRef.current) {
      observer.current.observe(lastImageRef.current);
    }
  }, [posts, loading, done]);

  console.log(user);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4, 1100: 4 }}
      >
        <Masonry>
          {posts.map(
            ({ title, _id: postId, image, user: postOwner, link }, index) => (
              <div key={postId} className="relative m-1">
                <img
                  ref={index === posts.length - 1 ? lastImageRef : null}
                  className="object-cover rounded-sm m-2 "
                  src={image}
                  alt="random"
                  style={{ objectFit: "contain" }}
                />
                <div
                  className="absolute bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <p className="text-white text-center font-bold text-lg mb-2">
                    {title}
                  </p>
                  <p className="text-white text-center font-bold text-lg mb-2">
                    By, {user?.firstName}
                  </p>
                  <Link
                    to={`/post/${postId}`}
                    rel="noopener noreferrer"
                    className="text-white text-center font-bold text-lg underline"
                  >
                    View
                  </Link>
                  {user && postOwner._id === user.id ? (
                    <div className="flex">
                      <Link to={`/post/edit/${postId}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17"
                          stroke="#fff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : user && user.role === 1 ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 3L21 21M18 6L17.6 12M17.2498 17.2527L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6H4M16 6L15.4559 4.36754C15.1837 3.55086 14.4194 3 13.5585 3H10.4416C9.94243 3 9.47576 3.18519 9.11865 3.5M11.6133 6H20M14 14V17M10 10V17"
                          stroke="#fff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )
          )}
        </Masonry>
      </ResponsiveMasonry>
      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default Gallery;
