"use client";
import React, { useEffect, useRef } from "react";

export default function CalendlyClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    const calendlyUrl = "https://calendly.com/digitise-thomas/30min?hide_event_type_details=1&hide_gdpr_banner=1";

    // If script not present, append it. The Calendly script will automatically process
    // elements with class `calendly-inline-widget` and `data-url` attributes.
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return;
    }

    // If the script is already loaded, initialize the inline widget for this element.
    // Calendly exposes a global `Calendly` object after the script loads.
    const tryInit = () => {
      if ((window as any).Calendly && containerRef.current) {
        try {
          ;(window as any).Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: containerRef.current,
          });
        } catch (e) {
          // ignore initialization errors
        }
      }
    };

    tryInit();
  }, []);

  return (
    <div
      ref={containerRef}
      id="book"
      className="calendly-inline-widget"
      data-url="https://calendly.com/digitise-thomas/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
