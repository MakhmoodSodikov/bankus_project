import React, {Component} from "react";

export default class Carousel extends Component{
    render() {
        return (<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://static.timesofisrael.com/www/uploads/2019/08/iStock-1026040678-e1565765520854.jpg"
                         className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="http://www.nationalbusinessmirror.com/wp-content/uploads/2018/11/Bank-credit.jpg"
                         className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://regnum.ru/uploads/pictures/news/2018/10/09/regnum_picture_1539042602231378_normal.jpg"
                        className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
               data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
               data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>)
    }
}
