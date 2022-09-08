import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

function ProjectsContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="row mdxPageWrapper_yV3F">
      <div className="col">
        <div className="prose prose-pink mb-13.5">
          <h1>The future is TBD.</h1>
          <h1>Join us in shaping it.</h1>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Projects"
      description="Description will go into a meta tag in <head />">
      <main
        className="container--fluid">
        <ProjectsContent />
        <BlankLines lineCount="25" />
      </main>
    </Layout>
  );
}
