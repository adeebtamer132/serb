import React, { Component } from 'react'
import '../css/nopage.css'



class Nopage extends Component {
    render() {
        return (
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might be under construction or does not exist.</p>
                    <a className='go-home' href="/">Go to Home</a>
                </div>
            </div>
        )
    }
};


export default Nopage;