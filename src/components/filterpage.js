import React, { Component } from "react";
import Filterbar from "../helpers/filterbar";
import styles from "../styles/filterpagestyle.module.css";
import Footer from "./footer";

export default function Filterpage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.background}></div>
      <section className={styles.siteHeader}>
        <h3 className={styles.headerTitle}>
          <span>İlgilendiğin</span> rotayı <span>hemen</span> araştırmaya{" "}
          <span>başla</span>
          <hr className={styles.divider}></hr>
        </h3>
        <Filterbar></Filterbar>
      </section>
      <section className={styles.resultSection}>
        <div className={styles.cardLayout}>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
        </div>
        <div className={styles.cardLayout}>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
          <div className={styles.cardExample}>
            <div className="cardImg">
              <img
                className={styles.cdImg}
                src={
                  "https://im.haberturk.com/2018/05/11/ver1526041497/1960101_620x410.jpg"
                }
                alt="example Image"
              />
            </div>
            <div className="cardHeader">İstanbulun en iyi yürüyüş yolu</div>
            <div className="cardSubtitle">#istanbul,#doğa,#gezi</div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
