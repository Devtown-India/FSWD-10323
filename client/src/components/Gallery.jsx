import axios from "../utils/axios";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const lastImageRef = useRef(null);
  const observer = useRef(null);
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

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4, 1100: 4 }}
      >
        <Masonry>
          {posts.map(({ title, id, image, user, link }, index) => (
            <div key={id} className="relative m-1">
              <img
                ref={index === posts.length - 1 ? lastImageRef : null}
                className="object-cover rounded-sm m-2"
                src={image}
                alt="random"
                style={{ objectFit: "contain" }}
              />
              <div
                className="absolute bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
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
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-center font-bold text-lg underline"
                >
                  Open Post
                </a>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default Gallery;
