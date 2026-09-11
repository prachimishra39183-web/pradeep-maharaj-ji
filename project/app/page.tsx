import { HeroSection } from '@/components/sections/HeroSection';

import { QuoteSection } from '@/components/sections/QuoteSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { GurukulSection } from '@/components/sections/GurukulSection';





import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
     <QuoteSection />
      <VideoSection />
      <EventsSection />
      <GurukulSection />
      
      
      

      
      <ContactSection />
    </>
  );
}
