import React from 'react'

export default function Landing() {
    return (
    <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-image-container">
                        <img className="front-float" src="../img/bg1front.png" alt="A Happy Couple" />
                        <img className="middle-float" src="../img/bg1middle.png" alt="Text: EXPERT PHOTOGRAPHY" />
                        <img className="middle-float-lower" src="../img/bg1middlelower.png" alt="TEXT: The best photographers in the world are here and ready to take the best photos of you and yours you've ever had" />
                        <a className="splash-link splash-link-alt" href="">CHECK IT OUT</a>
                        <img className="back-float" src="../img/bg1.jpg" alt="A Gorgeous Sunset Over A River" />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-image-container">
                        <img className="front-float2" src="../img/bg2front.png" alt="A Dog Jumping At A Ball" />
                        <img className="middle-float" src="../img/bg2middle.png" alt="TEXT: CAPTURE THE MOMENT" />
                        <img className="middle-float-lower" src="../img/bg2middlelower.png" alt="TEXT: Remember that moment in time forever when our photographers capture that magical moment on film" />
                        <a className="splash-link" href="">CHECK IT OUT</a>
                        <img className="back-float" src="../img/bg2.jpg" alt="A Beautiful Sandy Beach"  />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-image-container">
                        <img className="front-float3" src="../img/bg3front.png" alt="Front Of An Ice Rink" />
                        <img className="middle-float" src="../img/bg3middletext.png" alt="TEXT: CELEBRATE YOUR TRIUMPHS" />
                        <img className="middle-float-lower" src="../img/bg3middlelowertext.png" alt="TEXT: Whatever it is, wherever it is, we will be there to celebrate your victories with you." />
                        <img className="middle-float3" src="../img/bg3middle.png" alt="A Hockey Goalie Jutting Out Onto The Ice" /> 
                        <a className="splash-link" href="">CHECK IT OUT</a>
                        <img className="back-float3" src="../img/bg3.jpg" alt="The Ice Rink" />
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>    

    )
}
