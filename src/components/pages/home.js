import React, { Component } from 'react'
import '../css/home.css';






const hiddenElement = document.querySelectorAll('.plan *')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            // entry.target.classList.remove('show')

        }
    })
})

hiddenElement.forEach(el => {
    el.classList.add('hidden')
    observer.observe(el)
})



class Home extends Component {







    render() {
        return (
            <div className="home-container">
                <div className="landing">
                    <div className="overlay"></div>
                    <div className="text">
                        <div className="content">
                            <h2>
                                Hello World!<br />
                                We Are Serb Al Jazira We Make Art.
                            </h2>
                            <p>
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                                elit, eget tincidunt.
                            </p>
                        </div>
                    </div>
                    <i className="fas fa-angle-left change-background fa-2x"></i>
                    <i className="fas fa-angle-right change-background fa-2x"></i>
                    <ul className="bullets">
                        {/* <li></li>
                        <li className="active"></li>
                        <li></li> */}
                    </ul>
                </div>




                <div className='section2'>
                    <div className='container'>
                        <div className='main-heading B'>
                            <h2>Private Jet Performance and Specifications</h2>
                            {/* <p>...</p> */}
                        </div>
                        <div className='plan-section'>
                            <div className='description'>
                                <div className='des1'>
                                    <h2>LUXURY AND COMFORT</h2>
                                    <p>Flying should be a pleasure and well make your charter experience as luxurious and comfortable as possible.</p>
                                </div>
                                <div className='des2'>
                                    <h2>DISCRETION & SECURITY</h2>
                                    <p>An ACS charter guarantees your privacy, and we will work closely with your security provider on all aspects of your charter.</p>
                                </div>
                            </div>


                            <img className='plan' src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-1-927x1024.jpg" alt='plane'></img>


                            <div className='description'>
                                <div className='des1'>
                                    <h2>LARGE JETS</h2>
                                    <p>Comfortable for seven to eight passengers with some models offering maximum seating of ten to fourteen.</p>
                                </div>
                                <div className='des1'>
                                    <h2>LUXURY AND COMFORT</h2>
                                    <p>Flying should be a pleasure and well make your charter experience as luxurious and comfortable as possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
};


export default Home;

