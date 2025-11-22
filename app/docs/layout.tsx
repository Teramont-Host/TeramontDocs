import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(https://teramont.net/tcp/pattern.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}>
        {children}
      </DocsLayout>
    </div>
  );
}
