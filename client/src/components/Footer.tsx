import React from "react"

const Footer : React.FC = ()=>{
    return (
        <footer className="site-footer mobile--hidden" data-collection-id="">
        <div className="container">
          <div className="site-footer__inner">
            <div className="site-footer__sidebar">
              <div>
                <p className="site-footer__title">COOLMATE lắng nghe bạn!</p>
                <p className="site-footer__description" style={{ marginBottom: 30 }}>
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
                  từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
                  hơn nữa.
                </p>
                <a
                  className="site-footer__btn !tw-mb-6 !tw-inline-flex !tw-items-center !tw-gap-1 md:!tw-gap-2 !tw-font-criteria md:!tw-text-base !tw-text-sm !tw-font-normal !tw-px-6 md:!tw-px-12 !tw-py-2 md:!tw-py-4 !tw-rounded-full !tw-uppercase !tw-bg-cm-blue !tw-text-cm-white hover:!tw-bg-cm-blue/80 !tw-h-auto"
                  rel="nofollow"
                  href="#"
                  target="_blank"
                >
                  Đóng góp ý kiến{" "}
                  <svg
                    className="!tw-w-5 !tw-h-5 !tw-text-cm-white"
                    width={20}
                    height={12}
                    viewBox="0 0 20 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696698C14.4645 0.403804 13.9896 0.403805 13.6967 0.696698C13.4038 0.989591 13.4038 1.46446 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM6.55671e-08 6.75L19 6.75L19 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                </a>
              </div>
              <div style={{ width: "25%" }}>
                <div className="footer-info">
                  <div className="footer-info__icon">
                    <img src="images/icon-hotline.svg" alt="Footer Icon Phone" />
                  </div>
                  <div className="footer-info__content">
                    <span className="footer-info__title">Hotline</span>
                    <p className="footer-info__desciption">
                      <a rel="nofollow" href="#">
                        1900.272737
                      </a>{" "}
                      -{" "}
                      <a rel="nofollow" href="tel: 02877772737">
                        028.7777.2737
                      </a>
                      <br /> <span>(8:30 - 22:00)</span>
                    </p>
                  </div>
                </div>
                <div className="footer-info">
                  <div className="footer-info__icon">
                    <img src="images/icon-email.svg" alt="Footer Icon Email" />
                  </div>
                  <div className="footer-info__content">
                    <span className="footer-info__title">Email</span>
                    <p className="footer-info__desciption">
                      <a rel="nofollow" href="mailto: Cool@coolmate.me">
                        Cool@coolmate.me
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-social">
                <a
                  rel="nofollow"
                  href="https://www.facebook.com/coolmate.me"
                  className="footer-social__item"
                  target="_blank"
                >
                  <img src="images/mceclip1_43.png" alt="Footer Icon facebook" />
                </a>
                <a
                  rel="nofollow"
                  href="https://zalo.me/1517736583279228381"
                  target="_blank"
                  className="footer-social__item"
                >
                  <img src="images/mceclip2_68.png" alt="Footer Icon Zalo" />
                </a>
                <a
                  rel="nofollow"
                  href="https://www.tiktok.com/@cool.coolmate"
                  target="_blank"
                  className="footer-social__item"
                >
                  <img src="images/mceclip0_62.png" alt="Footer Icon tiktok" />
                </a>
                <a
                  rel="nofollow"
                  href="https://www.instagram.com/coolmate.me/"
                  className="footer-social__item"
                  target="_blank"
                >
                  <img src="images/icon-instar.svg" alt="Footer Icon instar" />
                </a>
                <a
                  rel="nofollow"
                  href="https://www.youtube.com/channel/UCWw8wLlodKBtEvVt1tTAsMA"
                  className="footer-social__item"
                  target="_blank"
                >
                  <img src="images/icon-youtube.svg" alt="Footer Icon youtube" />
                </a>
              </div>
            </div>
            <div className="site-footer__menu">
              <div className="footer-menu">
                <div className="footer-menu__item">
                  <p className="footer-menu__title">COOLCLUB</p>
                  <ul>
                    <li>
                      <a rel="nofollow" href="/account/register?itm_source=footerm">
                        Đăng kí thành viên
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/coolclub?itm_source=footer">
                        Ưu đãi &amp; Đặc quyền
                      </a>
                    </li>
                  </ul>
                  <p className="footer-menu__title">Tài liệu - Tuyển dụng</p>
                  <ul>
                    <li>
                      <a
                        rel="nofollow"
                        href="/lp/coolmate-101?itm_source=footer#recruitment-jobs"
                      >
                        Tuyển dụng
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="http://online.gov.vn/(X(1)S(sgmttobbtsiaq3l5itoicxhw))/Home/WebDetails/53184?AspxAutoDetectCookieSupport=1"
                        target="_blank"
                      >
                        Đăng ký bản quyền
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu__item">
                  <p className="footer-menu__title">Chính sách</p>
                  <ul>
                    <li>
                      <a rel="nofollow" href="/page/dich-vu-60-ngay-doi-tra">
                        Chính sách đổi trả 60 ngày
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/chuong-trinh-va-chinh-sach-khuyen-mai-tai-coolmate"
                      >
                        Chính sách khuyến mãi
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/chinh-sach-bao-mat-thong-tin-ca-nhan"
                      >
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/page/dich-vu-giao-hang-coolmate">
                        Chính sách giao hàng
                      </a>
                    </li>
                  </ul>
                  <p className="footer-menu__title">Coolmate.me</p>
                  <ul>
                    <li>
                      <a rel="nofollow" href="/page/changelog?itm_source=footer">
                        Lịch sử thay đổi website
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu__item">
                  <p className="footer-menu__title">Chăm sóc khách hàng</p>
                  <ul>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/11-dich-vu-tai-coolmate-co-the-ban-chua-biet"
                      >
                        Trải nghiệm mua sắm 100% hài lòng
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/page/faqs">
                        Hỏi đáp - FAQs
                      </a>
                    </li>
                  </ul>
                  <p className="footer-menu__title">Kiến thức mặc đẹp</p>
                  <ul>
                    <li>
                      <a rel="nofollow" href="/size-chart">
                        Hướng dẫn chọn size đồ nam
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/huong-dan-chon-size-do-nu">
                        Hướng dẫn chọn size đồ nữ
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/blog">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu__item">
                  <p className="footer-menu__title">Về COOLMATE</p>
                  <ul>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/quy-tac-ung-xu-cua-coolmate?itm_source=footer"
                      >
                        Quy tắc ứng xử của Coolmate
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/lp/coolmate-101?itm_source=footer">
                        Coolmate 101
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/11-dich-vu-tai-coolmate-co-the-ban-chua-biet?itm_source=footer"
                      >
                        DVKH xuất sắc
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/page/coolmate-story?itm_source=footer">
                        {" "}
                        Câu chuyện về Coolmate
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/san-pham-coolmate-duoc-san-xuat-nhu-the-nao?itm_source=footer"
                      >
                        Nhà máy
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/collection/care-and-share?itm_source=footer"
                      >
                        Care &amp; Share
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="/page/cam-ket-phat-trien-ben-vung?itm_source=footer"
                      >
                        Cam kết bền vững
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" href="/tam-nhin-2030?itm_source=footer">
                        Tầm nhìn 2030
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu__item">
                  <p className="footer-menu__title">Địa chỉ liên hệ</p>
                  <p className="footer-menu__desciption">
                    <u>Văn phòng Hà Nội:</u> Tầng 3 Tòa nhà BMM, KM2, Đường Phùng
                    Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội
                  </p>
                  <p className="footer-menu__desciption">
                    <u>Trung tâm vận hành Hà Nội:</u> Lô C8, KCN Lại Yên, Xã Lại Yên,
                    Huyện Hoài Đức, Thành phố Hà Nội
                  </p>
                  <p className="footer-menu__desciption">
                    <u>Văn phòng và Trung tâm vận hành TP. HCM:</u>
                    Lô C3, đường D2, KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ
                    Chí Minh.
                  </p>
                  <p className="footer-menu__desciption">
                    <u>Trung tâm R&amp;D:</u> T6-01, The Manhattan Vinhomes Grand
                    Park, Long Bình, TP. Thủ Đức
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__after">
            <div className="copyright">
              <p className="copyright__title">@ CÔNG TY TNHH FASTECH ASIA</p>
              <p className="copyright__description">
                Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp
                do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
              </p>
            </div>
            <div className="site-footer__logo">
              <a
                rel="nofollow"
                href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/coolmateme-1646213826"
                title="Chung nhan Tin Nhiem Mang"
                target="_blank"
                style={{ marginRight: 10 }}
              >
                <img
                  src="images/handle_cert.png"
                  style={{ maxHeight: 40 }}
                  alt="Chung nhan Tin Nhiem Mang"
                />
              </a>
              <a
                rel="nofollow"
                href="//www.dmca.com/Protection/Status.aspx?ID=c6fdbdee-127c-4cf1-923d-7efe75201df6"
                title="DMCA.com Protection Status"
                className="dmca-badge"
                style={{ marginRight: 10 }}
                target="_blank"
              >
                <img
                  src="images/dmca_protected_15_120.png"
                  alt="DMCA.com Protection Status"
                  style={{ maxHeight: 40 }}
                />
              </a>
              <a rel="nofollow" href="#" style={{ marginRight: 10 }}>
                <img
                  src="images/Coolmate-info.png"
                  alt="Coolmate info"
                  width={39}
                  height={40}
                />
              </a>
              <a
                rel="nofollow"
                href="http://online.gov.vn/(X(1)S(3e0hkhscv5zs101mhuopx43a))/Home/WebDetails/53184?AspxAutoDetectCookieSupport=1"
                target="_blank"
              >
                <img
                  src="images/logoSaleNoti.png"
                  alt="Coolmate info"
                  width={106}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}


export default Footer;