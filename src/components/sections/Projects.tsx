import Image from "next/image";
import { projectPlaceholders } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Hạng mục thực tế, năng lực rõ ràng.</h2>
          <p className="section-intro">
            Thay các khung minh họa bằng ảnh công trình thực tế được phép sử dụng, 
            kèm vai trò và phạm vi công việc chính xác.
          </p>
        </Reveal>
        
        <div className="project-grid">
          {projectPlaceholders.map((project, index) => {
            const imagePath = `/project-${index + 1}.jpg`;
            return (
              <Reveal as="article" className="project-card" key={project.title} delay={(index % 2) + 1}>
                <div className="project-card-image" style={{ background: 'none' }}>
                  <Image 
                    src={imagePath}
                    alt={project.imageLabel}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
