import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import EmblaCarousel from '../components/EmblaCarousel'
import wakeReliefLogo from '../public/wr-logo-sized.png'
import wrAbout from '../public/wr_about.png'
import styles from '../styles/Home.module.scss'
import { FaInfoCircle } from "react-icons/fa";


const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wake Relief</title>
        <meta name="description" content="Raleigh&apos;s trusted all-volunteer emergency food pantry since 1975." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* !TODO!: get correct image with resolution */}
      <div className={styles.header}>
        <Image
          src={wakeReliefLogo}
          alt="Wake Relief Logo"
          width={340}
          height={228}
        />
      </div>


      <main className={styles.main}>


        <div className={styles.hero_bg}>
          <h1>Providing food for <br /> Wake County Residents in Need </h1>
          <div className={styles.hero_subheader}>
            Raleigh&apos;s trusted all-volunteer emergency food pantry since 1975. Dedicated to helping Wake County residents in need of nutritional meals.
          </div>
          <div>
            <a className={styles.hero_btn} href="#learn-more">
              See how you can help
            </a>
          </div>

        </div>

        <div className={styles.infobox}>
          <div>
            <div className={styles.infobox_hours}>
              <h2>We&apos;re Open</h2>
              <div className={styles.open_hours}>
                <div>Monday</div>
                <div className={styles.hours_line_spacer}></div>
                <div>1:00 pm - 3:00 pm</div>
              </div>
              <div className={styles.open_hours}>
                <div>Tuesday</div>
                <div className={styles.hours_line_spacer}></div>
                <div>1:00 pm - 3:00 pm</div>
              </div>
              <div className={styles.open_hours}>
                <div>Wednesday</div>
                <div className={styles.hours_line_spacer}></div>
                <div>10:00 am - 12:00 pm</div>
              </div>
              <div className={styles.open_hours}>
                <div>Every 4th Saturday</div>
                <div className={styles.hours_line_spacer}></div>
                <div>10:00 am - 12:00 pm</div>
              </div>
              <p>Clients may come once every 30 days</p>
              <p>* Wake Relief will be closed on Federal Holidays.</p>
              <p>* Wake Relief follows Wake County Schools inclement weather policy. </p>
            </div>
            <div className={styles.phone_number}>
              <span>
                <h2> Give us a Call</h2>
                <h2>(919) 833 - 6400</h2>
              </span>

              <p>Please leave a message for Wake Relief and someone will return your call as soon as possible.</p>
            </div>
            <div className={styles.phone_number}>
              <span>
                <h2>Send us an Email</h2>
                <div className='fs-4'>
                <a href="mailto:admin@wakerelief.org">admin@wakerelief.org</a></div>
              </span>
            </div>

          </div>
          <div className={styles.infobox_map_meta}>
            <div className={styles.infobox_map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.538822757316!2d-78.6506172841871!3d35.78670328016996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f665571f4ab%3A0xaa7d85ca64e90e99!2s616%20Tucker%20St%2C%20Raleigh%2C%20NC%2027603!5e0!3m2!1sen!2sus!4v1650644999388!5m2!1sen!2sus" width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <h2>Come Find Us</h2>
              <p>Saint Savior&apos;s Center (Bottom Floor) <br />
                616 Tucker Street, <br />
                Raleigh, NC 27603</p>
            </div>
          </div>
        </div>
        {/* end infobox */}


        <div className={styles.about_section}>
          <div>
            <Image
              src={wrAbout}
              alt="About Photo"
            />
          </div>
          <div>
            <h1>What is Wake Relief?</h1>
            <p>Since 1975, Wake Relief has provided food to Wake County residents in emergency situations. Wake Relief DOES NOT CHARGE for the food provided. Local agencies, churches, and other outreach organizations may refer clients or individuals may reach out to us if in need. Wake Relief provides a week&apos;s worth of nutritional groceries based on the size of the family.</p>
          </div>
        </div>

        <div id="learn-more" className={styles.section_learn_more}>
          <h1 >Want to Learn More?</h1>
          <p>Explore the sections below to see how we help our community</p>
          <EmblaCarousel slides={slides} />
        </div>


      </main>

      <footer className={styles.footer}>© 2022 Wake Relief. All rights reserved.</footer>
    </div >
  )
}

export default Home
