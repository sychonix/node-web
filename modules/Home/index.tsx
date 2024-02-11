import { HeaderSection } from '@/components/Header';
import { HeroImageRight } from '@/components/Hero/HeroImageRight';
// import { FeatureSection } from '@/components/Features';
import { FooterSection } from '@/components/Footer';
import { AboutUs } from './AboutUs';
import { Networks } from './Networks';
import { FAQ } from './FAQ';
import { ContactUs } from './ContactUs';

export function Home() {
  return (
    <>
      <HeaderSection />
      <HeroImageRight />
      {/* <FeatureSection /> */}
      <AboutUs />
      <Networks />
      <FAQ />
      <ContactUs />
      <FooterSection />
    </>
  );
}
