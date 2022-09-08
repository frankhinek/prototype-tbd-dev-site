import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

function OpenSourceContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="row mdxPageWrapper_yV3F">
      <div className="col">
        <div className="prose prose-pink">
          <h1>
            Today’s financial systems leave people behind. We build systems for anyone with internet access.
            And we’re creating it like the web itself: as a public good.
          </h1>
          <BlankLines lineCount="25" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Open Source"
      description="Description will go into a meta tag in <head />">
      <main
        className="container--fluid">
        <OpenSourceContent />
      </main>
    </Layout>
  );
}
