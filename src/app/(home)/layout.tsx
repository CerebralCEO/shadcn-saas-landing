import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className='flex flex-1 flex-col divide-y divide-dashed divide-border border-border border-dashed sm:border-b'>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
