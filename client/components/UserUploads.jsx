import React from "react";
import "../src/styles.scss";
import EditForm from "./EditForm";
import { Link } from "react-router-dom";

const UserUploads = () => {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h1 className="fw-light" id="#studio-heading">
              STUDIO Name&apos;s Published Works
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
                    {/* This is the modal popup here: EditForm */}
                    <EditForm />
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
                        <Link
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          to={"/videos/:id"}
                        >
                          View
                        </Link>
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

                    <EditForm />
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
                        <Link
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          to={"/videos/:id"}
                        >
                          View
                        </Link>
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

                    <EditForm />
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
                    // focusable="false"
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
                        <Link
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          to={"/videos/:id"}
                        >
                          View
                        </Link>
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
    </div>
  );
};

export default UserUploads;
