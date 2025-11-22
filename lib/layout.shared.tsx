import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Logo from '@/public/favicon.ico';

export const logo = (
  <>
    <Image
      alt="Teramont Docs"
      src={Logo}
      width={32}
      height={32}
      sizes="32px"
      aria-label="Teramont Docs"
      className="shrink-0"
    />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium in-[.uwu]:hidden">Teramont Docs</span>
        </>
      ),
    },
  };
}
