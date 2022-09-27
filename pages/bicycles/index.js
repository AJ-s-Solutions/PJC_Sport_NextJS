// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';
import CarouselSlider from '../../components/carousel/carousel.component';
import BicycleRangeContainer from '../../components/components-bicycles/bicycle-range/bicycle-range-container.component';
import DetailsSection from '../../components/details-section/details-section.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/bicycles');

  const resBicycleRanges = await client.getEntries({
    content_type: 'bicycleRanges'
  });
  const resultBicycleRanges = Array.from(resBicycleRanges.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBrands = await client.getEntries({
    content_type: 'bicycleBrands'
  });
  const resultBrands = Array.from(resBrands.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBicycleSections = await client.getEntries({
    content_type: 'bicycleSection'
  });
  const resultBicycleSections = Array.from(resBicycleSections.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBicycles = await client.getEntries({
    content_type: 'bicycle'
  });
  const resultBicycles = Array.from(resBicycles.items).sort(function (a, b) {
    if (a.firstname < b.firstname) { return -1; }
    if (a.firstname > b.firstname) { return 1; }
    return 0;
  });

  const resAccessoriesGear = await client.getEntries({
    content_type: 'accessoriesAndGearSection'
  });
  const resultAccessoriesGear = Array.from(resAccessoriesGear.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      bicycleRanges: resultBicycleRanges,
      brands: resultBrands,
      bicycleSections: resultBicycleSections,
      bicycles: resultBicycles,
      accessoriesGear: resultAccessoriesGear
    },
    revalidate: 1
  };
};

const Bicycles = ({ header, bicycleRanges, brands, bicycleSections, bicycles, accessoriesGear }) => {

  const type = 'bicycles';

  return (
    <div>
      <Head>
        <title>PJC Sport & Cycles - Bicycles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Bicycle Ranges' />
        <BicycleRangeContainer content={bicycleRanges} />
        <CarouselSlider content={brands} />
        <DetailsSection content={bicycleSections} panelContent={bicycles} type={type} />
        <SeperationHeader childrenLvl1='Accessories & Gear' />
        <DetailsSection content={accessoriesGear} />
      </main>
    </div>
  )
};

export default Bicycles;