import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import DepartmentsList from '@/components/DepartmentsList';
import DoctorsGrid from '@/components/DoctorsGrid';
import Facilities from '@/components/Facilities';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <DepartmentsList />
      <DoctorsGrid />
      <Facilities />
      <ContactForm />
    </>
  );
}
