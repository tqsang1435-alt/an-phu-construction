"use client";

import Image from "next/image";
import { siteInfo } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Phone, Mail, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      if (selectedFile) {
        formData.set("file", selectedFile);
      } else {
        formData.delete("file");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setFormState("error");
        let errorText = result.message || "Không thể gửi yêu cầu lúc này. Vui lòng thử lại.";
        if (result.errors) {
          const firstError = Object.values(result.errors)[0] as string;
          if (firstError) errorText = firstError;
        }
        setErrorMessage(errorText);
        return;
      }

      setFormState("success");
      form.reset();
      setSelectedFile(null);
    } catch (error) {
      setFormState("error");
      setErrorMessage("Lỗi kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormState("idle");
      setErrorMessage("");
      setSelectedFile(null);
    }, 300);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        
        {/* Left Column: Intro */}
        <Reveal className="contact-col-left">
          <div className="contact-logo-wrapper">
            <Image 
              src="/images/logo.png" 
              alt="An Phú Logo" 
              width={160} 
              height={53} 
              style={{ objectFit: 'contain' }} 
            />
          </div>
          <p className="eyebrow">LIÊN HỆ VỚI CHÚNG TÔI</p>
          <h2>Trao đổi hạng mục công trình của bạn.</h2>
          <p className="contact-description">
            An Phú sẵn sàng tiếp nhận và trao đổi về các hạng mục thi công: 
            đường giao thông, cầu, cống, hệ thống thoát nước, công trình bê tông và hạ tầng kỹ thuật.
          </p>
          <div className="contact-message">
            <span className="message-line"></span>
            <p>Cùng xây dựng những công trình bền vững<br/>cho tương lai.</p>
          </div>
          <button className="button contact-cta-button" onClick={() => setIsModalOpen(true)}>
            Gửi yêu cầu dự án
          </button>
        </Reveal>

        {/* Middle Column: Info */}
        <Reveal className="contact-col-middle" delay={1}>
          <div className="contact-status-badge">
            <span className="status-dot"></span>
            <span className="status-text">SẴN SÀNG HỢP TÁC</span>
          </div>

          <div className="contact-list">
            <div className="contact-list-item">
              <div className="icon-wrapper icon-blue"><MapPin size={20} color="#1a1a1a" strokeWidth={2} /></div>
              <div className="item-content">
                <span className="item-label">ĐỊA CHỈ</span>
                <p className="item-value">Mai Phụ, Hà Tĩnh</p>
              </div>
            </div>

            <div className="contact-list-item">
              <div className="icon-wrapper icon-mint"><Phone size={20} color="#1a1a1a" strokeWidth={2} /></div>
              <div className="item-content">
                <span className="item-label">ĐIỆN THOẠI</span>
                <p className="item-value">{siteInfo.phone || "[Đang cập nhật]"}</p>
              </div>
            </div>

            <div className="contact-list-item">
              <div className="icon-wrapper icon-blush"><Mail size={20} color="#1a1a1a" strokeWidth={2} /></div>
              <div className="item-content">
                <span className="item-label">EMAIL</span>
                <p className="item-value">{siteInfo.email || "[Đang cập nhật]"}</p>
              </div>
            </div>

            <div className="contact-list-item">
              <div className="icon-wrapper icon-blue"><MessageCircle size={20} color="#1a1a1a" strokeWidth={2} /></div>
              <div className="item-content">
                <span className="item-label">ZALO</span>
                <p className="item-value">
                  {siteInfo.zaloUrl ? (
                    <a href={siteInfo.zaloUrl} target="_blank" rel="noopener noreferrer">Liên hệ qua Zalo</a>
                  ) : (
                    "[Đang cập nhật]"
                  )}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Image */}
        <Reveal className="contact-col-right" delay={2}>
          <div className="image-composition">
            <div className="decor-solid"></div>
            <div className="decor-outline"></div>
            <div className="contact-image-wrapper">
              <Image 
                src="/images/process-04-construction.jpg" 
                alt="Công trình An Phú" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
          <div className="right-footer-text">
            AN PHÚ CONSTRUCTION <span className="line"></span>
          </div>
        </Reveal>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Đóng">
              <X size={24} />
            </button>
            
            {formState === "success" ? (
              <div className="modal-success">
                <h3>Đã ghi nhận thông tin</h3>
                <p>
                  Xin cảm ơn bạn đã để lại thông tin. 
                  Hồ sơ và yêu cầu dự án của bạn sẽ được bộ phận kỹ thuật xem xét và phản hồi sớm nhất.
                </p>
                <button className="button" onClick={closeModal}>Đóng cửa sổ</button>
              </div>
            ) : (
              <div className="modal-form-content">
                <h3 className="modal-title">Gửi yêu cầu dự án</h3>
                <p className="modal-subtitle">Vui lòng cung cấp thông tin hạng mục cần thi công, An Phú sẽ liên hệ lại để trao đổi chi tiết.</p>
                
                {formState === "error" && (
                  <div className="modal-error-message">
                    {errorMessage}
                  </div>
                )}
                
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="modal-form-grid">
                    <div className="modal-form-col">
                      <label className="modal-field">
                        <span className="field-label">Họ và tên *</span>
                        <input name="name" required placeholder="Nguyễn Văn A" disabled={formState === "submitting"} autoComplete="name" />
                      </label>
                      <label className="modal-field">
                        <span className="field-label">Số điện thoại *</span>
                        <input type="tel" name="phone" required placeholder="09xx xxx xxx" disabled={formState === "submitting"} autoComplete="tel" />
                      </label>
                      <label className="modal-field">
                        <span className="field-label">Email *</span>
                        <input type="email" name="email" required placeholder="email@congty.com" disabled={formState === "submitting"} autoComplete="email" />
                      </label>
                      <label className="modal-field">
                        <span className="field-label">Chức vụ</span>
                        <input name="position" placeholder="Ví dụ: Giám đốc dự án" disabled={formState === "submitting"} autoComplete="organization-title" />
                      </label>
                    </div>
                    
                    <div className="modal-form-col">
                      <label className="modal-field">
                        <span className="field-label">Tên công ty / Đơn vị tổng thầu *</span>
                        <input name="company" required placeholder="Tên doanh nghiệp..." disabled={formState === "submitting"} autoComplete="organization" />
                      </label>
                      <label className="modal-field">
                        <span className="field-label">Hạng mục quan tâm / Tên dự án</span>
                        <input name="project" placeholder="Ví dụ: Thi công nền đường, Cống thoát nước..." disabled={formState === "submitting"} />
                      </label>
                      <div className="modal-field file-field">
                        <span className="field-label">Đính kèm hồ sơ / Bản vẽ</span>
                        <div className="file-upload-wrapper">
                          <label className="file-upload-label" htmlFor="project-file">
                            <span className="file-upload-text">
                              {selectedFile ? `✓ ${selectedFile.name}` : '+ Đính kèm tài liệu (PDF, DWG, JPG...)'}
                            </span>
                          </label>
                          <input 
                            type="file" 
                            id="project-file"
                            className="visually-hidden" 
                            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg"
                            disabled={formState === "submitting"}
                          />
                          {selectedFile && (
                            <button type="button" className="remove-file-btn" onClick={() => setSelectedFile(null)} aria-label="Xóa file">
                              <X size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <label className="modal-field textarea-field">
                    <span className="field-label">Mô tả tóm tắt yêu cầu dự án</span>
                    <textarea 
                      name="description" 
                      placeholder="Quy mô, hạng mục, tiến độ dự kiến hoặc yêu cầu cần trao đổi..."
                      rows={2}
                      disabled={formState === "submitting"} 
                    ></textarea>
                  </label>

                  <button className="submit-button" type="submit" disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Đang gửi..." : "Gửi yêu cầu dự án"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
