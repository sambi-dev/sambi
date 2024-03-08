import AdobeLogo from '#/ui/clients/adobe-logo';
import AirbnbLogo from '#/ui/clients/airbnb-logo';
import AmazonLogo from '#/ui/clients/amazon-logo';
import BetterHomesLogo from '#/ui/clients/better-homes-logo';
import CanvaLogo from '#/ui/clients/canva-logo';
import FacebookLogo from '#/ui/clients/facebook-logo';
import HootsuiteLogo from '#/ui/clients/hootsuite-logo';
import MotorolaLogo from '#/ui/clients/motorola-logo';

interface ClientLogoInfo {
  name: string;
  Logo: React.ElementType;
  viaPartner?: boolean;
}

export const clientLogos: ClientLogoInfo[] = [
  { name: 'Adobe', Logo: AdobeLogo, viaPartner: true },
  { name: 'Airbnb', Logo: AirbnbLogo, viaPartner: true },
  { name: 'Amazon', Logo: AmazonLogo, viaPartner: true },
  { name: 'Better Homes & Garden', Logo: BetterHomesLogo },
  { name: 'Canva', Logo: CanvaLogo, viaPartner: true },
  { name: 'Facebook', Logo: FacebookLogo, viaPartner: true },
  { name: 'Hootsuite', Logo: HootsuiteLogo },
  { name: 'Motorola', Logo: MotorolaLogo },
];
