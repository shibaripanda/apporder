import { NextResponse, type NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log('middleware')
    const url = request.nextUrl.pathname;

    if (url.endsWith('UnstyledButton.module.css.mjs.map') || url.endsWith('MantineLogo.module.css.mjs.map')) {
      return new Response(null, { status: 204 }); // Возвращает пустой ответ без ошибки
    }
  
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}