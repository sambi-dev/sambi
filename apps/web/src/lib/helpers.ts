export function obfuscateEmail(email: string): string {
  const [localPart, domain] = email.split('@');

  if (!localPart || !domain) {
    return '********@********.*';
  }

  const domainParts = domain.split('.');
  const domainName = domainParts.slice(0, -1).join('.');
  const topLevelDomain = domainParts.slice(-1)[0];

  const obfuscatedLocalPart = `${localPart[0]}********`;
  const obfuscatedDomainName = `*${domainName[0] ?? '*'}*******${domainName[domainName.length - 1] ?? '*'}`;

  return `${obfuscatedLocalPart}@${obfuscatedDomainName}.${topLevelDomain}`;
}
