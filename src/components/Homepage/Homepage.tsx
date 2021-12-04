import React from "react"
import { Link } from "react-router-dom"
import classes from "./Homepage.module.css"
import Header from '../Header/Header'
import SelferLogo from "../../assets/images/selferLogo.svg"
import RoundedImageBlock  from "../Block/RoundedImageBlock/RoundedImageBlock"
import ImageCaption from "../Block/ImageCaption/ImageCaption"
import imageCaption1 from "../../assets/images/imageCaptionImg.png"
import imageCaption2 from "../../assets/images/imageCaptionImg2.png"
import imageCaption3 from "../../assets/images/imageCaptionImg3.png"
import imageTesti1 from "../../assets/images/testiImg.png"


const Homepage = () => {

  return (
    <>
    <Header/>
    <div className={classes.bodyContainer}>
      <section>
        <div className={classes.heroSectionObject}></div>
        <div className={classes.heroSectionContainer}>
          <div className={classes.heroSectionLeft}>
            <h1 className={classes.heroSectionTitle}>Create your website with the Selfer App.</h1>
            <h3 className={classes.heroSectionDescription}>A quick stop between Notion and the web, to make your pages 
            <span className={classes.accentColor}> stand out</span>.</h3>
            <a className={classes.heroSectionLogin} href={`${process.env.REACT_APP_BASE_URL}/oauth`}><span className={classes.accentColor}>Sign in with</span> Notion</a>
            <div className={classes.terms}><span className={classes.boldStar}>*</span>We only need you to sign in using Notion so you can access your pages, and start building !</div>
          </div>
          <div className={classes.heroSectionRight}>
            <img src={imageCaption1} alt="Blabla"></img>
          </div>
        </div>
      </section>
      <section>
        
      </section>
      <section>
        <h2 className={classes.templateSectionTitle}>Build from scratch or use our <span className={classes.accentColor}>templates</span>.</h2>
        <div className={classes.templateSectionContainer}>
          <div className={classes.templateSectionLeft}>
            <div className={classes.templateLeftCol}>
              <div className={classes.templateLeftRow}>
                <img src={imageCaption1} alt="Blabla"></img>
                <img src={imageCaption1} alt="Blabla"></img>
                <img src={imageCaption1} alt="Blabla"></img>
              </div>
              <div className={classes.templateLeftRow}>
                <img src={imageCaption1} alt="Blabla"></img>
                <img src={imageCaption1} alt="Blabla"></img>
                <img src={imageCaption1} alt="Blabla"></img>
              </div>
            </div>
          </div>
          <div className={classes.templateSectionRight}>
            <img src={imageCaption1} alt="Blabla"></img>
          </div>
        </div>
      </section>
      <section>
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
      </section>
      <section>
        <h2 className={classes.testiSectionTitle}>Join our <span className={classes.accentColor}>users</span></h2>
        <div className={classes.testimonialsContainer}>
          <RoundedImageBlock
            img={imageTesti1}
            alt="Blabla"
            content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
            name="Nolwenn, 32 ans"
          />
          <RoundedImageBlock
            img={imageTesti1}
            alt="Blabla"
            content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
            name="Nolwenn, 32 ans"
          />
          <RoundedImageBlock
            img={imageTesti1}
            alt="Blabla"
            content="Des amis voulaient m'aider à faire mon site de photographie, mais pas besoin. Parce qu'avec Selfer, je sais le faire :)"
            name="Nolwenn, 32 ans"
          />
        </div>
      </section>
    </div>
    </>
  )
}

export default Homepage
