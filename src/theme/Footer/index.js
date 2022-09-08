import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;
  return (
    <footer>
      <div className="pt-12 tablet:pt-14 desktop:pt-18 pb-14 desktop:pb-24 max-w-container desktop:mx-auto">
        <div className="relative h-auto overflow-hidden invertDarkMode bg-primary-yellow p-0.5">
          <div className="not-prose tbd-illustration relative h-[14px] w-full tbd-white-illustration">
            <img src="/img/marquee-d-1440.svg" className="absolute top-0 left-0 bottom-0 m-auto object-cover max-h-full max-w-full min-h-full min-w-full" alt="" />
          </div>
        </div>
        <div className="flex h-[116px] tablet:h-[132px] desktop:h-[236px] items-center text-primary-black px-4 tablet:px-6 desktop:px-12 bg-primary-yellow">
          <div className="flex items-center align-middle">
            <span className="mr-1 tablet:mr-3">
              <div className="not-prose tbd-illustration relative w-[50px] h-[50px] ">
                <img src="/img/tbd-logo-square.svg" alt="TBD" />
              </div>
            </span>
            <span className="mx-3">
              <div className="not-prose tbd-illustration relative h-[84px] w-[84px] desktop:w-[140px] desktop:h-[140px]  ">
                <img src="/img/copyright-image.svg" alt="copyright" />
              </div>
            </span>
            <span className="copy">2022</span>
          </div>
          <ul className="flex justify-end flex-auto nav-links">
            <li className="ml-12 flex items-center py-0.5"><a target="" href="https://www.tbd.website/legal" rel="" className="py-3 text-primary-black hover:text-primary-black">Legal</a></li>
          </ul>
        </div>
        <div className="flex flex-col bg-black mt-9 tablet:h-18 desktop:h-30 tablet:px-6 desktop:px-12 tablet:mt-0 tablet:flex-row tablet:items-center desktop:flex-row">
          <div className="flex-1"><p className="copy text-primary-yellow">Connect with us</p></div>
          <div className="flex-1 block h-full tablet:flex tablet:justify-end">
            <div className="grid grid-cols-4 my-10 place-items-center gap-9 tablet:gap-3 desktop:gap-6 tablet:my-0 tablet:flex tablet:justify-end">
              <a href="https://twitter.com/tbd54566975?lang=en" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to Twitter" src="/img/twitter-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="Twitter button" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/tbd54566975" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to LinkedIn" src="/img/linkedin-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="LinkedIn button" />
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UCRAYhEkp3fEuYQAzteNqHsA/featured" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to YouTube" src="/img/youtube-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="YouTube button" />
                </div>
              </a>
              <a href="https://vimeo.com/tbd54566975" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to Vimeo" src="/img/vimeo-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="Vimeo button" />
                </div>
              </a>
              <a href="https://instagram.com/tbd54566975?igshid=YmMyMTA2M2Y=" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to Instagram" src="/img/instagram-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="Instagram button" />
                </div>
              </a>
              <a href="https://discord.gg/tbd" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to Discord" src="/img/discord-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="Discord button" />
                </div>
              </a>
              <a href="https://www.twitch.tv/tbd54566975" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to Twitch" src="/img/twitch-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="Twitch button" />
                </div>
              </a>
              <a href="https://vm.tiktok.com/ZTdx4L1Ft/" rel="noopener noreferrer" target="_blank" className="w-12 h-full flex justify-center items-center border-b-primary-black hover:border-b-primary-yellow border-t-transparent border-y-4">
                <div className="not-prose tbd-illustration w-6 p-3 aspect-square relative text-primary-black tbd-social-icon ">
                  <img title="Go to TikTok" src="/img/tiktok-icon.svg" className="tbd-social-icon absolute top-0 left-0 bottom-0 right-0 m-0 object-cover max-h-full max-w-full min-h-full min-w-full" alt="TikTok button" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-repeat-x h-[10px] bg-[url('/img/footer-bottom-dark.svg')]"></div>
      </div>
    </footer>
  );
  // return (
  //   <FooterLayout
  //     style={style}
  //     links={links && links.length > 0 && <FooterLinks links={links} />}
  //     logo={logo && <FooterLogo logo={logo} />}
  //     copyright={copyright && <FooterCopyright copyright={copyright} />}
  //   />
  // );
}
export default React.memo(Footer);
