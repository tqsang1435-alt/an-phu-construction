import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Vùng A — Brand introduction */}
        <Reveal className="footer-brand-intro">
          <div className="brand-header">
            <Image 
              src="/images/logo.png" 
              alt="An Phú Logo" 
              width={140} 
              height={46} 
              style={{ objectFit: 'contain' }} 
            />
            <span className="brand-label">AN PHÚ / CONSTRUCTION</span>
          </div>
          
          <div className="brand-content">
            <div className="brand-text">
              <h2 className="brand-headline">Cùng xây dựng những công trình bền vững.</h2>
              <p className="brand-description">
                Đồng hành cùng các dự án giao thông, cầu, cống, thoát nước và hạ tầng kỹ thuật 
                bằng tinh thần trách nhiệm, sự chỉn chu và cam kết chất lượng.
              </p>
              <a href="#contact" className="brand-cta">Trao đổi về công trình ↗</a>
            </div>
            <div className="brand-image">
              <div className="footer-image-wrapper">
                <Image 
                  src="/images/process-04-construction.jpg" 
                  alt="Công trình hạ tầng An Phú" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Vùng B — Navigation */}
        <Reveal className="footer-navigation" delay={1}>
          <div className="footer-col">
            <h4 className="footer-col-title">KHÁM PHÁ</h4>
            <ul className="footer-links">
              <li><Link href="#leader">Giới thiệu</Link></li>
              <li><Link href="#services">Năng lực thi công</Link></li>
              <li><Link href="#projects">Công trình tiêu biểu</Link></li>
              <li><Link href="#process">Quy trình</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">LĨNH VỰC</h4>
            <ul className="footer-links">
              <li>Đường giao thông</li>
              <li>Cầu và cống</li>
              <li>Hệ thống thoát nước</li>
              <li>Công trình bê tông</li>
              <li>Hạ tầng kỹ thuật</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">LIÊN HỆ</h4>
            <ul className="footer-links">
              <li>{siteInfo.location}</li>
              <li>ĐT: {siteInfo.phone || "[Đang cập nhật]"}</li>
              <li>Email: {siteInfo.email || "[Đang cập nhật]"}</li>
              <li>
                Zalo: {siteInfo.zaloUrl ? (
                  <a href={siteInfo.zaloUrl} target="_blank" rel="noopener noreferrer">Liên hệ Zalo</a>
                ) : (
                  "[Đang cập nhật]"
                )}
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Vùng C — Bottom Bar */}
        <Reveal className="footer-bottom-bar" delay={2}>
          <div className="bottom-left">
            © {currentYear} An Phú. All rights reserved.
          </div>
          <div className="bottom-center">
            Mai Phụ, Hà Tĩnh, Việt Nam
          </div>
          <div className="bottom-right">
            <a href="#home" className="back-to-top">Lên đầu trang ↑</a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
