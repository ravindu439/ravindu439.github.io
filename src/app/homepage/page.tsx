import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Homepage - Ravindu Lakshan',
  description: 'Welcome to Ravindu Lakshan\'s portfolio showcasing computer engineering undergraduate projects, innovative projects, and technical skills. Explore featured work, technology stack.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomepageInteractive />
      </main>
    </>
  );
}