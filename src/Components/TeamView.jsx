import React, { useState } from 'react';


import Member from './Member';
import '../Styles/teamPage_teamView.scss';

export default _ => {
    const [state] = useState([
        {
            name: "Denise",
            displayName: "Denise Fafette",
            title: "Founder",
            link1: "denisefafette@gmail.com",
            link2: "https://www.linkedin.com/in/denisefafette/",
            link3: "https://dribbble.com/AprilDing",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-dribbble",
            bio: "Former bee wrangler (yes, I had an entire shtick)"

            
        },
        {
            name: "Charles",
            displayName: "Charles A. Rogers",
            title: "Software Engineer",
            link1: "",
            link2: "https://www.linkedin.com/in/charles-a-rogers-sr-823636102/",
            link3: "https://github.com/MisterC-Rogers",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "I love electronics and coding. I enjoy the challenges of building and making things. I love the feeling of the end goal becoming reality. As a Father I like to show my children things they could be doing as well if they would only try."
            
        },
        {
            name: "April",
            displayName: 'Xueyi, "April" Ding',
            title: "UX Designer",
            link1: "april9413ding@gmail.com",
            link2: "http://www.linkedin.com/in/april9413ding",
            link3: "https://dribbble.com/AprilDing",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-dribbble",
            bio: "Love design and video games. Enjoy being quiet. Great designs speak for themselves."
            
        },
        {
            name: "Alando",
            displayName: "Alando Appling",
            title: "Software Engineer",
            link1: 'alandoappling@gmail.com',
            link2: "https://www.linkedin.com/in/alando-appling-30ab1371/",
            link3: "https://github.com/Landoooooo",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: " Working with software is probably one of the most fulfilling things I’ve done thus far, every problem I face is an opportunity to overcome a challenge and continue to grow on this journey called life."
            
        },
        {
            name: "Christian",
            displayName: "Christian Allen",
            title: "Software Engineer",
            link1: "christiansallen@gmail.com",
            link2: "https://www.linkedin.com/in/christian-allen-/",
            link3: "https://github.com/christiansallen",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "Fun Guy."
            
        },
        {
            name: "Andrew",
            displayName: "Andrew Benedict",
            title: "Software Engineer",
            link1: "",
            link2: "https://www.linkedin.com/in/atbenedict/",
            link3: "https://github.com/atbenedict",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "I’ve studied everything from DNA to Desserts — am currently completing a curriculum of coding. Firefly is a way to give kids the hope that I’ve always been fortunate to have — the “hey! I can do this!” feeling about the world."
            
        },
        {
            name: "Aaron",
            displayName: "Aaron Harbaugh",
            title: "Software Engineer",
            link1: "aaronmharbaugh@gmail.com",
            link2: "https://www.linkedin.com/in/aaharbaugh/",
            link3: "https://github.com/aaharbaugh/",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "Art, programming and tech. I grew up in Chile, and speak fluent Spanish."
            
        },
        {
            name: "Enoka",
            displayName: "Enoka Jaona",
            title: "Software Engineer",
            link1: "Ejaona@gmail.com",
            link2: "https://www.linkedin.com/in/enoka-jaona",
            link3: "https://github.com/EJaona/",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "Oreos and peanut butter."
            
        },
        {
            name: "Robert",
            displayName: "Bobby Driskell",
            title: "Software Engineer",
            link1: "driskell.ba@gmail.com",
            link2: "https://www.linkedin.com/in/robert-driskell-326346184/            ",
            link3: "https://github.com/BobbyAD",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "I'm a full stack developer with experience as a working artist. I learn quickly, work well collaboratively, and have a strong sense of design. I love learning new things and mentoring others in those skills, whether it's helping friends with their art or learning and teaching a new technology to my colleagues."            
        },
        {
            name: "Leslie",
            displayName: "Leslie Thompson",
            title: "Software Engineer",
            link1: "LCRThompson@gmail.com",
            link2: "www.linkedin.com/in/leslie-thompson-",
            link3: "https://github.com/LCRT215",
            icon1: "far fa-envelope",
            icon2: "fab fa-linkedin",
            icon3: "fab fa-github-alt",
            bio: "I was a trained makeup and body painting artist for 10 years. I love building new things and making them beautiful. "
            
        }
    ])

    

    

    

    return(
        <div className="who_we_are">
            <div className="team_view" >
                
                {state.map(member => (
                    <Member 
                        name={member.name} 
                        title={member.title} 
                        github={member.github} 
                        linkedIn={member.linkedIn} 
                        displayName={member.displayName}
                        icon1={member.icon1}
                        icon2={member.icon2}
                        icon3={member.icon3}
                        link1={member.link1}
                        link2={member.link2}
                        link3={member.link3}
                        bio={member.bio}
                        />        
                ))
                }
                
            </div>
        </div>

    )
}