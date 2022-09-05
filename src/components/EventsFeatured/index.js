import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logger from '@docusaurus/logger';
import useGlobalData from '@docusaurus/useGlobalData';
// Svg: require('@site/assets/img/undraw_docusaurus_mountain.svg').default,

const EventList = [
  {
    title: 'Refactr Tech',
    link: '/events/2022-09-14-refactr-conference',
    image: '/img/refactr-2022-angie.png',
    description: (
      <>
        Check out Angie Jones' keynote on Refactoring the Web.
      </>
    ),
    datetime: 'September 14 - 16, 2022 | 9:15am ET',
    location: 'Atlanta, GA',
  },
  {
    title: 'Mainnet Conference 2022',
    link: '/events/2022-09-21-mainnet22',
    image: '/img/mainnet22-mike.jpg',
    description: (
      <>
        Mike Brock is speaking on 'Can Bitcoiners Buidl Again?' at Mainnet 2022.
      </>
    ),
    datetime: 'September 22, 2022 | 2:15pm ET',
    location: 'Pier 36, New York, NY',
  },
  {
    title: 'Converge22',
    link: '/events/2022-09-27-converge22',
    image: '/img/converge22-daniel.png',
    description: (
      <>
        Daniel Buchner, TBD's Head of Decentralized Identity, is speaking at Converge22.
      </>
    ),
    datetime: 'September 27 - 30, 2022 | 9am PT',
    location: 'San Francisco, CA',
  },
];

function Event({title, link, image, description, datetime, location}) {
  return (
    <div>
      <div className="not-prose">
        <div class="border-2 border-solid border-accent-cyan w-fit shadow-button-sh-cyan hover:shadow-button-sh-hv-cyan hover:translate-x-[4px] hover:translate-y-[4px] mb-8">
          <a href={link} aria-label={title} target="" rel="">
            <img src={image} alt="" class="max-w-full w-full" />
          </a>
        </div>
        <div class="mb-4 tablet:mb-6">
          <h2 class="h2 font-medium text-primary-yellow">{title}</h2>
        </div>
        <div class="text-primary-yellow mb-6">
          <span class="copy-sm block">{datetime}</span>
          <div class="flex">
            <span class="copy-sm block mr-2">Location:</span>
            <span class="copy-sm block">{location}</span>
          </div>
        </div>
        <div class="mb-6">
          <p class="copy text-primary-yellow">{description}</p>
        </div>
        <div>
          <a href={link} target="" rel="" class="flex gap-x-2">
            <p class="text-accent-cyan nav-links underline underline-offset-2">Learn More</p>
            <img src="/img/blue-arrow-right.svg" alt="" class="relative top-[2px]" />
          </a>
        </div>
      </div>
      <div class="mt-12 desktop:mt-[4.5rem]">
        <div class="flex justify-center">
          <div class="w-full max-w-container">
            <hr class="bg-dotted-dark border-none h-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="not-prose">
      <div className="flex flex-col gap-12 mt-12 tablet:mt-[4.5rem] desktop:gap-[4.5rem]">
        {EventList.map((props, idx) => (
          <Event key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
