import React from "react";
import ReactDOM from "react-dom";

// Create your function here
export const BootstrapCard = () => {
    return (
        <div className="card m-5">
            <img className="card-img-top" src={data.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.cardTitle}</h5>
                <p className="card-text">{data.cardDescription}</p>
                <a href={data.button.url} className="btn btn-primary">
                    {data.button.label}
                </a>
            </div>
        </div>
    );
};
// Remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard 
/>, document.querySelector("#myDiv"));
