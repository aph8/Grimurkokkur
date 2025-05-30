// src/components/vorur/TextSection.tsx
'use client';

import React, { ReactNode, useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/vorur/TextSection.module.scss';

const ReactMarkdown = dynamic(() => import('react-markdown').then((mod) => mod.default), {
  ssr: false,
});
import remarkGfm from 'remark-gfm';

interface TextSectionProps {
  title: string;
  text?: string;
  isMarkdown?: boolean;
  children?: ReactNode;
}

const TextSectionComponent: React.FC<TextSectionProps> = ({
  title,
  text = '',
  isMarkdown = false,
  children,
}) => {
  // Búa til unik id fyrir aria-labelledby
  const sectionId = useMemo(
    () => `text-section-${title.toLowerCase().replace(/\s+/g, '-')}`,
    [title],
  );

  // Memo-aða Markdown‐útkomu svo ReactMarkdown fái ekki nýjan strengi á hverju renderi
  const markdown = useMemo(() => text, [text]);

  return (
    <section className={styles.textSection} aria-labelledby={sectionId} role="region">
      <h2 id={sectionId} className={styles.textSection__title}>
        {title}
      </h2>
      <div className={styles.textSection__content}>
        {children ? (
          children
        ) : isMarkdown ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        ) : (
          text.split('\n').map((line, i) => <p key={i}>{line.trim()}</p>)
        )}
      </div>
    </section>
  );
};

export default React.memo(TextSectionComponent);
