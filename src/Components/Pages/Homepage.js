import React from "react";
// import GVPLake from "../../Assets/GVP-Lake.JPG"

const Homepage = () => {
    return (
        // <section className="introductionTop">
        //     {/* <img src={ GVPLake } className="GVPLakeImage" alt="Photo of blurry lake with the GoodView Productions logo in the center"></img> */}
        // </section>
          <section className='FlexAboutMeSection'>
            <h2 className='aboutMeHeader'>About Me</h2>
            {/* <img src={ profilePic } className='aboutMeSelfie' alt="Photo of Eduardo Figueroa"></img> */}
           
            <div className='mainContent'>
                 
                    <p className='HelloWelcome'>Hello and Welcome!</p>
                        <p className='IntroParagraph'>
                        
                        <br /><br />
                        My name is Eduardo Figueroa, I'm glad you're here to learn a little bit more about me. Just a quick synopsis, I am U.S. Marine Veteran in the process of becoming a web developer. I've always had a passion for learning & innovating new things, problem solving and setting high goals for myself both in the web development world and in my personal life. There are several things I want to accomplish in my lifetime, such as completing a Triathlon, visit every country, learn to skydive, fly a plane and be an excellent software engineer. Some of my hobbies include: anything outdoors, water sports, snow sports, photography, video games, and long drives with no specific destination while cruising to some good tunes. If we become friends you can call me Eddie.
                        </p>
            </div>
        </section>
        
    )
}

export default Homepage;