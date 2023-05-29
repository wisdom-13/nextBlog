import About from "@/components/About";
import AboutDetail from "@/components/AboutDetail";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: '커리어 소개',
}

export default function AboutPage() {

  return (
    <div>
      <About />
      <AboutDetail />
    </div>
  );
}

