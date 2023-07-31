import React from 'react';
import '../src/styles.scss';
import { react, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//This comes from clicking the Upload button on the navbar

const UploadForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const[title, setTitle] = useState('');
  const[videoLink, setVideoLink] = useState('');
  const[credits, setCredits] = useState('');
  const[description, setDescription] = useState('');
  const[image, setImage] = useState('');

  const handleVidSubmit = (e) => {
    e.preventDefault();
  
    fetch('/api/videos', {
      //send email and password in either query or param
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title: title,
        credits: credits,
        description: description,
        image: image,
        videoLink: videoLink,
     
      }),
    })
      .then((videoData) => {

        setTitle('');
        setVideoLink('');
        setCredits('');
        setDescription('');
        setImage('');
        return videoData.json();}) 
      .then((videoData) => {
        console.log(videoData, 'SUCCESSFULLY CREATED VIDEO!!');
      })
      .catch((err) => {
        console.log('An error occurred while POSTING new video info: ', err);
      });
  };


    


  return (
    <div className="modal fade" id="upload-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between m-2">
            <h1>Upload Your Film Information</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <form id="edit-form" onSubmit={handleVidSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="edit-title"
                  className="form-control"
                  placeholder="Place title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={credits}
                  onChange={(e) => setCredits(e.target.value)}
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
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="edit-thumbURL"
                  className="form-control"
                  placeholder="Place URL here"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="edit-thumbURL" className="form-label">
                  URL for your Thumbnail
                </label>
              </div>
              <div className="d-flex justify-content-end">

                <button
                  type="submit"
                  className="btn btn-primary"

                >
                  Upload
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
