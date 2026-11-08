import { ReactNode } from "react";

interface BrowserFrameProps {
  domain: string;
  /** Outer window: width, radius, background, shadow. */
  className: string;
  /** Title bar padding and colours. */
  barClassName: string;
  dotClassName: string;
  domainClassName: string;
  children: ReactNode;
}

/** Browser window around a website screenshot, themed per case study. */
export default function BrowserFrame({ domain, className, barClassName, dotClassName, domainClassName, children }: BrowserFrameProps) {
  return (
    <div className={className}>
      <div className={`flex items-center gap-[7px] ${barClassName}`}>
        {[0, 1, 2].map((dot) => (
          <span key={dot} className={`size-2.5 rounded-full ${dotClassName}`} />
        ))}
        <span className={`ml-3 ${domainClassName}`}>{domain}</span>
      </div>
      {children}
    </div>
  );
}
