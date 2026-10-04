import { services } from "@/lib/site-data";
import { ArrowUpRight, Blocks, Construction, Droplets, Route } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ElementType> = {
  road: Route,
  drainage: Droplets,
  concrete: Blocks,
  infrastructure: Construction,
};

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Nhận thi công theo từng hạng mục cụ thể.</h2>
          <p className="section-intro">
            Phạm vi nhận việc sẽ được xác định theo hồ sơ kỹ thuật, khối lượng, 
            điều kiện hiện trường và năng lực thực tế của An Phú.
          </p>
        </Reveal>
        
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || ArrowUpRight;
            return (
              <Reveal as="article" className="service-card" key={service.number} delay={(index % 4) + 1}>
                <div className="service-card-top">
                  <span className="service-label">Hạng mục {service.number}</span>
                  <span className="service-card-icon"><Icon size={28} strokeWidth={2.75} color="#1a1a1a" /></span>
                </div>
                <div className="service-card-bottom">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
