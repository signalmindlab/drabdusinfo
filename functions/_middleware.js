// Cloudflare Pages Middleware - Block direct access to image files
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase();

  // Check if the request is for an image file
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.ico'];
  const isImage = imageExtensions.some(ext => path.endsWith(ext));

  if (isImage) {
    const referer = request.headers.get('Referer') || '';
    const allowedDomains = ['drabdus.info', 'google.', 'bing.', 'cloudflare.com'];
    const isAllowed = allowedDomains.some(domain => referer.includes(domain));

    // Block if no referer or referer is not from allowed domains
    if (!isAllowed) {
      return new Response('Access Denied', {
        status: 403,
        headers: { 'Content-Type': 'text/html' }
      });
    }
  }

  // Allow all other requests
  return context.next();
}
