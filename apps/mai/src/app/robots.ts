import type { MetadataRoute } from 'next';

import { SITE_URL } from '#/lib/constants';

interface UserAgentRule {
  userAgent: string | string[];
  allow?: string[];
  disallow?: string[];
}

function createUserAgentRule(userAgent: string | string[]): UserAgentRule {
  return { userAgent, disallow: ['/'] };
}

export default function robots(): MetadataRoute.Robots {
  const botsToAllow: UserAgentRule[] = [
    'Googlebot',
    'Bingbot',
    'DuckDuckBot',
    'Yandex',
    'Baiduspider',
    'slurp',
  ].map(createUserAgentRule);

  const botsToBlock: UserAgentRule[] = [
    'GPTBot',
    'ChatGPT-User',
    'CCBot',
    'Google-Extended',
    'PerplexityBot',
    'anthropic-ai',
    'Omgilibot',
    'Omgili',
    'FacebookBot',
    'Diffbot',
    'Bytespider',
    'ImagesiftBot',
    'cohere-ai',
    'semrushbot',
    'dotbot',
    'qwantify',
    'zoominfobot',
    'voltron',
    'ahrefsbot',
  ].map(createUserAgentRule);

  const rules: UserAgentRule[] = [
    ...botsToAllow,
    ...botsToBlock,
    { userAgent: '*', disallow: ['/'] },
  ];

  const formattedRules = rules.map((rule) => ({
    userAgent: rule.userAgent,
    allow: rule.allow,
    disallow: rule.disallow,
  }));

  return {
    rules: formattedRules,
    sitemap: `https://${SITE_URL}/sitemap.xml`,
  };
}
