import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

function LearnContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div class="row mdxPageWrapper_yV3F">
      <div class="col">
        <div class="prose prose-pink">
          <h1>
            tbDOCS
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
      title="Learn"
      description="Description will go into a meta tag in <head />">
      <main
        class="container--fluid">
        <LearnContent />
      </main>
    </Layout>
  );
}
