export default function sitemap() {
  const baseUrl = 'https://advancetranscription.com';

  const routes = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/testimonials',
    '/blog',
    '/privacy',
    '/services/medical-transcription',
    '/services/ime-transcription',
    '/services/legal-transcription',
    '/services/ai-transcription',
    '/services/general-transcription',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
