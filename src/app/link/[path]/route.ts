import { NextRequest, NextResponse } from 'next/server';

// route runtime
export const runtime = 'edge';

const redirects: Record<string, string> = {
  chrome:
    'https://chrome.google.com/webstore/detail/efelphicclfejkcklpafkoginmhabfkl',
  github: 'https://github.com/manishMandal02/fresh-inbox-extension',
  demo: 'https://youtube.com',
};

export const GET = (request: NextRequest) => {
  const urlPath = request.nextUrl.pathname.split('/')[2];

  //
  let redirectUrl = 'https://freshinbox.xyz';

  if (urlPath && redirects[urlPath]) {
    redirectUrl = redirects[urlPath];
  }

  return NextResponse.redirect(redirectUrl);
};
