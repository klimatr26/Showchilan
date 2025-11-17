import { HeroSection } from '../components/Home/HeroSection';
import { CategoryCards } from '../components/Home/CategoryCards';
import { AboutProjectSection } from '../components/Home/AboutProjectSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <AboutProjectSection />
    </>
  );
}
