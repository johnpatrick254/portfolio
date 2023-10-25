import "./(styles)/home/home.style.css"
import Image from "next/image"
import separatorIMG from './(assets)/public/images/separator-white-2.svg';
import gitHubIcon from "./(assets)/public/images/ant-design-github-filled.svg"
import linkedInIcon from "./(assets)/public/images/entypo-social-linkedin-with-circle.svg"
import twitterIcon from "./(assets)/public/images/twitter-circle-svgrepo-com.svg"
import Link from "next/link";
import About from "./(components)/About/About";
import Skills from "./(components)/skills/Skills"
import Portfolio from "./(components)/portfolio/Portofolio";
import ContactForm from "./(components)/contact/contack";

export default function Home() {
  return (
    <main className='main'>
      <section className="details">
        <p>My name is John</p>
        <p className="main-text">I'm a Fullstack Web Developer</p>
        <div className="separator">
          <Image
            src={separatorIMG}

            alt="spacer"
            style={{ width: "100%", height: "100%" }}

          />
        </div>

        <div className="social">
          <Link href="https://www.linkedin.com/in/john-patrick-254ke/"
            target="_blank"
          >
            <Image
              src={linkedInIcon}
              alt="linkedin link"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <Link href="https://github.com/johnpatrick254"
            target="_blank"
          >
            <Image
              src={gitHubIcon}
              alt="github link"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <Link href="https://twitter.com/jpattrick538"
            target="_blank"
          >
            <Image
              src={twitterIcon}
              alt="twitter link"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </section>
      <About />
      <Skills/>
      <Portfolio/>
      <ContactForm/>
      
    </main>
  )
}
