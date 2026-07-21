/**
 * Analytics integration component.
 *
 * To enable analytics, set the following environment variables:
 *   NEXT_PUBLIC_GA_ID     — Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX)
 *   NEXT_PUBLIC_GTM_ID    — Google Tag Manager Container ID (e.g. GTM-XXXXXXX)
 *   NEXT_PUBLIC_CLARITY_ID — Microsoft Clarity Project ID (e.g. xxxxxxxx)
 *   NEXT_PUBLIC_META_PIXEL_ID — Meta Pixel ID (e.g. 000000000000000)
 *   NEXT_PUBLIC_ADS_ID    — Google Ads Conversion ID (e.g. AW-000-000-0000)
 *
 * The component only loads scripts when the corresponding env var is set.
 */
"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

export function Analytics() {
  const pathname = usePathname();

  // GA4 pageview tracking
  useEffect(() => {
    if (GA_ID && typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error - gtag is loaded dynamically
      window.gtag("config", GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics 4 */}
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {GTM_ID && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}

      {/* Microsoft Clarity */}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'script','clarity','${CLARITY_ID}');`}
        </Script>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}

      {/* Google Ads Conversion Tracking */}
      {ADS_ID && (
        <Script id="ads-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}
        </Script>
      )}

      {/* GTM noscript fallback */}
      {GTM_ID && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}
