import React from 'react';
import "./project.css";
const Project = (props) => {



    return (
        <>
            <div class="project-items project1">
                <div class="project-img-container">
                    <img class="project-img" src={props.img} alt="project-img" />

                    <button
                        onClick={() => window.open(props.url, '_blank')}

                        class="project-btn"
                    >
                        view
                    </button>
                </div>
                <div class="project-disr">
                    <a
                        class="underline"
                        href={props.url}
                    ><h3>{props.name}</h3></a>

                    <h6>{props.language}</h6>
                </div>
            </div>

        </>
    );
}
export default Project;