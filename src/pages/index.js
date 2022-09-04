import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div class="tablet:max-w-[100%] desktop:max-w-[92%] relative">
      <div class="h1 mb-18 leading-[4.375rem]">
        <h1>
          We're building the next generation of the&nbsp;
          <span class="relative not-prose">
            <button class="bg-accent-cyan text-primary-black">decentralized</button>
          </span>
          &nbsp;web - returning data back to users. You're welcome to join.
        </h1>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Developers"
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHeader />
        <BlankLines lineCount="25" />
      </main>
    </Layout>
  );
}
