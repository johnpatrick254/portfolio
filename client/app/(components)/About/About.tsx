import React from 'react'
import Image from "next/image"
import separatorIMG from '../../(assets)/public/images/separator-black-7.svg';
import designIMG from '../../(assets)/public/images/design.svg';
import developmentIMG from '../../(assets)/public/images/maintenance-v-31.svg';
import maintenanceIMG from '../../(assets)/public/images/mentainSVG.svg';
import "../../(styles)/about/about.style.css";
export default function About() {
  return (
    <section id='about' >
        <div className="about-title"><p>ABOUT ME</p></div>
        <div className="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate in laboriosam aliquam! Alias corporis nobis, quos commodi quasi, explicabo animi pariatur aspernatur aut eum nihil, quisquam maiores ipsam quo placeat accusamus fugit architecto voluptatibus nisi saepe rerum eligendi neque! Aliquam non adipisci voluptatum esse aperiam, reiciendis quos? Quibusdam, repudiandae.</div>
        <div className="about-explore"><p>EXPLORE</p></div>
        <div className="about-separator">
        <Image
            src={separatorIMG}
            alt="spacer"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="about-feats">
          <div className="feat">
           
            <Image
            src={designIMG}
            alt="spacer"
            style={{ width: "100px", height: "100%" }}
          />
          <h2>DESIGN</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellat in molestias excepturi mollitia sint perspiciatis, dicta voluptate praesentium, vitae asperiores harum? Quibusdam praesentium facere, beatae similique explicabo asperiores atque?</p>
          </div>
          <div className="feat">
           
            <Image
            src={developmentIMG}
            alt="spacer"
            style={{ width: "100%", height: "100%" }}
          />
          <h2>DESIGN</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellat in molestias excepturi mollitia sint perspiciatis, dicta voluptate praesentium, vitae asperiores harum? Quibusdam praesentium facere, beatae similique explicabo asperiores atque?</p>
          </div>
          <div className="feat">
           
            <Image
            src={maintenanceIMG}
            alt="spacer"
            style={{ width: "100%", height: "100%" }}
          />
          <h2>DESIGN</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellat in molestias excepturi mollitia sint perspiciatis, dicta voluptate praesentium, vitae asperiores harum? Quibusdam praesentium facere, beatae similique explicabo asperiores atque?</p>
          </div>
        </div>
        <div className="about-separator">
        <Image
            src={separatorIMG}
            alt="spacer"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
    </section>
  )
}
