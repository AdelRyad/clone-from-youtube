
// toggle spin class on icon
document.querySelector( ".toggle-settings .fa-gear" ).onclick = function () 
{
    // toggle fa-spin
    this.classList.toggle( "fa-spin" );
    // toggle open
    document.querySelector( ".settings-box" ).classList.toggle( "open" );
    // close nav
    toggleNav();
};




// select landing page element
let landingPage = document.querySelector( ".landing-page" );

// Get array of imgs
let imgs = [ "1.webp", "4.webp", "3.webp", "5.webp" ];



// switch colors
const colors = document.querySelectorAll( ".colors-list li" );

colors.forEach( li =>
{
    li.addEventListener( "click", ( e ) =>
    {
        // set color on root
        document.documentElement.style.setProperty( "--main--color", e.target.dataset.color );
        // save in local storage
        localStorage.setItem( "color", e.target.dataset.color );
        colors.forEach( li =>
        {
            li.classList.remove( "active" );
        } );
        e.target.classList.add( "active" );

    } );
} );

function setColor ()
{
    let sColor = localStorage.getItem( "color" );
    if ( sColor !== null )
    {
        document.documentElement.style.setProperty( "--main--color", sColor );
        colors.forEach( li =>
        {
            li.classList.remove( "active" );
            if ( sColor === li.dataset.color )
            {
                li.classList.add( "active" );
            }
        } );
    }
}
setColor();




// random background option
let backgroundOpton;

// variable to clear the interval
let theInterval;
// function random images
function randomImages ()
{
    if ( backgroundOpton === true )
    {
        // get random number

        theInterval = setInterval( () =>
        {
            let randomNumber = Math.floor( Math.random() * imgs.length );
            // change background url
            landingPage.style.backgroundImage = `url("images/` + imgs[ randomNumber ] + `")`;

        }, 5000 );
    }

};

randomImages();

// switch backgrounds
const randomBack = document.querySelectorAll( ".random-backgrounds span" );

randomBack.forEach( span =>
{
    span.addEventListener( "click", ( e ) =>
    {

        randomBack.forEach( span =>
        {
            span.classList.remove( "active" );
        } );
        e.target.classList.add( "active" );

        if ( e.target.dataset.background === 'yes' )
        {
            backgroundOpton = true;
            randomImages();
            localStorage.setItem( "back-ground", true );
        }
        else
        {
            backgroundOpton = false;
            clearInterval( theInterval );
            localStorage.setItem( "back-ground", false );
        }

    } );
} );
// check the backgroun in local storage
let backgroundLocal = localStorage.getItem( "back-ground" );

if ( backgroundLocal !== null )
{
    if ( backgroundLocal === 'true' )
    {
        backgroundOpton = true;
    }
    else
    {
        backgroundOpton = false;
    }
    // remove active class

    document.querySelectorAll( ".random-backgrounds span" ).forEach( e =>
    {
        e.classList.remove( "active" );
    }
    );
    if ( backgroundLocal === 'true' )
    {
        document.querySelector( ".yes" ).classList.add( "active" );
        randomImages();
    } else
    {
        document.querySelector( ".no" ).classList.add( "active" );
    }

}




// select skills
let ourSkills = document.querySelector( ".skills" );



// create popup with the image
let ourGallery = document.querySelectorAll( ".gallery img" );

ourGallery.forEach( img =>
{
    img.addEventListener( "click", ( e ) =>
    {
        // create overlay element
        let overlay = document.createElement( "div" );

        // add class to overlay 
        overlay.classList.add( "popup" );
        // append overlay to body 
        document.body.appendChild( overlay );
        // craete popup
        let popupBox = document.createElement( "div" );
        popupBox.classList.add( "popup-box" );

        if ( img.alt !== null )
        {
            let heading = document.createElement( "h3" );
            let headingTitle = document.createTextNode( img.alt );

            heading.appendChild( headingTitle );
            popupBox.appendChild( heading );
        }
        // create th image 
        let popupImage = document.createElement( "img" );
        popupImage.src = img.src;
        // append image to popup 
        popupBox.appendChild( popupImage );
        overlay.appendChild( popupBox );

        // create close 
        let close = document.createElement( "span" );
        let closeBtn = document.createTextNode( "x" );
        close.appendChild( closeBtn );
        close.classList.add( "close-btn" );

        popupBox.appendChild( close );
        // close nav
        toggleNav();
    } );
} );

// close 
document.addEventListener( "click", ( e ) =>
{
    if ( e.target.className === 'close-btn' )
    {
        // remove the popup
        e.target.parentNode.remove();
        document.querySelector( '.popup' ).remove();
    };
} );




// animations

function animation ()
{
    let left2 = document.querySelector( ".left-2 .content" );
    let left1 = document.querySelector( ".left-1 .content" );
    let right1 = document.querySelector( ".right-1 .content" );
    let right2 = document.querySelector( ".right-2 .content" );
    if ( window.scrollY > 1600 )
    {
        left1.style.transform = 'translate(0%)';
        right1.style.transform = 'translate(0%)';

    }
    else
    {
        left1.style.transform = 'translate(-100%)';
        right1.style.transform = 'translate(100%)';
    }
    if ( window.scrollY > 1900 )
    {
        left2.style.transform = 'translate(0%)';
        right2.style.transform = 'translate(0%)';
    } else
    {
        right2.style.transform = 'translate(100%)';
        left2.style.transform = 'translate(-100%)';
    }

};
function animation2 ()
{
    let allSkills = document.querySelectorAll( ".skill-box .progress span" );
    if ( window.scrollY > 600 )
    {
        allSkills.forEach( skill =>
        {
            skill.style.width = skill.dataset.progress;
        } );
    }
    else
    {
        allSkills.forEach( skill =>
        {
            skill.style.width = '0';
        } );
    }
};


window.onscroll = function ()
{
    animation();
    animation2();

};

// mobile nav 
const navBtn = document.querySelector( '.mobile-nav' );
const mobileNav = document.getElementById( 'links' );

navBtn.onclick = () =>
{
    if ( mobileNav.classList.contains( 'links' ) )
    {

        navBtn.innerHTML = '&#10006;';
        mobileNav.classList.add( 'nav-active' );
        mobileNav.classList.remove( 'links' );
        document.querySelector( ".settings-box" ).classList.remove( "open" );

    }
    else
    {
        toggleNav();
    }
};
const toggleNav = () =>
{
    navBtn.innerHTML = '&#9776';
    mobileNav.classList.add( 'links' );
    mobileNav.classList.remove( 'nav-active' );
};


// select all bullets

const allBullets = document.querySelectorAll( ".nav-bullets .bullet" );

// select all links
const allLinks = document.querySelectorAll( ".links a" );

function transport ( elements )
{
    elements.forEach( ele =>
    {
        ele.addEventListener( "click", ( e ) =>
        {
            e.preventDefault();
            document.querySelector( e.target.dataset.section ).scrollIntoView( {
                behavior: 'smooth',
            } );
            toggleNav();
        } );

    } );
};


transport( allBullets );
transport( allLinks );
