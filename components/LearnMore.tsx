import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import wrAbout from '../public/wr_about.png'

const LearnMore = () => {
  const [activeSection, setActiveSection] = useState('section2');

  const isActiveSection = (section: string) => {
    return activeSection === section;
  };

  return (
    <>
      <div className={styles.carousel}>
        <a className={isActiveSection('section1') ? styles.active_section : styles.inactive_section} onClick={() => setActiveSection('section1')}>
          <div className={styles.carousel_item} >
            <Image
              src={wrAbout}
              alt="About Photo"
            />
            <h2>Who We Are</h2>
          </div>
        </a>
        <a className={isActiveSection('section2') ? styles.active_section : styles.inactive_section} onClick={() => setActiveSection('section2')}>
          <div className={styles.carousel_item}>
            <Image
              src={wrAbout}
              alt="About Photo"
            />
            <h2>Who Helps Us</h2>
          </div>
        </a>
        <a className={isActiveSection('section3') ? styles.active_section : styles.inactive_section} onClick={() => setActiveSection('section3')}>
          <div className={styles.carousel_item}>
            <Image
              src={wrAbout}
              alt="About Photo"
            />
            <h2>How You Can Help</h2>
          </div>
        </a>
      </div>
      <div>
        <p>
          {activeSection === 'section1' &&
            'We are Wake Relief, an all-volunteer run organization.  We do not have a paid administrator.  Our funding comes from grants and donations from individuals. With the exception of incidentals and rent, money goes to the purchase of food for our shelves. Additional food is supplemented by Interfaith Food Shuttle and food drives.'
          }
          {activeSection === 'section2' &&
            'Who helps us and runs Wake Relief is our many dedicated volunteers! Volunteers sign up to serve assigned year round monthly shifts. Each shift serves those in need by packing bags of food based on family size, restocking the shelves, and distributing groceries to clients and helping carry groceries to cars, if needed.  The day chair assigned to the shift records clients in our database.'
          }
          {activeSection === 'section3' &&
            'How can you help is to volunteer, organize a food drive, or make a donation. Contact us by leaving a message for Wake Relief on the phone number listed. Want to organize a food drive? Here is a list of the foods we provide: canned tuna and chicken, canned lunch meat, canned peas, green beans, corn, mixed vegetables, soup, beans, peanut butter, fruit, oil, boxed milk, rice, grits, pasta, canned tomato products, as well as, toilet paper, soap, and detergent pods. (Please no glass containers) Our clients also enjoy receiving personal hygiene products, and various condiments when we have them available through donations.'
          }
        </p>

      </div>
    </>
  );
}

export default LearnMore