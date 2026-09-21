import GodhamHead from '@/components/Godham/GodhamHead';
import GodhamLayout from '@/components/Godham/GodhamLayout';
import Hero from '@/components/Godham/sections/Hero';
import ImpactCounters from '@/components/Godham/sections/ImpactCounters';
import About from '@/components/Godham/sections/About';
import Programs from '@/components/Godham/sections/Programs';
import GalleryPreview from '@/components/Godham/sections/GalleryPreview';
import Vridhaashram from '@/components/Godham/sections/Vridhaashram';
import Seva from '@/components/Godham/sections/Seva';
import Donate from '@/components/Godham/sections/Donate';
import Donors from '@/components/Godham/sections/Donors';
import Accreditation from '@/components/Godham/sections/Accreditation';
import LocateUs from '@/components/Godham/sections/LocateUs';
import CTABand from '@/components/Godham/sections/CTABand';

export default function GodhamHome() {
  return (
    <>
      <GodhamHead />
      <GodhamLayout>
        <Hero />
        <ImpactCounters />
        <About />
        <Programs />
        <GalleryPreview />
        <Vridhaashram />
        <Seva />
        <Donate />
        <Donors />
        <Accreditation />
        <LocateUs />
        <CTABand />
      </GodhamLayout>
    </>
  );
}
