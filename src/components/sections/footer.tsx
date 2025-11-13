import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

const owner = 'shadcn-saas';

export function Footer() {
  return (
    <footer
      className={cn(
        'container mx-auto flex flex-col gap-4',
        'border-border border-b border-dashed',
        'gap-16 px-8 py-16',
      )}
    >
      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <div className='grid items-center gap-4 sm:grid-cols-3'>
      <div className='w-min'></div>
      <div className='flex items-center sm:justify-center'>
        <p className='whitespace-nowrap text-muted-foreground text-sm'>
          &copy; {new Date().getFullYear()} {owner}. All rights reserved.
        </p>
      </div>
      <div className='flex items-center sm:justify-end'>
        <ThemeToggle mode='light-dark' />
      </div>
    </div>
  );
}
