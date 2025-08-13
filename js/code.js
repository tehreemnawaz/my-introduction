$(document).ready(function(){
    //This is personal data U can change all of data in here!!
    const personal_data = {
        name:'Aisha Fatima',                                        //personal name
        age:'22',                                                   //personal age
        country:'India',                                          //personal country
        birth:'2003-02-16',                                         //birthday
        lan:['English', 'Hindi', 'Japanese'],                    //language
        aboutme:`I’m a Pakistan-based developer specializing in website development, web scraping, automation, Shopify, ecommerce solutions, Web3, and smart contract development. With a strong mix of technical skill and entrepreneurial spirit, I create tools, platforms, and integrations that help businesses run smarter and faster.
                    I’ve built everything from custom websites and Shopify stores with automated workflows that save hours of manual work, to data extraction scripts that power business insights, to decentralized applications that connect ecommerce with blockchain technology.
                    My journey started as the owner of a small online business, where I handled everything from product sourcing to full-stack development. Working remotely with international clients taught me how to manage projects independently, adapt to diverse needs, and deliver results that make a real impact.
                    Whether it’s building a high-performance website, scraping data at scale, or deploying a secure smart contract, I bring precision, creativity, and efficiency to every project I take on. `, 
        photo:'images/me.png',
        projects:[
            {
                title : 'Portfolio',
                pro_url:'http://arne-D.vercel.app',
                pro_image:'images/projects/1.png',
                source:'https://github.com/Arn-2000-D/arne-D.git',
                description:'That is my portfolio I built my own self with HTML and JQery.'
            },
            {
                title : 'Sport-facility',
                pro_url:'http://sport-shop-1.vercel.app',
                pro_image:'images/projects/2.png',
                source:'https://github.com/Arn-2000-D/sport-shop-1',
                description:'React Vite, API Integration, Lovable.dev, Cursor, tailwind css'
            },
            {
                title : 'Pet',
                pro_url:'http://furggo.com',
                pro_image:'images/projects/3.png',
                source:'https://github.com/Arn-2000-D/arne-D.git',
                description:'Theme, Shopify, Payment, Delivery, Design-landing, Card'
            },
            {
                title : 'Toilet Essential',
                pro_url:'http://gardnex.com',
                pro_image:'images/projects/4.png',
                source:'https://shopify.com',
                description:'Theme, Shopify, Bundles App, Subscription App'
            },
            {
                title : 'SaaS-NEXT',
                pro_url:'http://next-saas-starter.vercel.app',
                pro_image:'images/projects/5.png',
                source:'At the first you have to contact me.',
                description:'Next.js, API Integration, Design, SPA'
            },
            {
                title : 'Vitalisse',
                pro_url:'http://vitalysse.com',
                pro_image:'images/projects/6.png',
                source:'At the first you have to contact me.',
                description:'React, Node,  Api, Express, Payment Integration'
            },
            {
                title : 'Sport-facility',
                pro_url:'http://sport-shop-2-two.vercel.app',
                pro_image:'images/projects/7.png',
                source:'https://github.com/Arn-2000-D/sport-shop-2',
                description:'React Vite, API Integration, Lovable.dev, Cursor, tailwind css'
            },
            {
                title : 'Envelope',
                pro_url:'http://empressstationery.com',
                pro_image:'images/projects/8.png',
                source:'At-the-first-you-have-to-contact-me.DM',
                description:'wordpress, theme, html, Mysql, PHP, Api integration'
            },
            {
                title : 'Instapill',
                pro_url:'http://instapill.com',
                pro_image:'images/projects/9.png',
                source:'At-the-first-you-have-to-contact-me.DM',
                description:'shopify , category, bundles, subcriptions, header design'
            },
            {
                title : 'TG-Trading-Bot',
                pro_url:'At the first you have to contact me.',
                pro_image:'images/projects/10.png',
                source:'At-the-first-you-have-to-contact-me.DM',
                description:'Telegram Api, Automation, Trading-strategy, Node.js, Javascript'
            },
            {
                title : 'Br-Tax-Scraping',
                pro_url:'At the first you have to contact me.',
                pro_image:'images/projects/11.png',
                source:'At-the-first-you-have-to-contact-me.DM',
                description:'CHATCHA, Python, PUPITEER-REAL_BROWSER, API TOOLS, NODE, GENERATE-CPF'
            },
            {
                title : 'Home Base',
                pro_url:'homebaseharmony.com',
                pro_image:'images/projects/12.png',
                source:'At-the-first-you-have-to-contact-me.DM',
                description:'React, Node , Marketing, Front end Design, Api Integration'
            },
            
            
        ],
        contact_adress : {
            tg:'+380 93 971 37 93',
            wa:'+380 93 971 37 93',
            dc:'sus_sos_o9',
            gh:'Arn-2000-D'
        },
        experience:[
            'I graduated the Bachelor Of Computer Science University (BcompSC) from 2010~2014.<br> I mastered C++, JS, PHP, Python in Here as a high mark.',
            'I founded the small IT team with my partners and build some projects with html, php, javascript , c++, mysql',
            'I increase my team to build new dropshipping site to get more money. while I work for that I made so many shopping sites as a engineer.'
        ]
    }

    // Landing page typing  effect data
    const typed = new Typed('.auto-type', {
        strings: [ 'E-commerce', 'Blockchain','Web Development','DB GOD', 'Bot making', 'Scraping automation'],
        typeSpeed: 100,
        backSpeed: 120,
        loop: true
    });
    for(let i = 0 ; i < personal_data.projects.length ; i++){
        let ht = `<div class="card">
                    <div class="card-inner" style="--clr:#fff;">
                        <div class="box">
                            <div class="imgBox">
                                <img src=${personal_data.projects[i].pro_image} alt="Trust & Co.">
                            </div>
                            <div class="icon">
                                <a href=${personal_data.projects[i].pro_url} class="iconBox" target="_blank"> <span class="material-symbols-outlined">
                                    V
                                </span></a>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <h3>${personal_data.projects[i].title}</h3>
                        <p>${personal_data.projects[i].description}</p>
                        <ul>
                            <a href="${personal_data.projects[i].pro_url}" target="_blank"><li class="site">visit site</li></a>
                            <a href="${personal_data.projects[i].source}" target="_blank"><li class="github">github</li></a>
                        </ul>
                    </div>
                </div>`
        $(".project_stage").append(ht);
    }


    //this is appending conent section!
    $(".logo-title").text(personal_data.name);
    $(".about-content").text(personal_data.aboutme);
    $(".myname").text(personal_data.name);
    $(".experience_first").text(personal_data.experience[0]);
    $(".experience_second").text(personal_data.experience[1]);
    $(".experience_third").text(personal_data.experience[2]);
    


    $(document).on("mousemove", function (e) {
    // Create multiple stars (e.g., 5)
        for (let i = 0; i < 10; i++) {
        let dx = (Math.random() - 0.5) * 100 + "px";
        let dy = (Math.random() - 0.5) * 100 + "px";

        let $star = $("<div class='star'></div>").css({
            left: e.pageX + "px",
            top: e.pageY + "px",
            "--dx": dx,
            "--dy": dy
        });
        $("body").append($star);
        // Remove star after 1 second
        setTimeout(() => $star.remove(), 1000);
        }
    });


})