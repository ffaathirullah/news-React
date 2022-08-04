// import Image from "next/image";

export default function DetailsBlogs(props) {
  return (
    <div>
      <div className="mx-5 my-5 mt-5 me-5 ms-5 px-5 ps-5 pe-5 pt-3">
        <div>
          {/* bagian atas */}
          <h1 className="mt-5 d-flex justify-content-center">{props.title}</h1>
          <p
            className="my-4 d-flex justify-content-center fw-light"
            style={{ fontSize: "0.9em" }}
          >
            {props.time}
          </p>
          {/* image */}
          <div className="d-flex justify-content-center mt-4">
            {/* <Image
              src="/images/detailBlog.png"
              alt="Picture of the author"
              width="500em"
              height="300em"
            /> */}
            <img
              className="news-img"
              src={props.urlToImage}
              alt={props.urlToImage}
              width="500em"
              height="300em"
            />
          </div>
          {/* bagian pertama */}
          <div className="d-flex justify-content-center mt-5">
            <div>
              <p>{props.description}</p>
              <p>{props.description}</p>
            </div>
          </div>
          {/* bagian ke 5 */}
          <div className="d-flex justify-content-center mt-3">
            <div>
              <h3>Content : </h3>
              <p>{props.content}</p>
            </div>
          </div>
          {/* post */}
          <div className="d-flex justify-content-center my-3">
            <div>
              <hr />
              <p className="fw-light mt-3" style={{ fontSize: "0.8em" }}>
                Leave a Reply
              </p>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>
              <br />
              <button type="button" className="btn btn-primary">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
