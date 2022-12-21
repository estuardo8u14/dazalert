import React, { Component, Fragment } from "react";

import Header from "../components/Header";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

//import Friends from "../components/Friends";
//import Contacts from "../components/Contacts";
import Group from "../components/Group";
import Events from "../components/Events";
//import Createpost from "../components/Createpost";
import Memberslider from "../components/Memberslider";
//import Friendsilder from "../components/Friendsilder";
//import Storyslider from "../components/Storyslider";
//rev
import Postview from "../components/Postview";
import Load from "../components/Load";
import Profilephoto from "../components/Profilephoto";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="row feed-body">
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                  <Memberslider />
                  {/* <Createpost /> */}
                  <Postview
                    id="32"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Deybi Ceron"
                    time="22 min ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Postview
                    id="31"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Deybi Ceron"
                    time="22 min ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Postview
                    id="33"
                    postvideo=""
                    postimage="post.png"
                    avater="user.png"
                    user="Daniel Del Cid"
                    time="2 hour ago"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."
                  />
                  <Load />
                </div>
                <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                  <Group />
                  <Events />
                  <Profilephoto />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popupchat />
        <Appfooter />
      </Fragment>
    );
  }
}

export default Home;
