import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homeBody.css";
import {
  FaGlobeAmericas,
  FaImage,
  FaRegFilePdf,
  FaPollH,
  FaSmile,
  FaCalendar,
  FaCheckCircle,
  FaComment,
  FaRetweet,
  FaHeart
} from "react-icons/fa";

import img from "./img.png";
import img2 from "./img2.jpg";



const HomeBody = () => {
  return (
    <>
      <div className="row body_margin gx-0">
        <div className="col-7" style={{ height: "1500px" }}>
          <div className="row  m-3">
            <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-1 ms-3 " style={{ height: "150px" }}>
              <div className="row">
                <input
                  style={{ height: "55px" }}
                  type="text"
                  className=" col-10 rounded-0 border-0 bg-white"
                  placeholder="What's happening?"
                />
              </div>
              <div className="row">
                <h6 className="text-primary">
                  <FaGlobeAmericas /> every one can replay
                </h6>
                <hr className="mt-2" />

                <div className="row p-0">
                  <div className="col-10 p-0">
                    <ul>
                      <li>
                        <a href="#">
                          <FaImage />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaRegFilePdf />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaPollH />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaSmile />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaCalendar />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <button
                      width="70px"
                      className="btn btn-primary rounded-pill"
                    >
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr width="100%" style={{height:1.5}}/>
          
          <div className="row m-3">
          <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-3 tweet">
                <p className="m-0">Abdelsatar Ahmed <FaCheckCircle className="text-primary"/>
                <span className="text-secondary ms-2 fs-6">23hr</span>
                </p>
                <h6>It’s a Chelsea thing ... 💙💙</h6>
                <img style={{borderRadius:'20px 20px 20px 20px'}} src={img2} width = '400px' height='500px'/>
                <ul className="ms-2">
                  <li><a href="#"><FaComment />21K</a></li>
                  <li><a href="#"><FaRetweet/>3K</a></li>
                  <li><a href="#"><FaHeart/>76.2M</a></li>
                </ul>
            </div>
            
            <hr/>

          </div>
          <div className="row m-3">
          <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-3 tweet">
                <p className="m-0">Abdelsatar Ahmed <FaCheckCircle className="text-primary"/>
                <span className="text-secondary ms-2 fs-6">23hr</span>
                </p>
                <h6>It’s a Chelsea thing ... 💙💙</h6>
                <img style={{borderRadius:'20px 20px 20px 20px'}} src={img2} width = '400px' height='500px'/>
                <ul className="ms-2">
                  <li><a href="#"><FaComment />21K</a></li>
                  <li><a href="#"><FaRetweet/>3K</a></li>
                  <li><a href="#"><FaHeart/>76.2M</a></li>
                </ul>
            </div>
            
            <hr/>

          </div>

          <div className="row m-3">
          <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-3 tweet">
                <p className="m-0">Abdelsatar Ahmed <FaCheckCircle className="text-primary"/>
                <span className="text-secondary ms-2 fs-6">23hr</span>
                </p>
                <h6>It’s a Chelsea thing ... 💙💙</h6>
                <img style={{borderRadius:'20px 20px 20px 20px'}} src={img2} width = '400px' height='500px'/>
                <ul className="ms-2">
                  <li><a href="#"><FaComment />21K</a></li>
                  <li><a href="#"><FaRetweet/>3K</a></li>
                  <li><a href="#"><FaHeart/>76.2M</a></li>
                </ul>
            </div>
            
            <hr/>

          </div>

          <div className="row m-3">
          <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-3 tweet">
                <p className="m-0">Abdelsatar Ahmed <FaCheckCircle className="text-primary"/>
                <span className="text-secondary ms-2 fs-6">23hr</span>
                </p>
                <h6>It’s a Chelsea thing ... 💙💙</h6>
                <img style={{borderRadius:'20px 20px 20px 20px'}} src={img2} width = '400px' height='500px'/>
                <ul className="ms-2">
                  <li><a href="#"><FaComment />21K</a></li>
                  <li><a href="#"><FaRetweet/>3K</a></li>
                  <li><a href="#"><FaHeart/>76.2M</a></li>
                </ul>
            </div>
            
            <hr/>

          </div>

          <div className="row m-3">
          <div className="col-1 mt-1">
              <img
                className="rounded-circle"
                src={img}
                style={{ height: "55px", width: "55px" }}
                alt="profile_image"
              />
            </div>
            <div className="col-10 m-3 tweet">
                <p className="m-0">Abdelsatar Ahmed <FaCheckCircle className="text-primary"/>
                <span className="text-secondary ms-2 fs-6">23hr</span>
                </p>
                <h6>It’s a Chelsea thing ... 💙💙</h6>
                <img style={{borderRadius:'20px 20px 20px 20px'}} src={img2} width = '400px' height='500px'/>
                <ul className="ms-2">
                  <li><a href="#"><FaComment />21K</a></li>
                  <li><a href="#"><FaRetweet/>3K</a></li>
                  <li><a href="#"><FaHeart/>76.2M</a></li>
                </ul>
            </div>
            
            <hr/>

          </div>

        </div>
        <div className="col-5 bg-secondary" style={{ height: "1500px" }}></div>
      </div>
    </>
  );
};

export default HomeBody;
