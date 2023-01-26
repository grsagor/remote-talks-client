import React from 'react';
import img3 from '../../../assets/Team Member image/Sharmin.png';
import pdf3 from '../Resume/Sharmin-s Resume.pdf';

const SharminDetails = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 p-5">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className='mr-13'>
                            <h1 className="text-5xl font-bold">Hello!! I am <small className="text-5xl text-primary font-bold">Sharmin Akter</small>. </h1>
                            <p className="text-xl py-6">I'm a front end developer and team player also have strong desire to develop
                                professionally and constantly enhance my skills. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>
                            <button className="btn btn-outline btn-primary"><a href={pdf3} download={"sharmin Akter"}>Get Resume</a></button>
                        </div>
                        <div className="avatar ml-40">
                            <div className="w-5/6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img3} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-base-200 p-5'>
                <div className="">
                    <h2 className='text-4xl font-bold text-center'>My Contribute To This Project</h2>

                    <div className="mt-5 card bg-gradient-to-r from-primary to-blue-800 p-9 w-2/3 h-full mx-auto bg-info shadow-xl">
                        <div>
                            <p className='p-5 text-xl text-primary-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus culpa quibusdam repellat, corporis accusamus, nam eveniet incidunt commodi saepe pariatur praesentium voluptates beatae ducimus vel accusantium explicabo voluptate delectus recusandae. Nisi distinctio beatae esse a eveniet, dolore saepe perspiciatis quasi quam deserunt nam veniam molestiae provident dolor dolores in minima. In voluptatum deleniti officiis voluptas sunt! Quasi soluta eligendi quos. Ipsam eligendi deleniti sequi officia odit blanditiis quod molestiae asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi non ab porro, nobis tempore molestiae numquam obcaecati explicabo provident placeat, nemo ad consequatur architecto adipisci iure accusantium cumque quisquam exercitationem? Minima consectetur sequi sed magni aperiam ipsam facere harum. Aspernatur magnam labore repudiandae qui saepe possimus perspiciatis dolores. Vel accusantium maxime necessitatibus! Ea debitis dicta maxime fuga officiis libero.</p>

                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-base-200 pb-10 px-5'>

                <div className='bg-base-200 py-10 text-5xl text-center font-semibold'>Recent Works</div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="card w-full bg-info text-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">Pori's Computers</h2>
                            <p>● This is a full stack web project and this is a responsive website.
                                <br />
                                ● You can add a tool, review and will give orders etc.
                                <br />
                                ● There also has an authentication system.
                                <br />
                            </p>
                            <div className="">
                                <button className="btn m-1"><a href="https://poris-computers.web.app/" alt=''>Live Site</a></button>
                                <button className="btn m-1"><a href="https://github.com/SharminAkter3/Poris-Comouters-Client" alt=''>Client Site</a></button>
                                <button className="btn m-1"><a href="https://github.com/SharminAkter3/Poris-Computers-Server" alt=''>Server Site</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-primary text-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">Cute Photography</h2>
                            <p>● This is also a full stack web project and That's I created a few days Ago.
                                <br />
                                ● You can increase and decrease book quantity and remove a book.
                                <br />
                                ●  There also has an authentication system and email verification system.
                                <br />
                            </p>
                            <div className="">
                                <button className="btn m-1">Live Site</button>
                                <button className="btn m-1">Client Site</button>
                                <button className="btn m-1">Server Site</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-success text-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">Web Development</h2>
                            <p>● This is a full stack web project for online courses as per categories.
                                <br />
                                ● Email-Password based authentication is implemented along with Google and GitHub.
                                <br />
                                ●  View course details , download PDF after getting premium access of course.
                                <br />
                            </p>
                            <div className="">
                                <button className="btn m-1">Live Site</button>
                                <button className="btn m-1">Client Site</button>
                                <button className="btn m-1">Server Site</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default SharminDetails;