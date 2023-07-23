import axios from "../utils/axios";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const lastImageRef = useRef(null);
  const observer = useRef(null);
  const limit = 20;
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/post?_page=${page}&_limit=${limit}`);
      setPosts((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  // useEffect(() => {
  //   if (loading) return;
  //   if (observer.current) {
  //     // if observer is already observing then disconnect it
  //     observer.current.disconnect();
  //   }
  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       setPage((prev) => prev + 1);
  //     }
  //   });
  //   if (lastImageRef.current) {
  //     observer.current.observe(lastImageRef.current);
  //   }
  // }, [posts, loading]);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1100: 5 }}
      >
        <Masonry>
          {posts.map(({ title, id, image }, index) => (
            <img
              ref={index === posts.length - 1 ? lastImageRef : null}
              className="m-2"
              key={id}
              src={image}
              alt="random"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {loading && <h1>Loading...</h1>}
    </>
  );
};

export default Gallery;
