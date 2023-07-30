import React from 'react';
import '../src/styles.scss';

const UserUploads = () => {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h1 className="fw-light" id="#studio-heading">
              STUDIO Name's Published Works
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-header text-start border-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                    >
                      Edit
                    </button>

                    <div className="modal fade" id="edit-modal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="d-flex justify-content-between m-2">
                            <h1>Edit Your Film Information</h1>
                            <button
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="edit-form">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-title"
                                  className="form-control"
                                  placeholder="Place title here"
                                />
                                <label
                                  htmlFor="edit-title"
                                  className="form-label"
                                >
                                  Title
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-credits"
                                  className="form-control"
                                  placeholder="Place credits here"
                                />
                                <label
                                  htmlFor="edit-credits"
                                  className="form-label"
                                >
                                  Credits/Creators
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-vidURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-vidURL"
                                  className="form-label"
                                >
                                  URL for your Video
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a desc"
                                  id="floatingTextarea2"
                                  style={{ height: '100px' }}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                  Description
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-thumbURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-thumbURL"
                                  className="form-label"
                                >
                                  URL for your Thumbnail
                                </label>
                              </div>
                              <div className="d-flex justify-content-between">
                                <button
                                  className="btn btn-success"
                                  data-bs-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <button
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Delete
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3WT3Bn1h_gkaOTHDP3C-vjoiMrGtGoSi4P-P8YXbpY_K6sH-Iag17SmI9RyvpBb-j03VfaJmHZSSfAwc"
                    className="bd-placeholder-img"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-header text-start border-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                    >
                      Edit
                    </button>

                    <div className="modal fade" id="edit-modal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="d-flex justify-content-between m-2">
                            <h1>Edit Your Film Information</h1>
                            <button
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="edit-form">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-title"
                                  className="form-control"
                                  placeholder="Place title here"
                                />
                                <label
                                  htmlFor="edit-title"
                                  className="form-label"
                                >
                                  Title
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-credits"
                                  className="form-control"
                                  placeholder="Place credits here"
                                />
                                <label
                                  htmlFor="edit-credits"
                                  className="form-label"
                                >
                                  Credits/Creators
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-vidURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-vidURL"
                                  className="form-label"
                                >
                                  URL for your Video
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a desc"
                                  id="floatingTextarea2"
                                  style={{ height: '100px' }}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                  Description
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-thumbURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-thumbURL"
                                  className="form-label"
                                >
                                  URL for your Thumbnail
                                </label>
                              </div>
                              <div className="d-flex justify-content-between">
                                <button
                                  className="btn btn-success"
                                  data-bs-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <button
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Delete
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3WT3Bn1h_gkaOTHDP3C-vjoiMrGtGoSi4P-P8YXbpY_K6sH-Iag17SmI9RyvpBb-j03VfaJmHZSSfAwc"
                    className="bd-placeholder-img"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-header text-start border-0">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                    >
                      Edit
                    </button>

                    <div className="modal fade" id="edit-modal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="d-flex justify-content-between m-2">
                            <h1>Edit Your Film Information</h1>
                            <button
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form id="edit-form">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-title"
                                  className="form-control"
                                  placeholder="Place title here"
                                />
                                <label
                                  htmlFor="edit-title"
                                  className="form-label"
                                >
                                  Title
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-credits"
                                  className="form-control"
                                  placeholder="Place credits here"
                                />
                                <label
                                  htmlFor="edit-credits"
                                  className="form-label"
                                >
                                  Credits/Creators
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-vidURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-vidURL"
                                  className="form-label"
                                >
                                  URL for your Video
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <textarea
                                  className="form-control"
                                  placeholder="Leave a desc"
                                  id="floatingTextarea2"
                                  style={{ height: '100px' }}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                  Description
                                </label>
                              </div>
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  id="edit-thumbURL"
                                  className="form-control"
                                  placeholder="Place URL here"
                                />
                                <label
                                  htmlFor="edit-thumbURL"
                                  className="form-label"
                                >
                                  URL for your Thumbnail
                                </label>
                              </div>
                              <div className="d-flex justify-content-between">
                                <button
                                  className="btn btn-success"
                                  data-bs-dismiss="modal"
                                >
                                  Submit
                                </button>
                                <button
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Delete
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3WT3Bn1h_gkaOTHDP3C-vjoiMrGtGoSi4P-P8YXbpY_K6sH-Iag17SmI9RyvpBb-j03VfaJmHZSSfAwc"
                    className="bd-placeholder-img"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                  <title>Placeholder</title>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserUploads;
