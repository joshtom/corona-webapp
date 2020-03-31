import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Prv1 from '../../images/prv1.jpg';
import Prv2 from '../../images/prv2.jpg';
import Prv3 from '../../images/prv3.jpg';
import Prv4 from '../../images/prv4.jpg';
import Prv5 from '../../images/prv5.jpg';
import Prv6 from '../../images/prv6.jpg';
import Prv7 from '../../images/prv7.jpg';
import Prv8 from '../../images/prv8.jpg';
import Prv9 from '../../images/prv9.jpg';


const Tips = () => (
  <div className='max-width'>
    <section className='tips-section'>
      <h1 className='tips-header'>Coronavirus Survival Tips.</h1>
      <h3 className='desc'>
        Below are guidelines from W.H.O and CDC.govt on how to 
        protect your self and your family from the pandemic.
      </h3>
      <div className='tips-content'>
        
            <section>
              <p> 1 </p>
              <a href={Prv1}> <img src={Prv1} alt="first prevention"/></a>
            </section>
            <section>
              <p> 2 </p>
              <a href={Prv2}> <img src={Prv2} alt="second prevention"/></a>
              </section>
            <section>
              <p> 3 </p>
              <a href={Prv3}> <img src={Prv3} alt="third prevention"/></a>
              </section>
            <section>
              <p> 4 </p>
              <a href={Prv4}> <img src={Prv4} alt="forth prevention"/></a>
              </section>
            <section>
              <p> 5 </p>
              <a href={Prv5}> <img src={Prv5} alt="fifth prevention"/></a>
              </section>
            <section>
              <p> 6 </p>
              <a href={Prv6}> <img src={Prv6} alt="sixth prevention"/></a>
              </section>
            <section>
              <p> 7 </p>
              <a href={Prv7}> <img src={Prv7} alt="seventh prevention"/></a>
              </section>
            <section>
              <p> 8 </p>
              <a href={Prv8}> <img src={Prv8} alt="eight prevention"/></a>
              </section>
            <section>
              <p> 9 </p>
              <a href={Prv9}> <img src={Prv9} alt="nine prevention"/></a>
              </section>
        {/* <div className='tip'>
          <h3 className='tip-header'>Wash your hands frequently</h3>
          <p>
            Regularly and thoroughly clean your hands with an alcohol-based hand
            rub or wash them with soap and water.
          </p>

          <h4>Why?</h4>
          <p>
            Washing your hands with soap and water or using alcohol-based hand
            rub kills viruses that may be on your hands.
          </p>
        </div>
         <div className='tip'>
          <h3 className='tip-header'>Maintain social distancing</h3>
          <p>
            When someone coughs or sneezes they spray small liquid droplets from
            their nose or mouth which may contain virus. If you are too close,
            you can breathe in the droplets, including the COVID-19 virus if the
            person coughing has the disease.
          </p>
          <h4>Why?</h4>
          <p>
            Washing your hands with soap and water or using alcohol-based hand
            rub kills viruses that may be on your hands.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>
            Avoid touching your hands, nose and mouth.
          </h3>
          <h4>Why?</h4>
          <p>
            Hands touch many surfaces and can pick up viruses. Once
            contaminated, hands can transfer the virus to your eyes, nose or
            mouth. From there, the virus can enter your body and can make you
            sick.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>Practice Respiratory Hygiene</h3>
          <p>
            Make sure you, and the people around you, follow good respiratory
            hygiene. This means covering your mouth and nose with your bent
            elbow or tissue when you cough or sneeze. Then dispose of the used
            tissue immediately.
          </p>
          <h4>Why?</h4>
          <p>
            Droplets spread virus. By following good respiratory hygiene you
            protect the people around you from viruses such as cold, flu and
            COVID-19.
          </p>
        </div>
        <div className='tip'>
          <h3 className='tip-header'>
            If you have fever, cough and difficulty breathing, seek medical care
            early
          </h3>
          <p>
            Stay home if you feel unwell. If you have a fever, cough and
            difficulty breathing, seek medical attention and call in advance.
            Follow the directions of your local health authority.
          </p>
          <h4>Why?</h4>
          <p>
            National and local authorities will have the most up to date
            information on the situation in your area. Calling in advance will
            allow your health care provider to quickly direct you to the right
            health facility. This will also protect you and help prevent spread
            of viruses and other infections.
          </p>
        </div> 
        <div className='tip'> 
          <h3 className='tip-header'>
            Stay informed and follow advice given by your healthcare provider.
          </h3>
          <p>
            Stay informed on the latest developments about COVID-19. Follow
            advice given by your healthcare provider, your national and local
            public health authority or your employer on how to protect yourself
            and others from COVID-19.
          </p>
          <h4>Why?</h4>
          <p>
            National and local authorities will have the most up to date
            information on whether COVID-19 is spreading in your area. They are
            best placed to advise on what people in your area should be doing to
            protect themselves.
          </p>
        </div> */}
      </div>
    </section>
  </div>
);

export default Tips;
