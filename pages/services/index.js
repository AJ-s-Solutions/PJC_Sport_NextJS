// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';
import DetailsSection from '../../components/details-section/details-section.component';
import CarouselSlider from '../../components/carousel/carousel.component';
import ServicesContainer from '../../components/components-services/services-container/services-container.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });

  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/services');

  return {
    props: {
      header: resultHeader
    },
    revalidate: 1
  };
};

const Services = ({ header }) => {
  return (
    <div>
      <Head>
        <title>PJC Sport & Cycles - Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImage content={header} />
      <SeperationHeader childrenLvl1='Services Offered' />
      <ServicesContainer />
      <DetailsSection
        header='Header'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        footer='Footer' />
      <CarouselSlider />
    </div>
  );
};

export default Services;
