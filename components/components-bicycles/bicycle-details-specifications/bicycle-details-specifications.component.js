// React
import React from 'react';

// Next

// Contentful

// Components
import Specification from './bicycle-spec.component';

// Images
import brakesImg from '/assets/bicycles/spec-icons/brakes.png';
import frontDerailleurImg from '/assets/bicycles/spec-icons/frontDerailleur.png';
import rearDerailleurImg from '/assets/bicycles/spec-icons/rearDerailleur.png';
import bottomBracketImg from '/assets/bicycles/spec-icons/bottomBracket.png';
import frameMaterialImg from '/assets/bicycles/spec-icons/frameMaterial.png';
import shiftersImg from '/assets/bicycles/spec-icons/shifters.png';
import frontHubImg from '/assets/bicycles/spec-icons/frontHub.png';
import rearHubImg from '/assets/bicycles/spec-icons/rearHub.png';
import wheelsImg from '/assets/bicycles/spec-icons/wheels.png';
import tyresImg from '/assets/bicycles/spec-icons/tyres.png';
import crankImg from '/assets/bicycles/spec-icons/crank.png';
import forkImg from '/assets/bicycles/spec-icons/fork.png';
import rearShockImg from '/assets/bicycles/spec-icons/rearShock.png';
import chainImg from '/assets/bicycles/spec-icons/chain.png';
import stemImg from '/assets/bicycles/spec-icons/stem.png';
import seatPostImg from '/assets/bicycles/spec-icons/seatPost.png';

// Data

// Styles
import styled from 'styled-components';

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BicycleSpecifications = ({ content }) => {

  const {
    frameMaterial,
    fork,
    rearShock,
    chainwheel,
    frontDerailleur,
    rearDerailleur,
    shifters,
    chain,
    cassette,
    bottomBracket,
    speed,
    brakes,
    wheels,
    frontHub,
    rearHub,
    tyres,
    stem,
    seatPost,
    extras
  } = content;

  let entries = Object.entries(content)
  let data = entries.map(([key, val] = entry) => {
    return `The ${key} is ${val}`;
  });

  console.log(data)

  return (
    <SpecsContainer>
      <h3>Frameset</h3>
      <Specification image={frameMaterialImg} heading='Frame Material' spec={frameMaterial} />
      <h3>Suspension</h3>
      <Specification image={forkImg} heading='Fork' spec={fork} />
      <Specification image={rearShockImg} heading='Rear Shock' spec={rearShock} />
      <h3>Drivetrain</h3>
      <Specification image={frontDerailleurImg} heading='Front Derailleur' spec={frontDerailleur} />
      <Specification image={rearDerailleurImg} heading='Rear Derailleur' spec={rearDerailleur} />
      <Specification image={bottomBracketImg} heading='Bottom Bracket' spec={bottomBracket} />
      <Specification image={crankImg} heading='Crank' spec={chainwheel} />
      <Specification image={chainImg} heading='Chain' spec={chain} />
      <Specification image={shiftersImg} heading='Shifters' spec={shifters} />
      <h3>Brakes</h3>
      <Specification image={brakesImg} heading='Brakes' spec={brakes} />
      <h3>Wheels</h3>
      <Specification image={frontHubImg} heading='Front Hub' spec={frontHub} />
      <Specification image={rearHubImg} heading='Rear Hub' spec={rearHub} />
      <Specification image={wheelsImg} heading='Wheels' spec={wheels} />
      <Specification image={tyresImg} heading='Tyres' spec={tyres} />
      <h3>Components</h3>
      <Specification image={stemImg} heading='Stem' spec={stem} />
      <Specification image={seatPostImg} heading='Seat Post' spec={seatPost} />
    </SpecsContainer>
  );
};

export default BicycleSpecifications;
