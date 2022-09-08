import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlankLines from '@site/src/components/BlankLines';

const DocsList = [
  {
    title: 'Self-Sovereign Identity Service',
    description: (
      <>
        An in-a-box service that handles the full Verifiable Credentials lifecycle, including issuance, verification,
        revocation, and more.
      </>
    ),
    link: '/learn/ssi-service',
    icon: '/img/article-icon.svg',
  },
];

const DiscussionsList = [
  {
    title: 'A Blockchain Discussion',
    description: (
      <>
        A series hosted by 
        <a href="https://twitter.com/techgirl1908" target="_blank" rel="noopener noreferrer">
          <span className="relative not-prose"><button className="bg-accent-cyan text-primary-black">Angie Jones</button></span>
        </a>
        , where the community has open discussions about blockchain technologies and the apps built on top of them.
      </>
    ),
    link: '/learn/discussions',
    icon: '/img/article-icon.svg',
  },
];

function LearnCard({title, description, link, icon}) {
  return (
    <div className="not-prose flex flex-col tablet:h-full tablet:pt-6 tablet:pl-[1.25rem] tablet:pr-6 last:pb-0 tablet:pb-12 tablet:last:pb-12 tablet:border-primary-yellow tablet:border-2 tablet:rounded">
    <div className="pb-4 tablet:pb-6">
      <img src={icon} alt="" className="my-0" />
    </div>
    <div className="pb-6 tablet:pb-[0.875rem]">
      <h2 className="h2-caps my-0 text-primary-yellow">{title}</h2>
    </div>
    <div className="pb-9 tablet:pb-[67px] tablet:grow">
      <p className="copy text-primary-yellow my-0">
        {description}
      </p>
    </div>
    <div>
      <a className="dark w-fit no-underline" title="A Blockchain Discussion" href={link}>
        <div className="w-fit px-[1.375rem] mb-2 mr-2 button-text border-solid pt-[12px] pb-[14px] border-2 hover:translate-x-[4px] hover:translate-y-[4px] bg-primary-yellow dark:bg-primary-black text-primary-black shadow-button-sh border-primary-black hover:shadow-button-sh-hv  dark:shadow-button-sh-cyan dark:border-accent-cyan dark:hover:shadow-button-sh-hv-cyan dark:text-accent-cyan">
          Learn More
        </div>
      </a>
    </div>
  </div>
  );
}

function LearnDocs() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="prose prose-pink mb-13.5">
      <hr />
      <h2 className="anchor anchorWithStickyNavbar_mojV" id="list-of-projects">
        Get to know each project
        <a className="hash-link" href="#list-of-projects" title="Direct link to heading">​</a>
      </h2>
      <p>
        Essential reading for a better understanding of how to best use each project.
      </p>
      <div className="not-prose">
        <div className="tablet:gap-x-[1.25rem] desktop:gap-x-8 gap-y-12 tablet:gap-y-[1.375rem] grid grid-cols-1 tablet:grid-cols-[repeat(auto-fit,20.75rem)]">
          {DocsList.map((props, idx) => (
              <LearnCard key={idx} {...props} />
            ))}
        </div>
      </div>
  </div>
  );
}

function LearnDiscussions() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="prose prose-pink mb-13.5">
      <hr />
      <h2 className="anchor anchorWithStickyNavbar_mojV" id="list-of-discussions">
        Discussions
        <a className="hash-link" href="#list-of-discussions" title="Direct link to heading">​</a>
      </h2>
      <div className="not-prose">
        <div className="tablet:gap-x-[1.25rem] desktop:gap-x-8 gap-y-12 tablet:gap-y-[1.375rem] grid grid-cols-1 tablet:grid-cols-[repeat(auto-fit,20.75rem)]">
          {DiscussionsList.map((props, idx) => (
              <LearnCard key={idx} {...props} />
            ))}
        </div>
      </div>
    </div>
  );
}

function LearnContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="row mdxPageWrapper_yV3F">
      <div className="col">
        <div className="prose prose-pink mb-13.5">
          <h1>
            tbDOCS
          </h1>
          <p>
            Explore our tutorials, references, and discussions to learn how you can join us in building the future of
            finance and decentralized technology.
          </p>
        </div>
        <LearnDocs />
        <LearnDiscussions />
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
        className="container--fluid">
        <LearnContent />
      </main>
    </Layout>
  );
}
