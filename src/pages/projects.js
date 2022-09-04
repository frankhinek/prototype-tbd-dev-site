import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

function ProjectsContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div class="row mdxPageWrapper_yV3F">
      <div class="col">
        <div class="prose prose-pink mb-13.5">
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
        class="container--fluid">
        <ProjectsContent />
        <BlankLines lineCount="25" />
      </main>
    </Layout>
  );
}
