// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';
import TradingHours from '../../components/components-contact/trading-hours/trading-hours.component';
import MapLocation from '../../components/components-contact/map/map.component';
import ContactForm from '../../components/components-contact/contact-form/contact-form.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/contact');

  const resTradingHours = await client.getEntries({
    content_type: 'tradingHours'
  });
  const resultTradingHours = Array.from(resTradingHours.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      tradingHours: resultTradingHours
    },
    revalidate: 1
  };
};

const MapContactContainer = styled.div`
  background: var(--background-grey);
`;

const MapContactContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
`;

const Contact = ({ header, tradingHours }) => {
  return (
    <div>
      <Head>
        <title>PJC Sport & Cycles - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Trading Hours' />
        <TradingHours content={tradingHours} />
        <MapContactContainer>
          <MapContactContent>
            <MapLocation />
            <ContactForm />
          </MapContactContent>
        </MapContactContainer>
      </main>
    </div>
  );
};

export default Contact;
