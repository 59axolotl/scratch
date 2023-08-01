import React, { useState, useEffect } from 'react';
import '../src/styles.scss';
import EditForm from './EditForm';
import { Link } from 'react-router-dom';

const UserUploads = () => {
  const [videos, setVideos] = useState([]);

  let outputArray = [];
  const [studioName, setStudioName] = useState('');

  useEffect(() => {
    fetch('/api/videos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((videoData) => videoData.json()) //res is studioId
      .then((videoData) => {
        setVideos(videoData);
        setStudioName(videoData[0].createdBy.studio);
        // console.log(videoData[0].createdBy.studio);
      })
      .catch((err) => {
        console.error('An error occurred while GETTING new video info: ', err);
      });
  }, []);

  outputArray = videos.map((film, index) => {
    const title = film.title;
    const desc = film.description;
    const img = film.image;
    const id = film._id;

    return (
      <div className='col' key={id}>
        <div className='card shadow-sm'>
          <div className='card-header text-start border-0'>
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary'
              data-bs-toggle='modal'
              data-bs-target='#edit-modal'
            >
              Edit
            </button>
            <EditForm videos={videos} />
          </div>

          <img
            src={img}
            className='bd-placeholder-img'
            width='100%'
            height='225'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: Thumbnail'
            preserveAspectRatio='xMidYMid slice'
            // focusable="false"
          />
          <title>Placeholder</title>
          {/* TITLE IS NOT SHOWING UP!! */}
          <div className='card-body'>
            <p className='card-text'>
              <strong>{title}</strong>
            </p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Link
                  type='button'
                  className='btn btn-sm btn-outline-secondary'
                  to={`/videos/${id}`}
                >
                  View
                </Link>
              </div>
              {/* we don't have length of videos */}
              {/* <small className='text-muted'>9 mins</small> */}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <section className='py-5 text-center container'>
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <h1 className='fw-light' id='#studio-heading'>
              {studioName}&apos;s Published Works
            </h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              {/* here is where the videos from the db are mapped and rendered */}
              {outputArray}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserUploads;
