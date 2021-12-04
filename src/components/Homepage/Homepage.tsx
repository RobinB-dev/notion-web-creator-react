import React from "react"
import { Link } from "react-router-dom"
import classes from "./Homepage.module.css"
import Header from '../Header/Header'
import SelferLogo from "../../assets/images/selferLogo.svg"
import RoundedImageBlock  from "../Block/RoundedImageBlock/RoundedImageBlock"
import RowImgText from "../Block/RowImgText/RowImgText"

import NotionLogo from "../../assets/images/Notion_app_logo.png"

import templateImg1 from "../../assets/images/imageTemplate1.svg"


import featureImg1 from "../../assets/images/featureImg1.svg"
import featureImg2 from "../../assets/images/featureImg2.svg"
import featureImg3 from "../../assets/images/featureImg3.svg"
import featureImg4 from "../../assets/images/featureImg4.svg"
import featureImg5 from "../../assets/images/featureImg5.svg"
import featureImg6 from "../../assets/images/featureImg6.svg"

import ImageCaption from "../Block/ImageCaption/ImageCaption"
import imageCaption1 from "../../assets/images/imageCaptionImg.png"
import imageCaption2 from "../../assets/images/imageCaptionImg2.png"
import imageCaption3 from "../../assets/images/imageCaptionImg3.png"

import imageTesti1 from "../../assets/images/testiImg.png"
import imageTesti2 from "../../assets/images/testiImg2.png"


const Homepage = () => {

  return (
    <>
    <Header/>
    <div className={classes.bodyContainer}>
      <section>
        <div className={classes.megaContainer}>
          <div className={classes.heroSectionObject}></div>
          <div className={classes.heroSectionContainer}>
            <div className={classes.heroSectionLeft}>
              <h1 className={classes.heroSectionTitle}>Create your website with the Selfer App</h1>
              <h3 className={classes.heroSectionDescription}>A quick stop between Notion and the web, to make your pages 
              <span className={classes.accentColor}> stand out</span>.</h3>
              <a className={classes.heroSectionLogin} href={`${process.env.REACT_APP_BASE_URL}/oauth`}>
                <img src={NotionLogo}></img>
                <span className={classes.accentColor}>Sign in with</span>Notion
              </a>
            </div>
            <div className={classes.heroSectionRight}>
              <img src={imageCaption1} alt="Blabla"></img>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.coloredSection}>
        <div className={classes.megaContainer}>
          <h2 className={classes.templateSectionTitle}>Build from scratch or use our <span className={classes.accentColor}>templates</span></h2>
          <div className={classes.templateSectionContainer}>
              <div className={classes.templateRow}>
                <ImageCaption
                  src={templateImg1}
                  alt="Image Caption 1"
                  content="Edit on Notion"
                />
                <ImageCaption
                  src={templateImg1}
                  alt="Image Caption 1"
                  content="Customize on Selfer"
                />
                <ImageCaption
                  src={templateImg1}
                  alt="Image Caption 1"
                  content="Upload your website"
                />
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className={classes.megaContainer}>
          <h2 className={classes.toolsSectionTitle}>Use our tools & features to customize your <span className={classes.accentColor}>Notion Page</span></h2>
          <div className={classes.toolsSectionRow}>
            <RowImgText
              alt="Bla bla"
              img={featureImg1}
              content="Choose your colors"
            />
            <RowImgText
              alt="Bla bla"
              img={featureImg2}
              content="Pick your own fonts"
            />
            <RowImgText
              alt="Bla bla"
              img={featureImg3}
              content="A 100% Responsie Website"
            />
          </div>
          <div className={classes.toolsSectionRow}>
            <RowImgText
              alt="Bla bla"
              img={featureImg4}
              content="Change & custom your domain name"
            />
            <RowImgText
              alt="Bla bla"
              img={featureImg5}
              content="Optimize your experience with SEO"
            />
            <RowImgText
              alt="Bla bla"
              img={featureImg6}
              content="Many more features are waiting for you !"
            />
          </div>          
        </div>
      </section>
      <section className={classes.coloredSection}>
        <div className={classes.megaContainer}>
          <h2 className={classes.stepSectionTitle}>From scratch to the end, always here to <span className={classes.accentColor}>help you</span></h2>
          <div className={classes.stepSection}>
          <ImageCaption
            src={imageCaption1}
            alt="Image Caption 1"
            content="Create your project on Notion or start with one of our template"
          />
          <ImageCaption
            src={imageCaption2}
            alt="Image Caption 2"
            content="Link Selfer and Notion by connect yourself on the site"
          />
          <ImageCaption
            src={imageCaption3}
            alt="Image Caption 3"
            content="You can now custom your project by entering the edition mode"
          />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.megaContainer}>
          <h2 className={classes.testiSectionTitle}>Join our <span className={classes.accentColor}>users</span></h2>
          <div className={classes.testimonialsContainer}>
            <RoundedImageBlock
              img={imageTesti1}
              alt="Blabla"
              content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
              name="Nolwenn, 32 ans"
            />
            <RoundedImageBlock
              img={imageTesti2}
              alt="Blabla"
              content="Je voulais faire mon portfolio mais vazy trop la flemme de coder, je passe mon temps à manger pas le temps pour ça. Cimer Selfer"
              name="Solhimhan H8al Halhabhy3, 20 ans"
            />
            <RoundedImageBlock
              img={imageTesti1}
              alt="Blabla"
              content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
              name="Nolwenn, 32 ans"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Homepage
