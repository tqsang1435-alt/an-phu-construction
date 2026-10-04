import Image from "next/image";
import { leaderInfo } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function LeaderIntro() {
  return (
    <section className="section" id="leader">
      <div className="container leader-layout">
        <Reveal className="leader-portrait-wrapper">
          <Image 
            src="/images/leader-portrait.png" 
            alt={`Chân dung ${leaderInfo.name}`} 
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            className="leader-portrait-img"
          />
        </Reveal>
        <Reveal className="leader-content" delay={2}>
          <div className="leader-quote-mark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8h4v10h-9.983zm-14.017 0L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8h3.983v10H0z"/>
            </svg>
          </div>
          <p className="leader-quote-text">{leaderInfo.introduction}</p>
          <div className="leader-meta">
            <h3 className="leader-name">{leaderInfo.name}</h3>
            <p className="leader-title">{leaderInfo.title}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
