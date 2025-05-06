import { useEffect } from 'react';

const SITE_SUFFIX = 'Eshop šablona'; // Tady definuj suffix

export function Title({ children }: { children: string }) {
  useEffect(() => {
    document.title = `${children} – ${SITE_SUFFIX}`; 
  }, [children]);
  return null;
}
export function Meta({ name, content }: { name: string; content: string }) {
  useEffect(() => {
    const metaTag = document.querySelector(`meta[name="${name}"]`);
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, [name, content]);

  return null;
}
