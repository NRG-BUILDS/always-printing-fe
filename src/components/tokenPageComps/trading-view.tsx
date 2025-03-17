import { useEffect, useRef, memo, JSX } from "react";

interface TradingViewConfig {
  width: string;
  height: string;
  symbol: string;
  interval: string;
  timezone: string;
  theme: string;
  style: string;
  locale: string;
  allow_symbol_change: boolean;
  hide_volume: boolean;
  support_host: string;
}

function TradingViewWidget(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);
  const scriptLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (!container.current || scriptLoaded.current) return;

    scriptLoaded.current = true;

    // Remove any existing scripts first
    const existingScripts = container.current.querySelectorAll("script");
    existingScripts.forEach((script) => script.remove());

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const config: TradingViewConfig = {
      width: "100%",
      height: "100%",
      symbol: "CRYPTOCAP:SOL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com",
    };

    script.innerHTML = JSON.stringify(config);

    container.current.appendChild(script);

    return () => {
      if (container.current && script.parentNode) {
        container.current.removeChild(script);
        scriptLoaded.current = false;
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container h-full w-full" ref={container}>
      <div className="tradingview-widget-container__widget h-full"></div>
      <div className="tradingview-widget-copyright hidden sm:block text-xs">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
