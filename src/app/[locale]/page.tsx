import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import CaseResultsSection from '@/components/sections/CaseResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <CaseResultsSection />
      <TestimonialsSection />
      <AboutSection />
      <ProcessSection />
      <BlogPreviewSection />
      <FAQSection />
      <FinalCTASection id="contact" />
    </>
  );
}
