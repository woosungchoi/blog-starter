import markdownStyles from './markdown-styles.module.css'
import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';
export interface IUtterancesProps {
    repo: string;
}
const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
    const containerRef = createRef<HTMLDivElement>();
    useLayoutEffect(() => {
        const utterances = document.createElement('script');
        const attributes = {
            src,
            repo,
            'issue-term': 'url',
            label: 'comment',
            theme: 'github-light',
            crossOrigin: 'anonymous',
            async: 'true',
        };
        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });
        containerRef.current.appendChild(utterances);
    }, [repo]);
    return <div ref={containerRef} />;
});
Utterances.displayName = 'Utterances';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Utterances repo="woosungchoi/blog-starter" />
    </div>
  )
}
