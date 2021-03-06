import React from "react";
import headerImg from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";
import { Link } from "react-router-dom";

const HomeHead = () => {
    return (
        <section className="homeheader">
            <img className="homeheader__img" src={headerImg} alt="hero" />
            <div className="homeheader__content">
                <h1 className="content__title">
                    Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img className="decoration" src={decoration} alt="dec" />
                <div className="homeheader__btns">
                    <Link className="button" to="/logowanie">
                        <span>ODDAJ RZECZY</span>
                    </Link>
                    <Link className="button" to="/logowanie">
                        <span>ZORGANIZUJ ZBIÓRKĘ</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHead;