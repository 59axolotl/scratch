import React from 'react';
import '../src/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//This comes from clicking the Upload button on the navbar

const UploadForm = () => {
  return (
    <div className="modal fade" id="upload-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between m-2">
            <h1>Upload Your Film Information</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
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
  );
};

export default UploadForm;
