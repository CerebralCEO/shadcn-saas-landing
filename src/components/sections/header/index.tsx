import { siteConfig } from '@/lib/config';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  return (
    <header
      className={cn(
        'container z-40 flex h-16 items-center justify-between gap-4',
        'border-border border-b border-dashed',
      )}
    >
      <Link
        href={'/'}
        className='inline-flex items-center gap-2.5 font-bold text-lg'
      >
        {siteConfig.name}
      </Link>

      <div className='flex flex-1 flex-row items-center justify-end'>
        <ThemeToggle />
      </div>
    </header>
  );
}
