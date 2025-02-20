import initMainNavigation from '../lib/init-main-navigation';
import 'slick-carousel';
import ScrollReveal from 'scrollreveal';
import VanillaTilt from 'vanilla-tilt';
import Lottie from 'lottie-web';
import mockup1 from '../lotties-json-files/mockup1.json';
import mockup2 from '../lotties-json-files/mockup2.json';
import Coins from '../lotties-json-files/coins.json';

import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    init() {
        // JavaScript to be fired on all pages
    },

    finalize() {
        const homePage = document.querySelector('.home');

        gsap.registerPlugin(ScrollTrigger);

        // // Initialize smooth scrollbar
        // const scrollbar = Scrollbar.init(document.querySelector('html'), {
        //     damping: 0.1, // Adjust smoothness here
        //     continuousScrolling: true,
        // });

        // // Synchronize ScrollTrigger with smooth scrollbar
        // scrollbar.addListener(({ offset }) => {
        //     ScrollTrigger.update();
        // });

        // ScrollTrigger.scrollerProxy('html', {
        //     scrollTop(value) {
        //         return arguments.length ? scrollbar.scrollTo(value, 0, 0) : scrollbar.offset.y;
        //     },
        // });

        let homeHero = document.querySelector('.home-hero');

        const heroContainer = document.querySelector('.acfm-hero__container');

        const fixedBg1 = document.querySelector('.fixed-bg-1');

        const header = document.querySelector('.prfwp-header');

        const textCol1 = document.querySelector('.text-col-1');

        const section2 = document.querySelector('.section2');
        const section2Container = document.querySelector('.section2 .container');

        const section3 = document.querySelector('.section3');
        const starsBg = document.querySelector('.stars-bg');

        const section4 = document.querySelector('.section4');
        const section4Container = document.querySelector('.section4 .container');

        // const leftCoin = document.querySelector('.acfm-image:has(.left-coin)');
        // const rightCoin = document.querySelector('.acfm-image:has(.right-coin)');

        const coins = document.querySelector('.coins');

        const mountains1 = document.querySelector('.mountains1');
        const mountains2 = document.querySelector('.mountains2');
        const mountainsImage3 = document.querySelector('.acfm-image:has(.mountains3)');

        const mountains3 = document.querySelector('.mountains3');
        const mountains4 = document.querySelector('.mountains4');

        const row1 = document.querySelector('.section3 .acfm-row');
        const leftColFadeIn = document.querySelector('.leftColFadeIn');
        const rightColFadeIn = document.querySelector('.rightColFadeIn');
        const firstTextBlock = document.querySelector('.rightColFadeIn .firstTextBlock');
        const secondTextBlock = document.querySelector('.rightColFadeIn .secondTextBlock');
        const section3Btn = document.querySelector('.section3 .acfm-btn');

        const row2 = document.querySelector('.section3 .acfm-row:has(.leftColFadeIn2)');
        const leftColFadeIn2 = document.querySelector('.leftColFadeIn2');

        const firstTextBlock2 = document.querySelector('.rightColFadeIn2 .firstTextBlock');
        const cardList = document.querySelector('.rightColFadeIn2 .acfm-list-card');
        const leftColFadeIn2Btn = document.querySelector('.leftColFadeIn2 .acfm-btn');
        const row3 = document.querySelector('.acfm-row:has(.grow-title)');
        const growTitle = document.querySelector('.grow-title');

        const row4 = document.querySelector('.acfm-row:has(.acfm-list-card2)');
        const cards2 = document.querySelector('.acfm-list-card2');

        const row5 = document.querySelector('.acfm-row:has(.rightColFadeIn3)');

        const leftColFadeIn3 = document.querySelector('.leftColFadeIn3');

        const rightColFadeIn3 = document.querySelector('.rightColFadeIn3');

        const row6 = document.querySelector('.acfm-row:has(.rightColFadeIn4)');

        const rightColFadeIn4 = document.querySelector('.rightColFadeIn4');

        const footer = document.querySelector('.acfm-footer-main__container');
        const footerMain = document.querySelector('.acfm-footer-main');

        const sections = document.querySelectorAll('section');

        ////////// homepage parallax \\\\\\\\\

        if (homePage) {
            let mm = gsap.matchMedia();

            mm.add('(min-width: 1200px)', () => {
                gsap.set(sections, {
                    minHeight: '300vh',
                });

                gsap.set(footerMain, {
                    minHeight: '200dvh',
                });

                gsap.set(coins, {
                    yPercent: 170,
                });

                gsap.set(heroContainer, {
                    position: 'fixed',
                    bottom: '0',
                });

                gsap.set(starsBg, {
                    yPercent: 100,
                });

                gsap.set(mountains4, {
                    yPercent: 100,
                });

                gsap.set(leftColFadeIn, {
                    xPercent: -100,
                });

                gsap.set(section4, {
                    visibility: 'hidden',
                });

                gsap.set(section4Container, {
                    position: 'fixed',
                });

                gsap.to(header, {
                    scrollTrigger: {
                        trigger: mountains3,
                        start: 'bottom center',
                        end: 'bottom 90%',
                        scrub: 2,
                        toggleActions: 'play none reverse none',
                    },
                    backgroundColor: 'rgba(27,28,84,0.68)',
                    padding: '0',
                    duration: 0.1,
                });

                const firstSectionTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section2,
                        start: 'top bottom',
                        end: 'top bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                firstSectionTimeline
                    .to(heroContainer, {
                        bottom: '50%',
                    })
                    .to(
                        coins,
                        {
                            yPercent: -200,
                            duration: 1.5,
                        },
                        '<'
                    )
                    .to(
                        textCol1,
                        {
                            yPercent: -200,
                            opacity: 0,
                            duration: 1.5,
                        },
                        '<'
                    )
                    .to(
                        fixedBg1,
                        {
                            bottom: '50%',
                        },
                        '<'
                    )
                    .to(
                        section2Container,
                        {
                            position: 'fixed',
                            duration: 0.1, // Faster duration for 'position'
                        },
                        '<'
                    ) // Align this animation with the previous one
                    .to(
                        section2Container,
                        {
                            opacity: 1,
                            duration: 0.7, // Slower duration for 'bottom'
                            height: '100%',
                        },
                        '<'
                    );

                const thirdSectionTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section3,
                        start: 'top bottom',
                        end: 'top bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                thirdSectionTimeline
                    .to(starsBg, {
                        left: '0',
                        bottom: '0',
                        position: 'fixed',
                        yPercent: 0,
                        duration: 0.5,
                    })
                    .to(
                        mountainsImage3,
                        {
                            yPercent: -100,
                        },
                        '<'
                    )
                    .to(
                        fixedBg1,
                        {
                            // bottom: '100%',
                            yPercent: -100,
                            duration: 0.5,
                        },
                        '<'
                    )
                    .to(
                        heroContainer,
                        {
                            bottom: '100%',
                            opacity: 0,
                            duration: 0.3, // Slower duration for 'bottom'
                        },
                        '<'
                    )
                    .to(
                        section2Container,
                        {
                            bottom: '100%',
                            duration: 0.5, // Slower duration for 'bottom'
                        },
                        '<'
                    )
                    .to(
                        mountains4,
                        {
                            position: 'fixed',
                            bottom: '-70%',
                            yPercent: 0,
                            duration: 0.5,
                        },
                        '<'
                    )
                    .to(
                        row1,
                        {
                            position: 'fixed',
                            bottom: '0',
                            left: '0',
                        },
                        '<'
                    )
                    .to(
                        leftColFadeIn,
                        {
                            xPercent: 0,
                        },
                        '<'
                    )
                    .to(
                        mountains3,
                        {
                            visibility: 'hidden',
                        },
                        '<'
                    );

                gsap.fromTo(
                    firstTextBlock,
                    { y: '90rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: section3,
                            start: 'top+=1000 bottom',
                            end: 'top+=1000 bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    secondTextBlock,
                    { y: '70rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: section3,
                            start: 'top+=1500 bottom',
                            end: 'top+=1500 bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    section3Btn,
                    { y: '70rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: section3,
                            start: 'top+=2000 bottom',
                            end: 'top+=2000 bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.to(row1, {
                    scrollTrigger: {
                        trigger: section3Btn,
                        start: 'bottom top',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                    y: '-150rem',
                });

                gsap.fromTo(
                    firstTextBlock2,
                    { y: '50rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: firstTextBlock2,
                            start: 'bottom bottom',
                            end: 'bottom bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    cardList,
                    { y: '70rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: cardList,
                            start: 'bottom bottom',
                            end: 'bottom bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    leftColFadeIn2Btn,
                    { y: '80rem' }, // Initial state
                    {
                        y: '0', // Target state
                        scrollTrigger: {
                            trigger: leftColFadeIn2Btn,
                            start: 'clamp(bottom bottom)',
                            end: 'clamp(bottom 20%)',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    row2,
                    { y: '100rem', position: 'fixed' }, // Initial state
                    {
                        y: '0', // Moves into view
                        bottom: '35%',
                        scrollTrigger: {
                            trigger: section3Btn,
                            start: 'bottom top',
                            end: 'bottom bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                gsap.fromTo(
                    row2,
                    { y: '0' }, // Assume it's in place after the first animation
                    {
                        y: '-100rem', // Moves out of view upwards
                        scrollTrigger: {
                            trigger: leftColFadeIn2Btn,
                            start: 'bottom top',
                            end: 'bottom bottom',
                            toggleActions: 'play none reverse none',
                        },
                    }
                );

                const growTitleTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: leftColFadeIn2Btn,
                        start: 'bottom top',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                growTitleTl
                    .fromTo(
                        row3,
                        { y: '100rem', left: '50%', xPercent: -50, position: 'fixed', scale: 0.1, opacity: 0 }, // Initial state
                        {
                            y: '0', // Target state
                            bottom: '50%',
                            scale: 1.5,
                            ease: 'power2.out',
                            opacity: 1,
                        }
                    )
                    .to(growTitle, { scale: 1.5 }, '-=0.1');

                const cardsTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row4,
                        start: 'bottom top',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                cardsTl
                    .fromTo(
                        row4,
                        { y: '100rem', position: 'fixed', left: '50%', xPercent: -50 }, // Initial state
                        {
                            y: '0',
                            bottom: '27%',
                        }
                    )
                    .to(row3, { bottom: '77%' }, '<')
                    .to(cards2, { scale: 1.4 }, '<');

                const section4tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row4,
                        start: 'bottom+=500 top',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                section4tl
                    .to(section4, {
                        visibility: 'visible',
                    })
                    .to(
                        mountains4,
                        {
                            bottom: '100%',
                        },
                        '<'
                    )
                    .to(
                        row3,
                        {
                            bottom: '110%',
                        },
                        '<'
                    )
                    .to(
                        row4,
                        {
                            bottom: '110%',
                        },
                        '<'
                    )
                    .fromTo(
                        section4Container,
                        { left: '50%', xPercent: -50, opacity: 0 },
                        {
                            position: 'fixed',
                            bottom: '20%',
                            opacity: 1,
                        },
                        '<'
                    )
                    .fromTo(
                        rightColFadeIn3,
                        {
                            xPercent: 200,
                        },
                        {
                            xPercent: 0,
                        },
                        '+=0.2'
                    );

                const row5tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row4,
                        start: 'bottom+=2000 top',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                row5tl
                    .to(rightColFadeIn3, {
                        xPercent: -120,
                    })
                    .to(
                        leftColFadeIn3,
                        {
                            xPercent: -150,
                            opacity: 0,
                        },
                        '<'
                    )
                    .fromTo(
                        row6,
                        { yPercent: 100, position: 'fixed' },
                        {
                            yPercent: -100,
                        },
                        '<'
                    );

                const footertl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row4,
                        start: 'clamp(bottom+=2400 top)',
                        end: 'bottom bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                footertl
                    .fromTo(
                        footer,
                        {
                            bottom: '0%',
                            zIndex: 5,
                            height: '45vh',
                            left: '0',
                            maxWidth: '100%',
                            padding: '5rem 20rem',
                            background: '#342d5a',
                            position: 'absolute',
                            yPercent: 100,
                            opacity: '0',
                        },
                        {
                            position: 'fixed',
                            opacity: '1',
                            yPercent: 0,
                        }
                    )
                    .to(
                        row6,
                        {
                            yPercent: -180,
                        },
                        '<'
                    )
                    .to(
                        rightColFadeIn3,
                        {
                            yPercent: -70,
                        },
                        '<'
                    );

                const coinsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section2,
                        start: 'bottom top',
                        end: 'bottom 90%',
                        scrub: 2,
                        toggleActions: 'play none reverse none',
                    },
                });

                coinsTimeline
                    .to(coins, {
                        yPercent: -100,
                        ease: 'power1.inOut',
                        duration: 1.5,
                    })
                    .to(textCol1, {
                        opacity: 0,
                    });

                const mountainstl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mountains3,
                        start: 'top center',
                        end: 'top center',
                        toggleActions: 'play none reverse none',
                    },
                });

                mountainstl
                    .to(mountains3, { y: -100 })
                    .to(
                        mountains2,
                        {
                            y: -70,
                        },
                        '<'
                    )
                    .to(
                        mountains1,
                        {
                            y: 38,
                        },
                        '<'
                    )
                    .to(
                        coins,
                        {
                            yPercent: 0,
                        },
                        '<'
                    );
            });
        }

        /////////// inner pages effects \\\\\\\\\\\

        const flipImg = document.querySelector('.flip');

        if (flipImg) {
            const flipImagetl = gsap.timeline({
                scrollTrigger: {
                    trigger: flipImg,
                    start: 'top bottom',
                    end: 'top bottom',
                    toggleActions: 'play none none none',
                },
            });

            flipImagetl.fromTo(
                flipImg,
                { xPercent: -100, yPercent: 100, opacity: '0', duration: 2.5, ease: 'power2.inOut' },
                { xPercent: 0, yPercent: 0, opacity: '1', duration: 2, ease: 'power2.inOut' }
            );
        }

        const meetOurTeamImgs = document.querySelectorAll('.acfm-list-meet-our-team__item');

        if (meetOurTeamImgs) {
            meetOurTeamImgs.forEach(entry => {
                let image = entry.querySelector('.acfm-image');

                gsap.fromTo(
                    image,
                    { xPercent: -20, opacity: '0' },
                    {
                        xPercent: 0,
                        opacity: '1',
                        duration: 0.5,
                        ease: 'power2.in',
                        scrollTrigger: {
                            trigger: entry,
                            start: 'top 80%',
                            end: 'bottom 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
        }

        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.acfm-hero .acfm-title');
            const heroText = document.querySelector('.acfm-hero .acfm-text');

            if (!heroTitle) return; // Prevent errors if elements are missing

            const tl = gsap.timeline(); // Create a timeline

            tl.fromTo(
                heroTitle,
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 2, ease: 'power1.out' }
            ).fromTo(
                heroText,
                { yPercent: 150, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 2, ease: 'power2.out' },
                '-=1.5' // Start heroText animation 1.5s before heroTitle finishes
            );
        });


        const greenMountainsBg = document.querySelector('.green-mountains .acfm-bg-image');

        gsap.fromTo(
            greenMountainsBg,
            { yPercent: 100, opacity: '0', overflow: 'hidden' }, // Correctly formatted "from" values
            {
                yPercent: 0,
                opacity: '1',
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: greenMountainsBg,
                    start: 'top bottom+=1200',
                    end: 'bottom 90%',
                    toggleActions: 'play none none none',
                },
            }
        );


        /////////// safety & trust \\\\\\\\\

        const satPage = document.querySelector('.safety-and-trust');

        if (satPage) {
            let mm = gsap.matchMedia();
            mm.add('(min-width: 1200px)', () => {
                const satHero = document.querySelector('.sat-hero');
                const satHeroBg = document.querySelector('.sat-hero .acfm-bg-video video');
                const satHeroContainer = document.querySelector('.sat-hero .container');

                const suicideAstro = document.querySelector('.suicide-astronaut');

                const leftText = document.querySelector('.left-text');
                const rightText = document.querySelector('.right-text');

                const leftText2 = document.querySelector('.left-text2');
                const rightText2 = document.querySelector('.right-text2');

                const fixedBg = document.querySelector('.fixed-video');
                const fixedBgContainer = document.querySelector('.acfm-video:has(.fixed-video)');

                gsap.set(satHeroBg, {
                    yPercent: -5,
                });

                ScrollTrigger.create({
                    trigger: satHero,
                    start: 'top top',
                    // endTrigger: sections2,
                    end: 'bottom top',
                    pin: satHeroContainer,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                ScrollTrigger.create({
                    trigger: satHero,
                    start: 'top top',
                    // endTrigger: sections2,
                    end: 'bottom top',
                    pin: satHeroBg,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                const satFirstSecftl = gsap.timeline({
                    scrollTrigger: {
                        trigger: satHero,
                        start: 'bottom bottom',
                        end: 'top bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                ScrollTrigger.create({
                    trigger: satHero,
                    start: 'top top',
                    endTrigger: footerMain,
                    end: 'bottom bottom',
                    pin: suicideAstro,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                satFirstSecftl
                    .to(satHeroBg, { yPercent: -35, duration: 1.2, ease: 'power2.inOut' })
                    .to(satHeroContainer, { yPercent: -50, duration: 1.2, ease: 'power2.inOut' }, '<')
                    .fromTo(
                        suicideAstro,
                        { opacity: '0' },
                        { yPercent: -170, opacity: '1', duration: 1.2, ease: 'power2.inOut' },
                        '<'
                    );

                // gsap.set(leftText, {
                //     margin: '70rem 0',
                // })
                //
                // gsap.set(rightText, {
                //     margin: '70rem 0',
                // })

                ScrollTrigger.create({
                    trigger: leftText,
                    start: 'center center',
                    endTrigger: footerMain,
                    end: 'bottom top',
                    pin: leftText,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                const leftTexttl = gsap.timeline({
                    scrollTrigger: {
                        trigger: leftText,
                        start: 'center center',
                        end: 'bottom 90%',
                        toggleActions: 'play none reverse none',
                    },
                });

                leftTexttl
                    .fromTo(
                        leftText,
                        { xPercent: -70, opacity: '0' },
                        {
                            xPercent: 0,
                            opacity: '1',
                            duration: 1,
                            ease: 'power2.in',
                        }
                    )
                    .to(satHeroBg, { yPercent: -50, duration: 1.2, ease: 'power2.inOut' }, '<')
                    .to(satHeroContainer, { yPercent: -70, duration: 1.2, ease: 'power2.inOut' }, '<');

                ScrollTrigger.create({
                    trigger: rightText,
                    start: 'center center',
                    endTrigger: footerMain,
                    end: 'bottom top',
                    pin: rightText,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                const rightTexttl = gsap.timeline({
                    scrollTrigger: {
                        trigger: rightText,
                        start: 'center center',
                        end: 'bottom 90%',
                        toggleActions: 'play none reverse none',
                    },
                });

                rightTexttl
                    .fromTo(
                        rightText,
                        { xPercent: 70, opacity: '0' },
                        {
                            xPercent: 0,
                            opacity: '1',
                            duration: 1,
                            ease: 'power2.in',
                        }
                    )
                    .to(satHeroBg, { yPercent: -80, duration: 1.2, ease: 'power2.inOut' }, '<')
                    .to(satHeroContainer, { yPercent: -100, duration: 1.2, ease: 'power2.inOut' }, '<')
                    .to(leftText, { yPercent: -120, duration: 1.2, ease: 'power2.inOut' }, '<');

                ScrollTrigger.create({
                    trigger: leftText2,
                    start: 'center center',
                    endTrigger: footerMain,
                    end: 'bottom top',
                    pin: leftText2,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                const leftTexttl2 = gsap.timeline({
                    scrollTrigger: {
                        // Added missing comma before scrollTrigger
                        trigger: leftText2,
                        start: 'center center',
                        end: 'bottom 90%',
                        toggleActions: 'play none reverse none',
                    },
                });

                leftTexttl2
                    .to(rightText, {
                        yPercent: -90,
                        duration: 1,
                        ease: 'power2.in',
                    })
                    .to(leftText, { yPercent: -240, opacity: '0', duration: 1.2, ease: 'power2.inOut' }, '<')
                    .fromTo(
                        leftText2,
                        { xPercent: -70, opacity: 0 }, // Fixed object syntax
                        {
                            xPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .to(
                        fixedBg,
                        {
                            yPercent: 50,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    );

                ScrollTrigger.create({
                    trigger: rightText2,
                    start: 'center center',
                    endTrigger: footerMain,
                    end: 'bottom top',
                    pin: rightText2,
                    pinSpacing: false, // Prevents extra space after unpinning
                });

                const rightTexttl2 = gsap.timeline({
                    scrollTrigger: {
                        // Added missing comma before scrollTrigger
                        trigger: rightText2,
                        start: 'center center',
                        end: 'bottom 90%',
                        toggleActions: 'play none reverse none',
                    },
                });

                rightTexttl2
                    .to(leftText2, {
                        yPercent: -90,
                        duration: 1,
                        ease: 'power2.in',
                    })
                    .to(
                        rightText,
                        {
                            yPercent: -190,
                            opacity: '0',
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .fromTo(
                        rightText2,
                        { xPercent: 70, opacity: 0 }, // Fixed object syntax
                        {
                            xPercent: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .to(
                        fixedBg,
                        {
                            yPercent: 20,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    );

                gsap.set(fixedBg, {
                    position: 'fixed',
                    left: 0,
                    zIndex: -1,
                    width: '100%',
                    yPercent: 100,
                    top: 0,
                });
                gsap.set(fixedBgContainer, {
                    height: '10vh',
                });

                const footertl = gsap.timeline({
                    scrollTrigger: {
                        // Added missing comma before scrollTrigger
                        trigger: footerMain,
                        markers: true,
                        start: 'top bottom',
                        end: 'top bottom',
                        toggleActions: 'play none reverse none',
                    },
                });

                // ScrollTrigger.create({
                //     trigger: footerMain,
                //     start: 'center bottom',
                //     end: 'bottom bottom',
                //     pin: footerMain,
                //     pinSpacing: false, // Prevents extra space after unpinning
                //     markers: true, // Remove in production
                // });

                footertl
                    .to(
                        fixedBg,
                        {
                            yPercent: 0,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .fromTo(
                        footerMain,
                        {
                            zIndex: '1',
                            visibility: 'hidden',
                            width: '100%',
                            yPercent: 100,
                            bottom: '0',
                            ease: 'power2.in',
                        },
                        {
                            yPercent: 0,
                            duration: 1,
                            visibility: 'visible',
                            position: 'fixed',
                        },
                        '<'
                    )
                    .to(
                        leftText2,
                        {
                            yPercent: -300,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .to(
                        rightText2,
                        {
                            yPercent: -390,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    )
                    .to(
                        suicideAstro,
                        {
                            yPercent: -350,
                            duration: 1,
                            ease: 'power2.in',
                        },
                        '<'
                    );
            });
        }

        // gsap.to(suicideAstro, {
        //     scrollTrigger: {
        //         trigger: satHero,
        //         start: 'bottom bottom',
        //         end: 'top bottom',
        //         toggleActions: 'play none reverse none',
        //     },
        // })

        // meet our team modal

        let modal = document.querySelectorAll('.acfm-list-meet-our-team__backdrop');
        let modalComp = document.querySelectorAll('.acfm-list-meet-our-team__modal');
        let modalBtns = document.querySelectorAll('.acfm-list-meet-our-team__button');
        let cards = document.querySelectorAll('.acfm-list-meet-our-team__item');
        const closeBtns = document.querySelectorAll('.close-btn');
        const xBtn = document.querySelectorAll('.svg-x');

        modal.forEach((item, i) => {
            item.addEventListener('click', e => {
                if (!modalComp[i].contains(e.target)) {
                    item.style.display = 'none';
                }
            });
        });

        if (modal) {
            cards.forEach((card, i) => {
                const modalBtn = modalBtns[i];

                modalBtn.id = i;

                card.setAttribute('data-card-id', modalBtn.id);
            });

            modalBtns.forEach(button => {
                button.addEventListener('click', function() {
                    const buttonId = this.id;

                    const modal = document.querySelector(
                        `[data-card-id="${buttonId}"] .acfm-list-meet-our-team__backdrop`
                    );

                    if (modal) {
                        modal.style.display = 'flex';
                    }
                });
            });

            closeBtns.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.acfm-list-meet-our-team__backdrop');
                    if (modal) {
                        modal.style.display = 'none';
                    }
                });
            });

            xBtn.forEach(btn => {
                btn.addEventListener('click', function() {
                    const modal = this.closest('.acfm-list-meet-our-team__backdrop');
                    if (modal) {
                        modal.style.display = 'none';
                    }
                });
            });
        }

        // tilt js

        const tiltFunction = () => {
            let tiltCard = document.querySelectorAll('.tilt-card');

            if (tiltCard) {
                tiltCard.forEach(card => {
                    card.setAttribute('data-tilt-full-page-listening', '');
                    VanillaTilt.init(card, {
                        max: 20,
                        speed: 300,
                        perspective: 1500,
                    });
                });
            }
        };

        tiltFunction();

        document.querySelectorAll('.acfm-accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;

                button.classList.toggle('active');

                if (button.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = 0;
                }
            });
        });

        // lottie

        Lottie.loadAnimation({
            container: document.getElementById('mockup1'),
            animationData: mockup1,
        });

        Lottie.loadAnimation({
            container: document.getElementById('mockup2'),
            animationData: mockup2,
        });

        Lottie.loadAnimation({
            container: document.getElementById('coins'),
            animationData: Coins,
        });

        // Add toggle-sub-menu button to main navigation links with children
        initMainNavigation($('.topNavigation'));

        // Closing Login Popup on mobile when clicked outside
        const $loginPopup = '#loginPopup';
        $(document).click(function(e) {
            if ($(window).outerWidth() < 1199) {
                if (!$(e.target).parents($loginPopup).length > 0) {
                    $($loginPopup).collapse('hide');
                }
            }
        });

        // Toggles transparency background of top bar when scrolling has started (beyond 10px)
        const $stickies = $('.prfwp-header'),
            $window = $(window);
        let lastScrollTop = 0;
        $window
            .scroll(() => {
                if ($window.scrollTop() >= 10) {
                    $stickies.addClass('sticky');
                    // workaround to prevent sticky header from flickering on edge of the position
                    if ($window.scrollTop() >= 50) {
                        $stickies.addClass('no-padding');
                    } else if ($window.scrollTop() <= 10) {
                        $stickies.removeClass('no-padding');
                    }
                } else {
                    $stickies.removeClass('sticky');
                }

                const st = $window.scrollTop();
                if (st > lastScrollTop) {
                    if ($('.prfwp-burger').hasClass('collapsed')) {
                        $stickies.removeClass('show-nav');
                    }
                } else {
                    $stickies.addClass('show-nav');
                }
                lastScrollTop = st;
            })
            .scroll();

        // Adding target self to enable anchor linking (which was prevented by Angular)
        $('.menu-item.self a').attr('target', '_self');

        // Run animation when element is inView
        const $animations = $('.js-anim');
        if ($animations.length) {
            $animations.each((index, animationContainer) => {
                $(animationContainer).addClass('js-anim-paused');
                $(animationContainer).one('inview', (event, isInView) => {
                    if (isInView) {
                        setTimeout(() => {
                            $(animationContainer).toggleClass('js-anim-paused js-anim-run');
                        }, 100);
                    }
                });
            });
        }

        // Open Account Switcher
        const $placeholderBody = $('.acfm-login-placeholder'),
            $placeholderLeft = $('.acfm-login-placeholder__left'),
            $placeholderRight = $('.acfm-login-placeholder__right'),
            $placeholderBtn = $('.acfm-login-placeholder__button');

        $placeholderRight.hide();
        $placeholderBtn.click(function() {
            if (!$placeholderBody.hasClass('right')) {
                $placeholderBody.addClass('right');
                $placeholderLeft.fadeOut();
                $placeholderRight.fadeIn();
            } else {
                $placeholderBody.removeClass('right');
                $placeholderRight.fadeOut();
                $placeholderLeft.fadeIn();
            }
        });

        // Numbers animation for counters
        const $counterSection = $('.acfm-list-numbers');
        $counterSection.one('inview', function() {
            $('.acfm-list-numbers__title span').each(function() {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this)
                                .text()
                                .match(/^\d*\.?\d*$/),
                        },
                        {
                            duration: 4000,
                            easing: 'swing',
                            step: function(now) {
                                $(this).text(Math.ceil(now).toLocaleString());
                            },
                        }
                    );
                $counterSection.off('inview');
            });
        });

        // Footer Accordion
        const $footerLink = $('.acfm-footer-menu__anchor'),
            $footerContent = $('.acfm-footer-menu__menu');
        if ($(window).outerWidth() < 768) {
            $footerLink.click(function() {
                const currentAttr = $(this).attr('href');
                if ($(this).is('.active')) {
                    $(this).removeClass('active');
                    $footerContent.slideUp(300);
                } else {
                    $footerLink
                        .removeClass('active')
                        .filter(this)
                        .addClass('active');
                    $footerContent
                        .slideUp(300)
                        .filter(currentAttr)
                        .slideDown(300);
                }
            });
        }

        // Material animation for buttons
        const btn = document.querySelectorAll('.acfm-ripple');
        btn.forEach(el => {
            el.style.position = 'relative';
            el.style.overflow = 'hidden';
            el.addEventListener('click', function(e) {
                const x = e.offsetX,
                    y = e.offsetY,
                    ripples = document.getElementsByClassName('ripple');

                if (ripples.length < 10) {
                    // this restricts the user from creating lots of ripples
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    this.appendChild(ripple);

                    setTimeout(function() {
                        ripple.remove();
                    }, 1000);
                }
            });
        });

        // Slick Slider initialize
        /* global main */
        $('.acfm-slider').slick({
            rtl: !!main.rtl,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            arrows: false,
            speed: 1300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

        /* Slider FullWidth */
        $('.acfm-slider-testimonials').slick({
            rtl: !!main.rtl,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            arrows: false,
            speed: 1300,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });

        const $accountTypes = $('.acfm-homepage-slider');

        // Initialize slick carousel
        $accountTypes.slick({
            rtl: !!main.rtl,
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                let slideTitle = $(slider.$slides[i])
                    .find('li')
                    .attr('title');
                let slidePrice = $(slider.$slides[i])
                    .find('.acfm-homepage-slider__price')
                    .text() // jQuery's text() method fetches the text content of an element
                    .trim(); // Trim the text to remove whitespace
                return '<button class="tab tab-title">' + slideTitle + '</button>';
            },
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '',
            mobileFirst: true,
            adaptiveHeight: true,
            fade: true,
            cssEase: 'linear',
        });

        // Wait for the DOM to be ready, then insert the progress bar
        setTimeout(() => {
            const slickDots = document.querySelector('.acfm-homepage-slider .slick-dots');

            // Create the progress container as a DOM element
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            progressContainer.innerHTML = `
    <div class="progress-row">
        <div class="progress-bar"></div>
</div>
`;

            // Insert the progress container inside slickDots
            slickDots.appendChild(progressContainer);

            // Now initialize jQuery reference for progress bar after it has been added
            const $progressBar = $('.progress-bar');

            // Listen to the slide change event
            $accountTypes.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                const totalSlides = slick.$slides.length;

                // Calculate progress percentage based on the next slide index
                const progressPercentage = nextSlide === 0 ? 0 : (nextSlide / (totalSlides - 1)) * 100;

                $progressBar.css('width', progressPercentage + '%');
            });
        }, 100);

        const acWrapper = document.querySelector('.acfm-homepage-slider-wrapper');
        const accSwitcher = document.querySelectorAll('.acfm-homepage-slider__switcher');
        const allListItems = document.querySelectorAll('.acfm-homepage-slider__item');

        const tabsFunction = e => {
            const clicked = e.target.closest('.acfm-homepage-slider__switcher');

            let currentClass = clicked.classList[1];
            let modifiedClass = currentClass.replace('switcher-', '');

            if (!clicked) return;
            console.log(clicked);
            console.log(modifiedClass);
            accSwitcher.forEach(t => t.classList.remove('active'));

            clicked.classList.add('active');

            let listItems = document.querySelectorAll(`.${modifiedClass}`);

            allListItems.forEach(t => (t.style.display = 'none'));

            listItems.forEach(item => (item.style.display = 'block'));
        };

        if (acWrapper) {
            acWrapper.addEventListener('click', function(e) {
                tabsFunction(e);
            });
        }

        /* Slider Gradient */
        $('.acfm-list-card2').slick({
            rtl: !!main.rtl,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            arrows: false,
            speed: 1300,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: 'unslick',
                },
            ],
        });

        $('.acfm-account-types').slick({
            rtl: !!main.rtl,
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                let $slideTitle = $(slider.$slides[i])
                    .find('li')
                    .attr('title');
                return '<button class="tab tab-title">' + $slideTitle + '</button>';
            },
            infinite: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '',
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: 'unslick',
                },
            ],
        });

        document.querySelectorAll('.splide__arrow').forEach(el =>
            el.addEventListener('click', function() {
                let circleElement = document.querySelector('.splide__slide');

                let clonedElement = circleElement.cloneNode(true);

                circleElement.parentNode.replaceChild(clonedElement, circleElement);
            })
        );

        // change the header background on specific pages

        // Function to check if the current slug matches any in the list
        const slugsToCheck = [
            '/deposit/',
            '/personal-info/',
            '/account-summary/',
            '/transactions/',
            '/withdrawal/',
            '/documents-kyc/',
            '/refer-a-friend/',
            '/intrenal-transfer/',
            '/questionnaire/',
        ];

        const navbar = document.getElementById('menu-primary');

        function checkCurrentSlug() {
            const currentSlug = window.location.pathname;

            for (let i = 0; i < slugsToCheck.length; i++) {
                const slug = slugsToCheck[i];
                if (currentSlug.endsWith(slug)) {
                    // console.log(`The slug of the page is ${slug}`);
                    navbar.style.color = '#2f363d';
                    header.style.display = 'none';
                    return; // exit the loop once a match is found
                } else if (currentSlug.endsWith('/open-account/')) {
                    header.style.backgroundColor = '#fff';
                }
            }
        }

        // checkCurrentSlug();

        // scroll reveal
        function revealFunction() {
            if (window.innerWidth > 768) {
                ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(1)', {
                    origin: 'left',
                    duration: 1000,
                    distance: '100%',
                    easing: 'ease-in-out',
                    reset: false,
                });
                ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(2)', {
                    origin: 'bottom',
                    duration: 1000,
                    distance: '100%',
                    easing: 'ease-in-out',
                    reset: false,
                });
                ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(3)', {
                    origin: 'right',
                    duration: 1000,
                    distance: '100%',
                    easing: 'ease-in-out',
                    reset: false,
                });
                ScrollReveal().reveal('.acfm-list-Numbered-card__item:nth-child(4)', {
                    origin: 'left',
                    duration: 1300,
                    distance: '100%',
                    easing: 'ease-in-out',
                    reset: false,
                });
            }

            ScrollReveal().reveal('.gray_card:nth-child(1)', {
                duration: 900,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });
            ScrollReveal().reveal('.gray_card:nth-child(2)', {
                duration: 1100,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });
            ScrollReveal().reveal('.gray_card:nth-child(3)', {
                duration: 1250,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });

            ScrollReveal().reveal('.white_card:nth-child(1)', {
                duration: 900,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });
            ScrollReveal().reveal('.white_card:nth-child(2)', {
                duration: 1100,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });
            ScrollReveal().reveal('.white_card:nth-child(3)', {
                duration: 1250,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });

            ScrollReveal().reveal('.fade-left-col', {
                origin: 'left',
                duration: 1300,
                distance: '50px',
                easing: 'ease-in-out',
                reset: false,
            });
            ScrollReveal().reveal('.our-platforms .acfm-image', {
                beforeReveal: function(domEl) {
                    // Animate the element's position before reveal
                    domEl.style.transition = 'transform 1.7s ease';
                    domEl.style.transform = 'translateX(-500px)'; // Move 100px to the right (adjust as needed)
                },
                afterReveal: function(domEl) {
                    // Reset the element's position after reveal
                    domEl.style.transition = 'transform 1.7s ease'; // Disable transition for immediate change
                    domEl.style.transform = 'translateX(-500px)'; // Move back to original position
                },
                // afterReset: function (domEl) {
                //     // Reset the element's position when hidden
                //     domEl.style.transform = 'translateX(1000px)'; // Move back to the transformed position
                // },
            });

            ScrollReveal().reveal('.our-platforms .acfm-image .right-reveal', {
                beforeReveal: function(domEl) {
                    // Animate the element's position before reveal
                    domEl.style.transition = 'transform 1.7s ease';
                    domEl.style.transform = 'translateX(500px)'; // Move 100px to the right (adjust as needed)
                },
                afterReveal: function(domEl) {
                    // Reset the element's position after reveal
                    domEl.style.transition = 'transform 1.7s ease'; // Disable transition for immediate change
                    domEl.style.transform = 'translateX(500px)'; // Move back to original position
                },
            });

            ScrollReveal().reveal('img.hero-img', {
                origin: 'right',
                duration: 1400,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });

            ScrollReveal().reveal('.fade-up', {
                origin: 'bottom',
                duration: 1200,
                distance: '100%',
                easing: 'ease-in-out',
                reset: false,
            });

            ScrollReveal().reveal('.grow-img', {
                delay: 200, // Delay before the animation starts in milliseconds
                duration: 1000, // Duration of the animation in milliseconds
                scale: 1, // Initial scale of the element
                distance: '50px', // Distance the element moves during the animation
                origin: 'center', // Origin of the animation
                easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function for the animation
                reset: false, // Reveal the element only once
            });
        }

        revealFunction();
    },
};

let amountScrolled = 200;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function() {
    $('html, body').animate(
        {
            scrollTop: 0,
        },
        800
    );
    return false;
});

window.addEventListener('load', () => {
    document.getElementById('page-loader').remove();
});
