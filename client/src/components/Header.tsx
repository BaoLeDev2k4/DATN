import React from "react";

const Header: React.FC = () => {
  return (
    <header className="site-header">
    {/* region 11 */}


    <div className="topbar tw-bg-neutral-500 tw-text-cm-neutral-200 tw-h-8" id="topbar">
  <ul className="max-md:tw-flex-1 tw-h-full tw-flex tw-items-center tw-gap-4 tw-justify-evenly md:tw-justify-between [&>li:not(:first-child)]:tw-relative [&>li:not(:first-child)]:before:tw-content-[''] [&>li:not(:first-child)]:before:tw-absolute max-md:[&>li:not(:first-child)]:before:tw-left-[-18%] [&>li:not(:first-child)]:before:tw-left-[-8px] [&>li:not(:first-child)]:before:tw-top-1/2 [&>li:not(:first-child)]:before:tw-transform [&>li:not(:first-child)]:before:-tw-translate-y-1/2 [&>li:not(:first-child)]:before:tw-h-4 [&>li:not(:first-child)]:before:tw-w-[1px] [&>li:not(:first-child)]:before:tw-bg-cm-neutral-300/20 [&>li]:tw-px-2 [&>li]:tw-h-full">
    <li className="hover:tw-bg-[#404040] tw-transition-colors" rel-script="sub-menu" data-menu-id="coolclub">
      <a
        href="#"
        className="tw-flex tw-items-center tw-h-full tw-text-[11px] md:tw-text-xs tw-font-criteria tw-uppercase tw-font-normal tw-line-clamp-1"
        data-ga-tracking-value="topbar3-coolclub"
        data-ga-tracking-label="coolclub"
      >
        VỀ COOLMATE
      </a>
    </li>
    <li className="hover:tw-bg-[#404040] tw-transition-colors" rel-script="sub-menu" data-menu-id="cxp">
      <a
        href="#"
        className="tw-flex tw-items-center tw-h-full tw-text-[11px] md:tw-text-xs tw-font-criteria tw-uppercase tw-font-normal"
        data-ga-tracking-value="topbar1-cxp"
        data-ga-tracking-label="84rising"
      >
        COOLXPRINT
      </a>
    </li>
  </ul>

  <ul className="tw-hidden md:tw-flex tw-h-full tw-items-center tw-justify-end tw-gap-4 [&>li:not(:first-child)]:tw-relative [&>li:not(:first-child)]:before:tw-content-[''] [&>li:not(:first-child)]:before:tw-absolute [&>li:not(:first-child)]:before:tw-left-[-8px] [&>li:not(:first-child)]:before:tw-top-1/2 [&>li:not(:first-child)]:before:tw-transform [&>li:not(:first-child)]:before:-tw-translate-y-1/2 [&>li:not(:first-child)]:before:tw-h-4 [&>li:not(:first-child)]:before:tw-w-[1px] [&>li:not(:first-child)]:before:tw-bg-cm-neutral-200 [&>li:not(:first-child)]:before:tw-opacity-20 [&>li]:tw-px-2 [&>li]:tw-h-full">
    <li className="hover:tw-bg-[#404040] tw-transition-colors" rel-script="sub-menu" data-menu-id="page-coolclub">
      <a
        className="tw-flex tw-items-center tw-gap-1 tw-h-full"
        href="#"
        data-ga-tracking-value="topbar1-page-coolclub"
      >
        CoolClub
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="tw-w-4 tw-h-4">
          <path
            d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
            fill="#D1D1D1"
          />
        </svg>
      </a>
    </li>
    <li
      className="hover:tw-bg-[#404040] tw-transition-colors tw-text-cm-neutral-200/60 hover:tw-text-cm-neutral-200"
      rel-script="sub-menu"
      data-menu-id="blog"
    >
      <a
        href="#"
        data-ga-tracking-value="topbar1-blog"
        className="tw-flex tw-items-center tw-h-full !tw-font-normal"
      >
        Blog
      </a>
    </li>
    <li
      className="hover:tw-bg-[#404040] tw-transition-colors tw-text-cm-neutral-200/60 hover:tw-text-cm-neutral-200"
      rel-script="sub-menu"
      data-menu-id="about"
    >
      <a
        href="#"
        data-ga-tracking-value="topbar1-trung-tam-dich-vu-khach-hang"
        className="tw-flex tw-items-center tw-h-full !tw-font-normal"
      >
        Trung tâm CSKH
      </a>
    </li>
    <li
      className="hover:tw-bg-[#404040] tw-transition-colors tw-text-cm-neutral-200/60 hover:tw-text-cm-neutral-200"
      rel-script="sub-menu"
      data-menu-id="about"
    >
      <a
        id="btn-login-header"
        style={{ cursor: "pointer" }}
        data-ga-tracking-value="topbar1-login"
        className="tw-flex tw-items-center tw-h-full !tw-font-normal"
      >
        Đăng nhập
      </a>
    </li>
  </ul>
</div>

{/* reigon 2 */}

<div className="header" id="header-menu">
  <div className="header__inner">
    <div className="header__toggle">
      <div className="">
        <div className="menu-toggle tw-cursor-pointer">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="mobile--visible tablet--visible">
        <div
          rel-script="search-toggle"
          className="menu-toggle is-active tw-cursor-pointer"
          ga-tracking-value="mbmenu-search-header"
          ga-tracking-label="Tìm kiếm header - mobile"
        >
          <div className="menu-toggle__search">
            <img src="images/icon-search-new-v2.svg" alt="Icon Search" />
          </div>
        </div>
      </div>
    </div>
    <div className="header__logo !tw-h-full">
      <a href="/" className="tw-h-full tw-flex tw-items-center">
        <img
          className="tw-h-[50px]"
          src="images/logo-coolmate-new-v2.png"
          alt="Logo Coolmate"
        />
      </a>
    </div>
    <div
      className="desk--hidden mobile--visible tablet--visible header-search-mobile"
      rel-script="header-search-content"
    >
      <form action="/spotlight" method="GET">
        <div className="header-search__wrapper tw-gap-1">
          <div
            rel-script="search-toggle"
            className="tw-cursor-pointer tw-flex tw-items-center tw-justify-start tw-w-6 tw-h-6"
          >
            <img
              src="images/mceclip0_8.png"
              alt="mceclip0_8"
              style={{ height: 16 }}
            />
          </div>
          <label className="header-search__field">
            <input
              id="input-spotlight-mobile"
              type="text"
              name="search"
              rel-script="spotlight-search-control-mobile"
              placeholder="Tìm kiếm sản phẩm..."
              className="header-search__control one-whole"
              autoComplete="off"
            />
            <button className="header-search__submit" />
          </label>
          <div
            className="header-search__close tw-cursor-pointer"
            rel-script="spotlight-search-close"
          />
        </div>
      </form>
      <div
        className="spotlight-search-content"
        rel-script="spotlight-search-content"
      >
        <div className="spotlight-search-content__wrapper">
          <div className="spotlight-search-content__inner is-active">
            <div className="spotlight-search-content__topkeyword is-active">
              <div
                className="homepage-search__content one-whole"
                style={{ display: "block" }}
              >
                <p
                  className="homepage-search__description"
                  style={{ textAlign: "left" }}
                >
                  Từ khóa nổi bật ngày hôm nay
                </p>
                <div className="homepage-search__buttons">
                  <button
                    className="homepage-search__button"
                    rel-script="homepage-search-picker"
                    ga-tracking-value="mbheader_search_kw"
                    ga-tracking-label="Áo thun"
                  >
                    Áo thun
                  </button>
                  <button
                    className="homepage-search__button"
                    rel-script="homepage-search-picker"
                    ga-tracking-value="mbheader_search_kw"
                    ga-tracking-label=" Quần Shorts"
                  >
                    {" "}
                    Quần Shorts
                  </button>
                  <button
                    className="homepage-search__button"
                    rel-script="homepage-search-picker"
                    ga-tracking-value="mbheader_search_kw"
                    ga-tracking-label=" Áo Polo"
                  >
                    {" "}
                    Áo Polo
                  </button>
                  <button
                    className="homepage-search__button"
                    rel-script="homepage-search-picker"
                    ga-tracking-value="mbheader_search_kw"
                    ga-tracking-label=" Áo khoác chống nắng"
                  >
                    {" "}
                    Áo khoác chống nắng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="spotlight-header-search">
            <div className="spotlight-header-search__suggestions">
              <ul
                id="search-suggestions-mobile"
                className="search-suggestions"
              ></ul>
            </div>
            <p
              className="spotlight-header-search__title"
              style={{ fontWeight: "bold", fontSize: 18, marginTop: 0 }}
            >
              Sản phẩm
            </p>
            <div
              className="grid spotlight-header-search__wrapper grid--four-columns large-grid--four-columns tablet-grid--three-columns mobile-grid--two-columns"
              rel-script="spotlight-header-search-mobile"
            >
              <img
                src="images/loading_1.svg"
                className="loading"
                alt="loading"
              />
            </div>
            <div className="spotlight-header-search__viewmore">
              <div className="btn btn-primary tw-cursor-pointer">
                Xem tất cả
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile--visible tablet--visible"></div>
    <div className="mobile--hidden tablet--hidden">
      <ul className="nav__sub nav__sub-active tw-h-full">
        <li
          data-title="OUTLET"
          className="nav__sub-item active-menu tw-h-full hover:tw-border-cm-error-500 hover:tw-border-b-[3px]"
        >
          <a
            ga-tracking-value="menu__main-outlet"
            ga-tracking-label="OUTLET"
            href="#"
            className="tw-relative tw-font-medium tw-text-center"
          >
            <span className="tw-font-semibold tw-text-cm-error-500 tw-text-end tw-relative">
              OUTLET
              <span className="tw-text-tiny 2xl:tw-text-small tw-font-normal tw-absolute tw-top-[-80%] tw-right-0">
                -50%
              </span>
            </span>
          </a>
          <div className="mega-menu mega-menu--product">
            <div className="mega-menu__wrapper">
              <div className="mega-menu__inner">
                <div
                  className="mega-menu__item tw-flex tw-flex-col tw-justify-between"
                  style={{ flex: "0 0 32%" }}
                >
                  <div className="grid grid--one-columns tw-px-10 tw-py-8">
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 xl:tw-space-y-4"
                      >
                        <li className="">
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-outlet__outlet"
                          >
                            Outlet
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li className="">
                          <a
                            href="#"
                            ga-tracking-value="menu__main-outlet__giam-den-30"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Giảm đến 30%
                            </div>
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            ga-tracking-value="menu__main-outlet__giam-den-50"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Giảm đến 50%
                            </div>
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#"
                            ga-tracking-value="menu__main-outlet__giam-den-70"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Giảm đến 70%
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tw-border-l tw-border-cm-neutral-300"
                  style={{ flex: "0 0 68%", borderRight: "none" }}
                >
                  <div className="tw-grid tw-grid-cols-3 tw-gap-5 tw-px-10 tw-py-8">
                    <div className="">
                      <a
                        href="#"
                        ga-tracking-value="menu__main-outlet__banner-vitri-1"
                        ga-tracking-label="Áo Nam Outlet Sale"
                      >
                        <div className="tw-rounded-lg tw-relative tw-overflow-hidden tw-group">
                          <img
                            loading="lazy"
                            src="images/mceclip4_98.jpg"
                            alt=""
                            className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg tw-transform tw-duration-500 group-hover:tw-scale-105"
                          />
                          <div className="tw-absolute tw-bottom-1 tw-left-4 tw-right-0 tw-font-medium tw-text-white tw-text-xs xl:tw-text-sm 2xl:tw-text-base tw-line-clamp-1">
                            Áo Nam Outlet Sale
                          </div>
                          <span className="tw-absolute tw-top-1 tw-right-1 tw-text-xs tw-font-medium tw-text-white tw-bg-cm-error-500 tw-px-2 tw-py-[2px] tw-rounded-full">
                            -50%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="#"
                        ga-tracking-value="menu__main-outlet__banner-vitri-2"
                        ga-tracking-label="Quần Shorts Nam Outlet Sale"
                      >
                        <div className="tw-rounded-lg tw-relative tw-overflow-hidden tw-group">
                          <img
                            loading="lazy"
                            src="images/mceclip3_82.jpg"
                            alt=""
                            className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg tw-transform tw-duration-500 group-hover:tw-scale-105"
                          />
                          <div className="tw-absolute tw-bottom-1 tw-left-4 tw-right-0 tw-font-medium tw-text-white tw-text-xs xl:tw-text-sm 2xl:tw-text-base tw-line-clamp-1">
                            Quần Shorts Nam Outlet Sale
                          </div>
                          <span className="tw-absolute tw-top-1 tw-right-1 tw-text-xs tw-font-medium tw-text-white tw-bg-cm-error-500 tw-px-2 tw-py-[2px] tw-rounded-full">
                            -50%
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a
                        href="#"
                        ga-tracking-value="menu__main-outlet__banner-vitri-3"
                        ga-tracking-label="Quần Lót Nam Outlet Sale"
                      >
                        <div className="tw-rounded-lg tw-relative tw-overflow-hidden tw-group">
                          <img
                            loading="lazy"
                            src="images/mceclip5_14.jpg"
                            alt=""
                            className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg tw-transform tw-duration-500 group-hover:tw-scale-105"
                          />
                          <div className="tw-absolute tw-bottom-1 tw-left-4 tw-right-0 tw-font-medium tw-text-white tw-text-xs xl:tw-text-sm 2xl:tw-text-base tw-line-clamp-1">
                            Quần Lót Nam Outlet Sale
                          </div>
                          <span className="tw-absolute tw-top-1 tw-right-1 tw-text-xs tw-font-medium tw-text-white tw-bg-cm-error-500 tw-px-2 tw-py-[2px] tw-rounded-full">
                            -50%
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          data-title="NAM"
          className="nav__sub-item active-menu tw-h-full hover:tw-border-cm-neutral-900 hover:tw-border-b-[3px]"
        >
          <a
            href="#"
            ga-tracking-value="menu__main-nam"
            ga-tracking-label="NAM"
            style={{ position: "relative" }}
          >
            <div className="">
              <span className="tw-relative">NAM</span>
            </div>
          </a>
          <div className="mega-menu mega-menu--product">
            <div className="mega-menu__wrapper">
              <div className="mega-menu__inner">
                <div
                  className="mega-menu__item tw-flex tw-flex-col tw-justify-between"
                  style={{ flex: "0 0 72%" }}
                >
                  <div className="grid grid--five-columns tw-px-10 tw-py-8">
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nam__tat-ca-san-pham"
                          >
                            Tất cả sản phẩm
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__san-pham-moi"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 hover:tw-text-cm-primary-500"
                            style={{ color: "#273BCD", fontWeight: 600 }}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Sản phẩm mới
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ban-chay-nhat"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 hover:tw-text-cm-primary-500"
                            style={{ color: "#000000", fontWeight: 600 }}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Bán chạy nhất
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/collection/ecc-collection?itm_source=navbar"
                            ga-tracking-value="menu__main-nam__ecc-collection"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              ECC Collection
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__excool-collection"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Excool Collection
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__copper-denim"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Copper Denim
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__promax"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Promax
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-nam"
                          >
                            Áo Nam
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-tanktop"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Tanktop
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-thun"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Thun
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-the-thao"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Thể Thao
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-polo"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Polo
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-so-mi"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Sơ Mi
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-dai-tay"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Dài Tay
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__ao-khoac"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Khoác
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__graphic-tees"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Graphic Tees
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nam__quan-nam"
                          >
                            Quần Nam
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-short"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Short
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-jogger"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Jogger
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-the-thao"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Thể Thao
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-dai"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Dài
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-jean"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Jean
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__quan-boi"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Bơi
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href=""
                            ga-tracking-value="menu__main-nam__quan-lot-nam"
                          >
                            Quần lót nam
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__brieftam-giac"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Brief(Tam giác)
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__trunkboxer"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Trunk(Boxer)
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__boxer-brief-boxer-dai"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Boxer Brief (Boxer dài)
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__long-leg"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Long Leg
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            ga-tracking-value="menu__main-nam__short-mac-nha"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Short mặc nhà
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nam__phu-kien"
                          >
                            Phụ kiện
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nam__div-classtw-leading-4-mdtw-leading-5tat-ca-phu-kien-br-span-classtw-italic-tat-mu-tui-spandiv"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600 "
                            style={{}}
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              <div className="tw-leading-4 md:tw-leading-5">
                                Tất cả phụ kiện <br />
                                <span className="tw-italic">
                                  {" "}
                                  (Tất, mũ, túi...){" "}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tw-flex tw-gap-2 tw-bg-cm-neutral-100 tw-text-cm-neutral-900 tw-text-sm tw-uppercase tw-px-10">
                    <div className="tw-block tw-p-6 tw-border-r tw-border-cm-neutral-200 tw-text-cm-neutral-500 tw-text-sm tw-font-normal">
                      Theo nhu cầu
                    </div>
                    <div className="tw-flex tw-gap-2">
                      <a
                        href="#"
                        ga-tracking-value="menu__main-nam__theo-nhu-cau__do-lot"
                        className="tw-p-6 tw-font-medium tw-text-cm-neutral-900 tw-text-sm hover:tw-text-cm-primary-500 tw-transition-colors tw-duration-150"
                      >
                        ĐỒ LÓT
                      </a>
                      <a
                        href="#"
                        ga-tracking-value="menu__main-nam__theo-nhu-cau__do-the-thao"
                        className="tw-p-6 tw-font-medium tw-text-cm-neutral-900 tw-text-sm hover:tw-text-cm-primary-500 tw-transition-colors tw-duration-150"
                      >
                        ĐỒ THỂ THAO
                      </a>
                      <a
                        href="#"
                        ga-tracking-value="menu__main-nam__theo-nhu-cau__mac-hang-ngay"
                        className="tw-p-6 tw-font-medium tw-text-cm-neutral-900 tw-text-sm hover:tw-text-cm-primary-500 tw-transition-colors tw-duration-150"
                      >
                        MẶC HÀNG NGÀY
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-col mega-menu__item flex-col-2 tw-border-l tw-border-cm-neutral-300"
                  style={{ flex: "0 0 28%" }}
                >
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <a
                      href="#"
                      ga-tracking-value="menu__main-nam__banner-vitri__1"
                      ga-tracking-label="Áo Sơ Mi Dài Tay Essentials Cotton"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip24.png"
                          alt="Áo Sơ Mi Dài Tay Essentials Cotton"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            Áo Sơ Mi Dài Tay Essentials Cotton
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      ga-tracking-value="menu__main-nam__banner-vitri__2"
                      ga-tracking-label="Quần Jeans Nam siêu nhẹ"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip23.png"
                          alt="Quần Jeans Nam siêu nhẹ"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            Quần Jeans Nam siêu nhẹ
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          data-title="NỮ"
          className="nav__sub-item active-menu tw-h-full hover:tw-border-cm-neutral-900 hover:tw-border-b-[3px]"
        >
          <a
            href="#"
            ga-tracking-value="menu__main-nu"
            ga-tracking-label="NỮ"
            style={{ position: "relative" }}
          >
            NỮ
          </a>
          <div className="mega-menu mega-menu--product">
            <div className="mega-menu__wrapper">
              <div className="mega-menu__inner">
                <div
                  className="mega-menu__item tw-flex tw-flex-col tw-justify-between"
                  style={{ flex: "0 0 72%" }}
                >
                  <div className="grid grid--five-columns tw-px-10 tw-py-8">
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nu__tat-ca-san-pham"
                          >
                            Tất cả sản phẩm
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__chay-bo"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Chạy bộ
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__yoga-pilates"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Yoga &amp; Pilates
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__the-thao-chung"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Thể thao chung
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__pickleball-tennis"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-400"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Pickleball &amp; Tennis
                              <br />
                              <span className="tw-italic"> (Coming soon)</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__cau-long-bong-ban"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-400"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Cầu lông &amp; Bóng bàn
                              <br />
                              <span className="tw-italic"> (Coming soon)</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nu__ao-nu"
                          >
                            Áo nữ
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__ao-sport-bra"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Sport Bra
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__ao-croptop"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Croptop
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__ao-singlet"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Singlet
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__ao-thun"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Áo Thun
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__graphic-tees"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Graphic Tees
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nu__quan-nu"
                          >
                            Quần Nữ
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__quan-legging"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Legging
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__quan-shorts"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Shorts
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__quan-biker-shorts"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Quần Biker Shorts
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nu__phu-kien"
                          >
                            Phụ kiện
                            <svg
                              className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__div-classtw-leading-4-mdtw-leading-5tat-ca-phu-kien-br-span-classtw-italic-tat-mu-tui-spandiv"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              <div className="tw-leading-4 md:tw-leading-5">
                                Tất cả phụ kiện <br />
                                <span className="tw-italic">
                                  {" "}
                                  (Tất, mũ, túi...){" "}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul
                        rel-script="mega-menu-active"
                        className="tw-list-none tw-p-0 tw-space-y-3 2xl:tw-space-y-4"
                      >
                        <li>
                          <a
                            className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900"
                            href="#"
                            ga-tracking-value="menu__main-nu__kham-pha"
                          >
                            Khám phá
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__huong-dan-chon-size-nu"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Hướng dẫn chọn Size nữ
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__dai-su-cua-chung-toi"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Đại sứ của chúng tôi
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-nu__cau-lac-bo-dong-hanh"
                            className="tw-text-xs xl:tw-text-sm tw-text-cm-neutral-600"
                          >
                            <div className="tw-leading-4 md:tw-leading-5">
                              Câu lạc bộ đồng hành
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-col mega-menu__item flex-col-2 tw-border-l tw-border-cm-neutral-300"
                  style={{ flex: "0 0 28%" }}
                >
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <a
                      href="#"
                      ga-tracking-value="menu__main-nu__banner-vitri__1"
                      ga-tracking-label="COOLMATE ACTIVE FOR WOMEN"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip30.png"
                          alt="COOLMATE ACTIVE FOR WOMEN"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            COOLMATE ACTIVE FOR WOMEN
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      ga-tracking-value="menu__main-nu__banner-vitri__2"
                      ga-tracking-label="LEGGING YOGA RIBBED"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip29.png"
                          alt="LEGGING YOGA RIBBED"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            LEGGING YOGA RIBBED
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          data-title="THỂ THAO"
          className="nav__sub-item active-menu tw-h-full hover:tw-border-cm-neutral-900 hover:tw-border-b-[3px]"
        >
          <a
            href="#"
            ga-tracking-value="menu__main-the-thao"
            ga-tracking-label="THỂ THAO"
            style={{ position: "relative" }}
          >
            THỂ THAO
          </a>
          <div className="mega-menu mega-menu--product">
            <div className="mega-menu__wrapper">
              <div className="mega-menu__inner">
                <div
                  className="tw-px-5 tw-py-8 tw-pl-8 tw-border-r tw-border-cm-neutral-300"
                  style={{ flex: "0 0 36%" }}
                >
                  <a
                    href="#"
                    ga-tracking-value="menu__main-the-thao__nam"
                    className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900 tw-pb-3 hover:tw-text-cm-blue tw-cursor-pointer"
                  >
                    THỂ THAO NAM{" "}
                    <svg
                      className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                  <div className="grid grid--two-columns">
                    <div className="grid__column tw-pt-0">
                      <ul rel-script="mega-menu-active">
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__the-thao-chung"
                            ga-tracking-label="Thể thao chung"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip22.png"
                                  alt="Thể thao chung"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Thể thao chung
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__tap-gym"
                            ga-tracking-label="Tập gym"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip19_2.png"
                                  alt="Tập gym"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Tập gym
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__boi-loi"
                            ga-tracking-label="Bơi lội"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip15_1.png"
                                  alt="Bơi lội"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Bơi lội
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__outdoor"
                            ga-tracking-label="Outdoor"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip0_18.jpg"
                                  alt="Outdoor"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Outdoor
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul rel-script="mega-menu-active">
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__chay-bo"
                            ga-tracking-label="Chạy bộ"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip18_32.png"
                                  alt="Chạy bộ"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Chạy bộ
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__bong-da"
                            ga-tracking-label="Bóng đá"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img src="images/mceclip16.png" alt="Bóng đá" />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Bóng đá
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nam__cau-long-bong-ban"
                            ga-tracking-label="Cầu lông & Bóng bàn"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip17_87.png"
                                  alt="Cầu lông & Bóng bàn"
                                />
                              </div>
                              <span className="item-category__title tw-flex-1 tw-text-xs xl:tw-text-sm">
                                Cầu lông &amp; Bóng bàn
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tw-px-5 tw-py-8" style={{ flex: "0 0 36%" }}>
                  <a
                    href="#"
                    ga-tracking-value="menu__main-the-thao__nu"
                    className="tw-group tw-transition-all tw-duration-300 mega-menu__title tw-flex tw-items-center tw-gap-1 tw-text-xs xl:tw-text-sm tw-text-cm-neutral-900 tw-pb-3 hover:tw-text-cm-blue tw-cursor-pointer"
                  >
                    THỂ THAO NỮ{" "}
                    <svg
                      className="tw-w-4 tw-h-4 tw-text-cm-blue group-hover:tw-translate-x-1 tw-transition-transform tw-duration-300"
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
                  <div className="grid grid--two-columns">
                    <div className="grid__column tw-pt-0">
                      <ul rel-script="mega-menu-active">
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__yoga-pilates"
                            ga-tracking-label="Yoga & Pilates"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip14.png"
                                  alt="Yoga & Pilates"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Yoga &amp; Pilates
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__chay-bo"
                            ga-tracking-label="Chạy bộ"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip10_72.png"
                                  alt="Chạy bộ"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Chạy bộ
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__the-thao-chung"
                            ga-tracking-label="Thể thao chung"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip13_73.png"
                                  alt="Thể thao chung"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Thể thao chung
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="grid__column tw-pt-0">
                      <ul rel-script="mega-menu-active">
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__ao-the-thao-nu"
                            ga-tracking-label="Áo thể thao nữ"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip9_28.png"
                                  alt="Áo thể thao nữ"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Áo thể thao nữ
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__quan-the-thao-nu"
                            ga-tracking-label="Quần thể thao nữ"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip12_6.png"
                                  alt="Quần thể thao nữ"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Quần thể thao nữ
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            ga-tracking-value="menu__main-the-thao__nu__phu-kien-the-thao-nu"
                            ga-tracking-label="Phụ kiện thể thao nữ"
                          >
                            <div className="item-category__wrapper">
                              <div className="item-category__img">
                                <img
                                  src="images/mceclip11_21.png"
                                  alt="Phụ kiện thể thao nữ"
                                />
                              </div>
                              <span className="item-category__title tw-text-xs xl:tw-text-sm tw-self-stretch tw-flex tw-items-center tw-text-cm-neutral-600">
                                Phụ kiện thể thao nữ
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tw-px-5 tw-py-8 tw-pr-8 tw-border-l tw-border-cm-neutral-300"
                  style={{ flex: "0 0 28%" }}
                >
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <a
                      href="#"
                      ga-tracking-value="menu__main-the-thao__banner-vitri__1"
                      ga-tracking-label="Áo Polo Nam Thể Thao Promax-S1"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip5_67.jpg"
                          alt="Áo Polo Nam Thể Thao Promax-S1"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            Áo Polo Nam Thể Thao Promax-S1
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      ga-tracking-value="menu__main-the-thao__banner-vitri__2"
                      ga-tracking-label="Quần Shorts Nam Thể Thao Promax-S1"
                    >
                      <div className="mega-menu__item-image tw-rounded-lg no-dim">
                        <img
                          loading="lazy"
                          src="images/mceclip4_98_1.jpg"
                          alt="Quần Shorts Nam Thể Thao Promax-S1"
                          className="tw-w-full tw-h-full tw-object-cover tw-aspect-[340/185] tw-rounded-lg"
                        />
                        <div className="content">
                          <span className="tw-line-clamp-2 !tw-w-full !tw-h-auto">
                            Quần Shorts Nam Thể Thao Promax-S1
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          data-title="CARE & SHARE"
          className="nav__sub-item active-menu tw-h-full hover:tw-border-cm-neutral-900 hover:tw-border-b-[3px]"
        >
          <a
            href="#"
            ga-tracking-value="menu__main-care-and-share"
            ga-tracking-label="CARE & SHARE"
          >
            CARE &amp; SHARE
          </a>
          <div className="mega-menu mega-menu--product">
            <div className="mega-menu__wrapper">
              <div className="mega-menu__inner tw-justify-center">
                <div className="tw-px-5 tw-py-8 tw-pr-8 tw-max-w-[850px]">
                  <div className="tw-text-center tw-bg-cm-white tw-py-2 tw-px-10">
                    <p className="tw-font-normal tw-text-body-3">
                      Coolmate cam kết dành 10% doanh thu từ sản phẩm “Care
                      &amp; Share” đóng góp vào quỹ để tổ chức các hoạt động
                      thiện nguyện dành cho trẻ em có hoàn cảnh khó khăn.
                    </p>
                    <img
                      className="tw-mt-3 tw-w-full 2xl:tw-max-h-[150px] 2xl:tw-object-contain md:tw-mt-5 md:tw-mb-8"
                      src="images/mceclip7_1.png"
                      alt="Care & Share"
                    />
                    <a
                      href="#"
                      ga-tracking-value="menu__main-care-and-share__button"
                      ga-tracking-label="CARE & SHARE"
                    >
                      <button className="tw-mt-6 tw-w-fit tw-py-2 tw-px-6 tw-bg-cm-primary-500 hover:tw-bg-cm-primary-600 tw-text-white tw-rounded-full">
                        CARE &amp; SHARE{" "}
                        <svg
                          className="tw-w-4 tw-h-4 tw-ml-2"
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
                      </button>
                    </a>
                  </div>
                </div>
                <div className="tw-px-5 tw-py-8 tw-pl-20 tw-border-l tw-border-cm-neutral-300">
                  <img
                    loading="lazy"
                    className="tw-mt-3 tw-max-w-[500px]"
                    src="images/mceclip0_226.jpg"
                    alt="Care & Share"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="header__actions">
      <div className="header-actions-search__box mobile--hidden tablet--hidden tw-mr-[10px]">
        <label className="header-actions-search__field">
          <input
            id="search-input"
            type="text"
            name="search"
            rel-script="search-input"
            placeholder="Tìm kiếm sản phẩm..."
            autoComplete="off"
            className="header-actions-search__control one-whole"
          />
          <div
            className="header-actions-search__button tw-cursor-pointer"
            rel-script="header-search"
            ga-tracking-value="menu-search-header"
            ga-tracking-label="Tìm kiếm header - desktop"
          >
            <svg
              width={21}
              height={22}
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7994 20.2748L17.8056 17.0594C19.4674 15.0695 20.292 12.5167 20.1068 9.93515C19.9216 7.35361 18.7411 4.94342 16.8121 3.209C14.8831 1.47457 12.3552 0.550359 9.75754 0.629719C7.15985 0.709078 4.69367 1.78585 2.87507 3.63476C1.05648 5.48367 0.0264271 7.9614 0.000501484 10.5494C-0.0254241 13.1374 0.954751 15.6351 2.73594 17.5198C4.51714 19.4045 6.96133 20.53 9.55691 20.661C12.1525 20.7919 14.6983 19.9181 16.6616 18.2223L19.5994 21.3798C19.748 21.5316 19.9504 21.6194 20.1632 21.6247C20.376 21.6301 20.5825 21.5524 20.7386 21.4083C20.8947 21.2641 20.9882 21.065 20.999 20.8532C21.0097 20.6415 20.937 20.4339 20.7963 20.2748H20.7994ZM1.84209 10.8003C1.84209 9.1671 2.32843 7.57056 3.23958 6.21259C4.15073 4.85461 5.44578 3.79621 6.96097 3.1712C8.47616 2.54619 10.1434 2.38263 11.752 2.70126C13.3605 3.01988 14.838 3.80636 15.9977 4.96122C17.1574 6.11608 17.9471 7.58747 18.2671 9.18931C18.587 10.7912 18.4228 12.4515 17.7952 13.9604C17.1676 15.4693 16.1047 16.759 14.7411 17.6664C13.3775 18.5737 11.7743 19.058 10.1342 19.058C7.9356 19.0559 5.82764 18.1852 4.27288 16.637C2.71811 15.0889 1.84349 12.9898 1.84101 10.8003H1.84209Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>
        </label>
      </div>
      {/* <header-user-icon /> */}
      <div className="header-actions__button">
        <a href="#">
          <img src="images/icon-cart-new-v2.svg" alt="Icon mini cart" />
        </a>
        <span className="counts site-header__cartcount !tw-bg-cm-error-500 !tw-text-white !tw-rounded-full">
          0
        </span>
        <div className="header-actions__menu">
          <div className="header-actions__inner">
            {/* <mini-cart /> */}
          </div>
        </div>
      </div>
    </div>
    <div
      className="header-search mobile--hidden"
      rel-script="header-search-content"
    >
      <form action="/spotlight" method="GET">
        <div className="header-search__wrapper">
          <label className="header-search__field">
            <input
              id="input-spotlight"
              type="text"
              name="search"
              rel-script="spotlight-search-control"
              placeholder="Tìm kiếm sản phẩm..."
              autoComplete="off"
              className="header-search__control one-whole"
            />
            <button
              className="homepage-search__submit"
              style={{
                top: 13,
                right: 30,
                width: "unset",
                height: "unset",
                zIndex: 10
              }}
            >
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8002 19.6905L17.9213 16.5856C19.5193 14.6641 20.3123 12.1989 20.1342 9.70609C19.9561 7.21325 18.8208 4.88587 16.9659 3.21104C15.1109 1.5362 12.68 0.643744 10.182 0.720377C7.68398 0.79701 5.31241 1.83678 3.56359 3.62217C1.81477 5.40756 0.824241 7.80016 0.79931 10.2992C0.774379 12.7983 1.71695 15.2102 3.4298 17.0301C5.14266 18.8501 7.49307 19.9369 9.98907 20.0634C12.4851 20.1898 14.9332 19.346 16.8212 17.7085L19.6462 20.7575C19.7892 20.9041 19.9838 20.9889 20.1884 20.9941C20.3931 20.9992 20.5916 20.9242 20.7418 20.785C20.8919 20.6458 20.9818 20.4535 20.9921 20.2491C21.0025 20.0446 20.9325 19.8442 20.7972 19.6905H20.8002ZM2.57025 10.5415C2.57025 8.96444 3.03792 7.42275 3.91412 6.11143C4.79031 4.80011 6.03567 3.77807 7.49273 3.17454C8.94979 2.57101 10.5531 2.41306 12.0999 2.72074C13.6467 3.02842 15.0675 3.78787 16.1827 4.90306C17.2979 6.01824 18.0574 7.43908 18.365 8.98588C18.6727 10.5327 18.5148 12.136 17.9112 13.5931C17.3077 15.0501 16.2857 16.2955 14.9744 17.1717C13.663 18.0479 12.1214 18.5155 10.5442 18.5155C8.42997 18.5134 6.40288 17.6726 4.90777 16.1777C3.41265 14.6828 2.57159 12.6558 2.56921 10.5415H2.57025Z"
                  fill="#80949D"
                />
              </svg>
            </button>
          </label>
          <button
            className="homepage-search__submit"
            rel-script="spotlight-search-close"
            style={{
              top: 13,
              right: "-100px",
              width: "unset",
              height: "unset",
              zIndex: 10
            }}
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <path
                  d="M0.710153 1.39081C1.10215 0.719768 1.8828 0.603147 2.4538 1.13033L20.9665 18.2226C21.5375 18.7498 21.6826 19.7211 21.2906 20.3922V20.3922C20.8986 21.0632 20.118 21.1798 19.547 20.6526L1.03426 3.56039C0.463267 3.0332 0.318158 2.06185 0.710153 1.39081V1.39081Z"
                  fill="black"
                />
                <path
                  d="M0.821701 20.5854C0.421822 19.9218 0.552504 18.9506 1.11359 18.4163L19.4354 0.967765C19.9965 0.433427 20.7755 0.538253 21.1754 1.2019V1.2019C21.5753 1.86555 21.4446 2.83671 20.8835 3.37105L2.56168 20.8196C2.00059 21.3539 1.22158 21.2491 0.821701 20.5854V20.5854Z"
                  fill="black"
                />
              </g>
            </svg>
          </button>
        </div>
      </form>
      <div className="spotlight-header-search__float">
        <div
          className="spotlight-search-content mobile--hidden tablet--hidden"
          rel-script="spotlight-search-content"
        >
          <div className="spotlight-search-content__wrapper">
            <div className="spotlight-search-content__inner is-active">
              <div className="spotlight-search-content__topkeyword is-active">
                <div
                  className="homepage-search__content one-whole"
                  style={{ display: "block" }}
                >
                  <p
                    className="homepage-search__description"
                    style={{ textAlign: "left" }}
                  >
                    Từ khóa nổi bật ngày hôm nay
                  </p>
                  <div className="homepage-search__buttons">
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label="Áo thun"
                    >
                      Áo thun
                    </button>
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label=" Quần Shorts"
                    >
                      {" "}
                      Quần Shorts
                    </button>
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label=" Áo Polo"
                    >
                      {" "}
                      Áo Polo
                    </button>
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label=" Áo khoác chống nắng"
                    >
                      {" "}
                      Áo khoác chống nắng
                    </button>
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label=" Găng tay chống nắng"
                    >
                      {" "}
                      Găng tay chống nắng
                    </button>
                    <button
                      className="homepage-search__button"
                      rel-script="homepage-search-picker"
                      ga-tracking-value="header_search_kw"
                      ga-tracking-label=" Quần dài"
                    >
                      {" "}
                      Quần dài
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight-header-search">
              <div className="spotlight-header-search__suggestions">
                <ul id="search-suggestions" className="search-suggestions"></ul>
              </div>
              <p
                className="spotlight-header-search__title"
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 0,
                  padding: "0 80px 0px 80px"
                }}
              >
                Sản phẩm
              </p>
              <div
                className="grid spotlight-header-search__wrapper grid--four-columns large-grid--four-columns tablet-grid--three-columns mobile-grid--two-columns"
                rel-script="spotlight-header-search"
              >
                <img src="images/loading_1.svg" className="loading" />
              </div>
              <div className="spotlight-header-search__viewmore">
                <a className="btn btn-primary" href="">
                  Xem tất cả
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="spotlight-header-search__background" />
      </div>
    </div>
  </div>
</div>



<div className="topbar-promotion " id="topbar-promotion">
  <div className="">
    <a
      className="tw-flex max-md:tw-justify-between tw-items-center tw-gap-2 max-md:tw-w-full max-md:tw-px-5"
      href="#"
      ga-tracking-value="topbar"
    >
      <div className="text-slider-wrapper">
        <span className="text-slider max-md:tw-text-nowrap tw-block tw-text-center">
          WowBox | Sở hữu 3 sản phẩm chỉ 149k - Dành cho khách hàng mới
        </span>
      </div>
      <span className="tw-flex tw-gap-1">
        <span className="tw-hidden md:tw-inline tw-border-b tw-text-nowrap">
          Khám phá{" "}
        </span>
        <span className="tw-w-4">
          <svg
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
          </svg>
        </span>
      </span>
    </a>
  </div>
</div>
    </header>
  );
};

export default Header;