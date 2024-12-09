import { useParams } from "react-router-dom";
import './20.blog.css';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <>
      <div className="blog-c">
        <h2>Blog Post {postId}</h2>
        <h3>
          <strong>Rodri presents Ballon d'Or at Etihad</strong>
        </h3>
        <p>
          Rodri presents his award at Etihad before
          <br />
          playing Tottenham...
        </p>
      </div>

      <div className="blog-c">
        <h3>
          <strong>Kylian Mbappe yet to prove himself</strong>
        </h3>
        <p>
          Kylian Mbappe is regarded as one of
          <br />
          the best of the current...
        </p>
      </div>

      <div className="blog-c">
        <h3>
          <strong>Tomorrow there is assignment presentation on Assignment 3...</strong>
        </h3>
        <p>
          CS Year 3 class representative has been announced and proved that...
        </p>
      </div>
    </>
  );
};

export default BlogPost;
