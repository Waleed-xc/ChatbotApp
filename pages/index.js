import React, { useEffect,useState } from 'react';
import Head from 'next/head';
import Chatbot from './Chatbot';

const FaqItem = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (

    <div className={`faq ${isActive ? 'active' : ''}`}>
      <h3 className="faq-title">{title}</h3>
      <p className="faq-text">{text}</p>
      <button className="faq-toggle" onClick={handleToggle}>
        <i className="fas fa-chevron-down">
  
        </i>
        <i className="fas fa-times">

        </i>
      </button>
    </div>
  );
};


const FaqComponent = () => {

  return (


    <div>
    <Head>
        <title>Chatbot</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />





      </Head>

      <div className="faq-container">
      <h1>Frequently Asked Questionss</h1>
      <Chatbot/>

      <FaqItem
                title="What is Hadhanah?"
                text="Hadhanah is the care of children, whether boys or girls who are still young and are not yet able to take care of themselves."
              />

      <FaqItem
                title="When can a mother or father claim alimony in court?"
                text="Hadhanah claim is one of the claims after divorce. This claim can be made by the mother or father of the child in the Syariah High Court having jurisdiction."
              />

      <FaqItem
                title="  What are the rights of mothers and fathers towards their children."
                text=" Divorced parents still have rights over their children. As usual in court, when the court decides that one party is given permanent custody of the child, then the other party is given access rights. This means, the other party is allowed to visit, spend the night and be with the child at the times that have been set."/>

      <FaqItem
                title="   How does the right of hadhanah expire? "
                text="
                       A woman's right to hadhanah falls:
                       (a) if the woman is married to a man who is not related to the child and whose custody would affect the welfare of the child;
                       (b) if the woman misbehaves excessively and openly
                       (c) if the woman changes her residence for the purpose of preventing the father of the child from exercising the necessary supervision over the child, except that the divorced wife may take her own child to the place of birth of the wife;
                       (d) if the woman is an apostate;
                       (e) if the woman is negligent and mistreats the child."/>


      <FaqItem
                title="Who is eligible for Hadhanah?"
                text="       Whether during the marriage or after the divorce, the mother is the person who has the most right over others to take care of her child    
                       until the child reaches the age of mumaiyiz (intelligence). However, in the event that the mother is disqualified, the right of custody will pass to another person according to priority as follows:
                       (a) maternal grandmother upwards;
                       (b) father;
                       (c) paternal grandmother upwards;
                       (d) sister or sister of the same mother;
                       (e) mother's older sister or younger sister;
                       (f) father's elder or younger sister;
                       (g) daughter of a sister or sister of the same mother;
                       (h) daughter of mother's sister or half-sister;
                       (i) daughter of the father's sister or sister;
                       (j) maternal aunt;
                       (k) paternal cousin;
                       (l) a male heir who can be his heir as an asabah. "      />


      


      </div>
    </div>
  );
};


export default FaqComponent;