import { Reveal } from "@/components/ui/Reveal";

export function Capabilities() {
  return (
    <section className="section section-light" id="about">
      <div className="container split-layout">
        <Reveal className="split-text">
          <h3>Đối tác thi công trong chuỗi xây dựng.</h3>
          <p>
            An Phú đặt mục tiêu trở thành đơn vị phối hợp tin cậy cho các nhà thầu 
            chính và đối tác trong những hạng mục hạ tầng phù hợp.
          </p>
        </Reveal>
        <Reveal className="split-text" delay={1}>
          <p style={{ opacity: 0.5, fontStyle: "italic" }}>
            Nội dung này là bản nháp định hướng. Cần cập nhật thông tin pháp lý, 
            nhân sự, thiết bị, chứng chỉ và kinh nghiệm đã được doanh nghiệp xác nhận.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
