import React from 'react'
import img from "./img.jpg"
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div>
            <div className="card my-3">
                <img src={!imageUrl ? img : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="__blank" class="btn">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem