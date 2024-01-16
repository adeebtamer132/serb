import React, { Component } from 'react'
import '../css/header2.css'




class Header extends Component {


    handleClick = () => {
        const menus = document.getElementsByClassName("ul");
        console.log("clicked");
        let menuOverlay = document.querySelector(".menuOverlay")
        // Loop through each element with the class name "ul"
        for (let i = 0; i < menus.length; i++) {
            const currentDisplay = menus[i].style.display;
            menus[i].style.display = currentDisplay === "flex" ? "none" : "flex";

            // Toggle 'active' class based on the display style
            if (menus[i].style.display === "flex") {
                menus[i].classList.add('activeMenu');
                // menus[i].classList.add('menuOverlay');
                menuOverlay.style.height = "100%"
            } else {
                menus[i].classList.remove('activeMenu');
                // menus[i].classList.remove('menuOverlay');
                menuOverlay.style.height = "0"
            }
        }
    }

    // remember to handle this function because it doesnt work yet (not rendered)

    activeClick = () => {
        const navLinks = document.querySelectorAll("header nav ul li a");

        navLinks.forEach((item) => {
            item.addEventListener('click', function () {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the clicked link
                this.classList.add("active");
            });
        });
    }




    render() {
        return (
            <header>
                <div className='menuOverlay'></div>
                <div className="container">
                    <a href="/" className="logo">
                        <img decoding="async" src="./Logo-01.svg" alt="Logo" />
                    </a>
                    <nav>

                        <i className="fas fa-bars toggle-menu" onClick={this.handleClick}>Menu</i>   {/* remember to manage shape of toggle menue */}
                        <ul className='ul'>
                            <li><a className='active' href="home">Home</a></li>
                            <li><a href="about">About Us</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="products">Products</a></li>
                            <li><a href="design">Design</a></li>


                        </ul>
                        <ul>
                            <li className='dach'>|</li>
                            <li><a href='privacy'>privacy</a></li>
                        </ul>

                    </nav>
                </div>
            </header>
        )
    }
};

export default Header;