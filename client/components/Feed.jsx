import React from "react";
import "../src/styles.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Feed = () => {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        fetch("/api/allVideos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((videoData) => videoData.json())
            .then((videoData) => {
                setVideoList(videoData);
                console.log("successfully retrieved vid list");
                console.log(videoData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const videoArray = videoList.map((video) => {
        return (
            <div className="col">
                <div className="card shadow-sm">
                    <img
                        src={video.image}
                        className="bd-placeholder-img"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    />
                    <title>{video.title}</title>

                    <div className="card-body">
                        <p className="card-text">{video.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                    to={`/videos/${video._id}`}
                                >
                                    View
                                </Link>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="album py-5 bg-dark">
            <div className="container">
                <div className="p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mb-4">
                    <div
                        className="spinner-border text-primary mx-3"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className="text fs-1">Latest Uploaded Films</span>
                    <div
                        className="spinner-border text-primary mx-3"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {videoArray}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button className="btn btn-outline-secondary">
                        Previous
                    </button>
                    <button className="btn btn-outline-secondary">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Feed;
