import React, { useState } from "react";
import "../src/styles.scss";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Theater = () => {
    //need a fetch to get info from the video collection based on the id params
    //useParams
    return (
        <>
            <Navbar />
            <main className="bg-dark-subtle">
                <div
                    className="album py-5 bg-dark"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="container">
                        <div className="p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mb-4">
                            <div
                                className="spinner-border text-primary mx-3"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <span className="text fs-1">
                                ------------------PUT TITLE OF FILM
                                HERE-------------
                            </span>
                            <div
                                className="spinner-border text-primary mx-3"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-8 row-cols-md-12 g-3">
                            <div className="col">
                                <div
                                    className="card shadow-sm"
                                    style={{ height: "662px" }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={video.videoLink}
                                        title="Relaxing Music For Stress Relief - Axolotls - 3 HOURS of Calming Meditation Study Sleep Music"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>

                                    <title>Placeholder</title>

                                    <div className="card-body">
                                        <p className="card-text">
                                            {video.description}
                                        </p>
                                        <div className="d-flex justify-content-end">
                                            <small className="text-muted">
                                                9 mins
                                            </small>
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
