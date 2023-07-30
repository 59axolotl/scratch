import React from 'react';
import '../src/styles.scss';

const Navbar = () => {
  return (
    <header>
      <div className="navbar navbar-expand navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-film"
              viewBox="0 0 16 16"
              style={{ marginRight: '10px' }}
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>
            <strong>Axolotl Flixs</strong>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                type="button"
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#upload-modal"
              >
                Upload
              </a>
              <div className="modal fade" id="upload-modal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="d-flex justify-content-between m-2">
                      <h1>Upload Your Film Information</h1>
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
                          <label htmlFor="edit-title" className="form-label">
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
                          <label htmlFor="edit-credits" className="form-label">
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
                          <label htmlFor="edit-vidURL" className="form-label">
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
                          <label htmlFor="floatingTextarea2">Description</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            id="edit-thumbURL"
                            className="form-control"
                            placeholder="Place URL here"
                          />
                          <label htmlFor="edit-thumbURL" className="form-label">
                            URL for your Thumbnail
                          </label>
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
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
            </li>

            <li className="nav-item">
              <a href="javascript:void(0)" className="nav-link">
                Sign in/Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
