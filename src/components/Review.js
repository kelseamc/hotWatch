import React from 'react'

function Review({review}) {
    return (
        <div className="review">
            <h3>{review.author_details.username}</h3>
            <p>{review.content}</p>
        </div>
    )
}

export default Review
