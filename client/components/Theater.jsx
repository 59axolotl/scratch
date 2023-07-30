import React from 'react';
import '../src/styles.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const Theater = () => {
  return (
    <>
      <Navbar />
      <main className="bg-dark-subtle">
        <div className="album py-5 bg-dark" style={{ minHeight: '100vh' }}>
          <div className="container">
            <div className="p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mb-4">
              <div className="spinner-border text-primary mx-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="text fs-1">
                ------------------PUT TITLE OF FILM HERE-------------
              </span>
              <div className="spinner-border text-primary mx-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-8 row-cols-md-12 g-3">
              <div className="col">
                <div className="card shadow-sm" style={{ height: '662px' }}>
                  {/* <img
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3WT3Bn1h_gkaOTHDP3C-vjoiMrGtGoSi4P-P8YXbpY_K6sH-Iag17SmI9RyvpBb-j03VfaJmHZSSfAwc"
                className="bd-placeholder-img"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              /> */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0IUUQtrf3-M"
                    title="Relaxing Music For Stress Relief - Axolotls - 3 HOURS of Calming Meditation Study Sleep Music"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>

                  <title>Placeholder</title>

                  <div className="card-body">
                    <p className="card-text">
                      VIDEO DESCRIPTION GOES HERE. VIDEO DESCRIPTION GOES HERE.
                      VIDEO DESCRIPTION GOES HERE. VIDEO DESCRIPTION GOES HERE.
                      VIDEO DESCRIPTION GOES HERE. VIDEO DESCRIPTION GOES HERE.
                      VIDEO DESCRIPTION GOES HERE. VIDEO DESCRIPTION GOES HERE.
                    </p>
                    <div className="d-flex justify-content-end">
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Theater;
