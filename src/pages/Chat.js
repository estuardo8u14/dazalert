import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Leftnav />
        <Rightchat />

        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div
              className="middle-sidebar-left pe-0"
              style={{ maxWidth: "100%" }}
            >
              <div className="row">
                <div className="col-lg-12 position-relative">
                  <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                    <div className="chat-body p-3 ">
                      <div className="messages-content pb-5">
                        <div className="message-item">
                          <div className="message-user">
                            <figure className="avatar">
                              <img
                                src="assets/images/DAZlogo100.png"
                                alt="avater"
                              />
                            </figure>
                            <div>
                              <h5>DazAlert {""} (Support)</h5>
                              <div className="time">01:35 PM</div>
                            </div>
                          </div>
                          <div className="message-wrap">
                            Buenas tardes, Estamos a las ordenes.
                          </div>
                        </div>

                        <div className="message-item outgoing-message">
                          <div className="message-user">
                            <figure className="avatar">
                              <img src="assets/images/user.png" alt="avater" />
                            </figure>
                            <div>
                              <h5>Usuario</h5>
                              <div className="time">
                                01:35 PM
                                <i className="ti-double-check text-info"></i>
                              </div>
                            </div>
                          </div>
                          <div className="message-wrap">Muchas gracias.</div>
                        </div>

                        <div className="message-item">
                          <div className="message-user">
                            <figure className="avatar">
                              <img
                                src="assets/images/DAZlogo100.png"
                                alt="avater"
                              />
                            </figure>
                            <div>
                              <h5>DazAlert {""} (Support)</h5>
                              <div className="time">01:37PM</div>
                            </div>
                          </div>
                          <div className="message-wrap">
                            Contamos con servicio de chat de soporte las 24
                            horas
                          </div>
                        </div>

                        <div className="message-item outgoing-message">
                          <div className="message-user">
                            <figure className="avatar">
                              <img src="assets/images/user.png" alt="avater" />
                            </figure>
                            <div>
                              <h5>Usuario</h5>
                              <div className="time">
                                01:40 PM
                                <i className="ti-double-check text-info"></i>
                              </div>
                            </div>
                          </div>
                          <div className="message-wrap">
                            Me puedes mandar imagen de los pasos para iniciar mi
                            servicio porfavor.
                          </div>
                        </div>

                        <div className="message-item">
                          <div className="message-user">
                            <figure className="avatar">
                              <img
                                src="assets/images/DAZlogo100.png"
                                alt="avater"
                              />
                            </figure>
                            <div>
                              <h5>BDazAlert {""} (Support)</h5>
                              <div className="time">01:41 PM</div>
                            </div>
                          </div>
                          <figure>
                            <img
                              src="assets/images/product.png"
                              className="w-25 img-fluid rounded-3"
                              alt="avater"
                            />
                          </figure>
                        </div>

                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
                    style={{ width: "98%" }}
                  >
                    <form className="chat-form">
                      <button className="bg-grey float-left">
                        <i className="ti-microphone text-grey-600"></i>
                      </button>
                      <div className="form-group">
                        <input type="text" placeholder="Start typing.." />
                      </div>
                      <button className="bg-current">
                        <i className="ti-arrow-right text-white"></i>
                      </button>
                    </form>
                  </div>
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

export default Chat;
