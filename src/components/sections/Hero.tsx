import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play, Mouse } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg">
        <Image 
          src="/images/hero-building-hr.jpg" 
          alt="Thi công hạ tầng thực tế" 
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          quality={100}
          unoptimized={true}
          priority
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-top-bar">
          <Reveal className="hero-eyebrow" delay={0.2}>
            <span className="line"></span> AN PHÚ CONSTRUCTION
          </Reveal>
          <Reveal className="hero-pagination" delay={0.4}>
            01 <span className="line"></span> / 04
          </Reveal>
        </div>

        <div className="hero-middle">
          <Reveal as="h1" delay={0.6}>
            Vững nền móng.<br />Bền cùng thời gian.
          </Reveal>
          
          <Reveal delay={0.8}>
            <p className="hero-description">
              An Phú đồng hành cùng bạn trong hành trình kiến tạo<br/>những công trình chất lượng, an toàn và bền vững.
            </p>
          </Reveal>

          <Reveal delay={1} className="hero-cta-group">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Khám phá công trình <ArrowRight size={16} />
            </a>
            <a href="#about" className="hero-btn hero-btn-secondary">
              <span className="play-icon"><Play size={12} fill="currentColor" /></span>
              Xem giới thiệu
            </a>
          </Reveal>
        </div>

        <Reveal delay={1.2} className="hero-bottom-bar">
          <div className="hero-scroll-indicator">
            <span className="scroll-line"></span>
            <Mouse size={14} strokeWidth={2} />
            <span className="scroll-text">Scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
