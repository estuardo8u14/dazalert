import React, { Fragment, useState, useEffect } from "react";

import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

function Notification() {
  //const queryParams = new URLSearchParams(window.location.search);
  //const id = queryParams.get("id");
  // new line start

  const [datadb, setDatadb] = useState({
    id: "",
    time: "",
    exchange: "",
    ticker: "",
    precio: "",
    indicadores: "",
    texto: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("https://dazapi.herokuapp.com/get_alerta").then((res) =>
      res.json().then((datadb) => {
        // Setting a data from api
        setDatadb({
          id: datadb.id,
          time: datadb.time,
          exchange: datadb.exchange,
          ticker: datadb.ticker,
          precio: datadb.precio,
          indicadores: datadb.indicadores,
          texto: datadb.texto,
        });
      })
    );
  }, []);

  return (
    <Fragment>
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content theme-dark-bg right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row">
              <div className="col-lg-12">
                <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                  <h2 className="fw-700 mb-4 mt-2 font-md text-grey-900 d-flex align-items-center">
                    Alertas
                    <span className="circle-count bg-warning text-white font-xsssss rounded-3 ms-2 ls-3 fw-600 p-2  mt-0">
                      1
                    </span>
                    <a
                      href="/defaultnotification"
                      className="ms-auto btn-round-sm bg-greylight rounded-3"
                    >
                      <i className="feather-hard-drive font-xss text-grey-500"></i>
                    </a>
                    <a
                      href="/defaultnotification"
                      className="ms-2 btn-round-sm bg-greylight rounded-3"
                    >
                      <i className="feather-alert-circle font-xss text-grey-500"></i>
                    </a>
                    <a
                      href="/defaultnotification"
                      className="ms-2 btn-round-sm bg-greylight rounded-3"
                    >
                      <i className="feather-trash-2 font-xss text-grey-500"></i>
                    </a>
                  </h2>

                  <ul className="notification-box">
                    <li key={datadb.id}>
                      <a
                        href="/defaultnotification"
                        className={`d-flex align-items-center p-3 rounded-3 ${datadb.texto}`}
                      >
                        <img
                          src={`assets/images/onfire.svg`}
                          alt="user"
                          className="w45 me-3"
                        />
                        <i
                          className={`text-white me-2 font-xssss notification-react ${datadb.exchange}`}
                        ></i>
                        <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20">
                          <strong>{datadb.ticker}</strong> Precio: $
                          {datadb.texto}
                          <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">
                            {" "}
                            {datadb.time}
                          </span>{" "}
                        </h6>
                        <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                      </a>
                    </li>
                  </ul>
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

export default Notification;
