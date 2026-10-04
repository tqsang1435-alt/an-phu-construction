import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { 
    n: "01", 
    title: "Tiếp nhận yêu cầu", 
    text: "Nhận thông tin, bản vẽ, khối lượng và điều kiện hiện trường.",
    img: "/images/process-01-survey.jpg"
  },
  { 
    n: "02", 
    title: "Khảo sát, làm rõ", 
    text: "Trao đổi phạm vi, yêu cầu kỹ thuật và tiến độ dự kiến.",
    img: "/images/process-02-site-inspection.jpg"
  },
  { 
    n: "03", 
    title: "Thống nhất báo giá", 
    text: "Làm rõ đơn giá, điều khoản, trách nhiệm và mốc triển khai.",
    img: "/images/process-03-planning.jpg"
  },
  { 
    n: "04", 
    title: "Thi công, nghiệm thu", 
    text: "Phối hợp triển khai, kiểm tra chất lượng và bàn giao theo thỏa thuận.",
    img: "/images/process-04-construction.jpg"
  },
];

export function Process() {
  return (
    <section className="section section-light" id="process">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Quy trình phối hợp rõ ràng</h2>
          <p className="section-intro">
            Mỗi hạng mục được trao đổi và thống nhất theo phạm vi công việc, 
            yêu cầu kỹ thuật và điều kiện thực tế của dự án.
          </p>
        </Reveal>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <Reveal as="article" className="process-node" key={step.n} delay={(index % 4) + 1}>
              <div className="process-marker">{step.n}</div>
              <div className="process-image-wrapper">
                <Image 
                  src={step.img} 
                  alt={`Bước ${step.n}: ${step.title}`} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="process-node-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
