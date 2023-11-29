import { NextRequest, NextResponse } from 'next/server';

const redirects: Record<string, string> = {
  chrome: 'https://chromewebstore.google.com/',
  github: 'https://github.com/manishMandal02/fresh-inbox-extension',
  demo: 'https://youtube.com',
};

export const GET = (request: NextRequest) => {
  const urlPath = request.nextUrl.pathname.split('/')[1];

  console.log('🚀 ~ file: route.ts:13 ~ GET ~ urlPath:', urlPath);

  //
  let redirectUrl = 'https://freshinbox.xyz';

  if (urlPath && redirects[urlPath]) {
    redirectUrl = redirects[urlPath];
  }

  console.log('🚀 ~ file: route.ts:19 ~ GET ~ redirectUrl:', redirectUrl);
  return NextResponse.redirect(redirectUrl);
};
