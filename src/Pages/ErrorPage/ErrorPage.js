import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='body'>
            <div className='text-center mt-48'>
                <h1 className='h1' contenteditable>4
                    <div class="shine-3"></div>
                    <div class="shine-4"></div>
                </h1>
                <h1 class='h1' style={{ left: '65.2%' }} contenteditable>4
                    <div class="shine-3"></div>
                    <div class="shine-4"></div>
                </h1>
                <div class="stars-container">
                    <div class="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="stars">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="stars-2"></div>
                    <div class="stars-2"></div>
                    <div class="stars-2"></div>
                    <div class="stars-2"></div>
                    <div class="stars-2"></div>
                    <div class="stars-2"></div>
                </div>

                <div class="moon"></div>

                <div class="planet-container">
                    <div class="planet-ring2"></div>
                    <div class="planet"></div>
                    <div class="shine"></div>
                    <div class="shine-2"></div>
                    <div class="planet-ring"></div>
                    <div class="planet-crater"></div>
                </div>

                <div class="meteor-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="meteor-container-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="meteor-container-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="meteor-container-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <p class="p1">Oops!!</p>
            <p class="p2">We can't seem to find the page you're looking for. </p>
            <form>
                <button className='mb-10' class='button'><Link to='/'>Go back to Home</Link></button>
            </form>
        </div>
    );
};

export default ErrorPage;