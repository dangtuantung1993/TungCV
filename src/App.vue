<template>
  <div id="app">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.0/css/all.css">
    <div class="wrapper flex">
      <div class="sidebar">
        <div class="avatar">
          <img src="./assets/avatar.jpg" width="215" height="215" alt="Dang Tuan Tung" />
          <h1 class="name">Dang Tuan Tung</h1>
          <h4 class="job">15/09/1993</h4>
          <h4 class="job">Software Engineer</h4>
        </div><!-- .avatar -->

        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-graduation-cap circle circle--medium"></i>
            <span>Học Vấn</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="far fa-school circle circle--small circle--white"></i>
                <div>Đại Học Mỏ - Địa Chất (2011-2016)</div><br><br>
              </li>
              <li class="flex">
                <i class="fas fa-graduation-cap circle circle--small circle--white"></i>
                <div>Kỹ sư Công nghệ phần mềm.</div>
              </li>
            </ul>
          </div>
        </div><!-- End .module #1 -->

        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-address-book circle circle--medium"></i>
            <span>Thông Tin</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fa fa-map-marker circle circle--small circle--white"></i>
                <div>Số 22, Đào Duy Từ, Tổ 19, P.Bắc Sơn, Thành Phố Tam Điệp, Ninh Bình</div>
              </li>
              <li class="flex">
                <i class="fab fa-linkedin circle circle--small circle--white"></i>
                <div>www.linkedin.com/in/dang-tuantung-77275a159</div>
              </li>
              <li class="flex">
                <i class="fab fa-github circle circle--small circle--white"></i>
                <div>https://github.com/dangtuantung1993</div><br><br>
              </li>
              <li class="flex">
                <i class="fas fa-at circle circle--small circle--white"></i>
                <div>dangtuantung150993@gmail.com</div><br><br>
              </li>
              <li class="flex">
                <i class="fab fa-apple circle circle--small circle--white"></i>
                <div>(+84) 888 666 893</div>
              </li>
            </ul>
          </div>
        </div><!-- End .module #2 -->

        <div class="module module--progress">
          <h3 class="module__title">
            <i class="fa fa-graduation-cap circle circle--medium"></i>
            <span>Kỹ Năng</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fab fa-html5 circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>HTML / CSS / JS</span>
                  <span class="progress-bar"><span style="width:50%"></span></span>
                </div>
              </li>

              <li class="flex">
                <i class="fa fa-globe circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>Web Development</span>
                  <span class="progress-bar" style="margin-bottom: 5px"><span style="width:50%"></span></span>
                  <span >PHP Frameworks : CI</span><br>
                  <span >NodeJS : Express</span><br>
                  <span >Front-End: VueJS</span>
                </div>
              </li>
              <li class="flex">
                <i class="fas fa-database circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>Database</span>
                  <span class="progress-bar"><span style="width:50%"></span></span>
                  <span>MongoDB</span><br>
                  <span>PostgreSQL</span><br>
                  <span>MySQL</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-thumbs-up circle circle--medium"></i>
            <span>Sở Thích</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fab fa-bitcoin circle circle--small circle--white"></i>
                <div>Trade Coin</div><br><br>
              </li>
              <li class="flex">
                <i class="fab fa-foursquare circle circle--small circle--white"></i>
                <div>Forex.</div><br><br>
              </li>
              <li class="flex">
                <i class="fas fa-futbol circle circle--small circle--white"></i>
                <div>Bóng đá.</div><br><br>
              </li>
              <li class="flex">
                <i class="fab fa-bitcoin circle circle--small circle--white"></i>
                <div>Blockchain, Cryptocurrencies.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="section">
          <h2 class="section__title">
            <i class="fas fa-business-time circle circle--large"></i>
            <span>Kinh nghiệm</span>
          </h2>
          <div class="section__content">
            <div class="module">
              <h3 class="module__title">
                <i class="fa fa-globe circle circle--medium"></i>
                <span>Website Manager</span></h3>
              <div class="module__meta">
                  <span><i class="fa fa-building-o"></i>bactrungbomicco.com.vn</span>
                  <span><i class="fa fa-calendar"></i>20 NOV 2017-Current</span>
              </div>
              <div class="module__content">
                <span>Quản lý, đăng bài viết, chỉnh sửa thay đổi nội dung trang web.</span><br>
                <a href="http://bactrungbomicco.com.vn">Công ty công nghiệp Hóa chất Mỏ - Bắc Trung Bộ </a>
              </div>
            </div><!-- End .module #4 -->
          </div><!-- End .section__content -->
        </div><!-- End .section #1 -->
        <div class="section">
          <h2 class="section__title">
            <i class="fas fa-project-diagram circle circle--large"></i>
            <span>Các dự án đã làm</span>
          </h2>
          <div class="section__content">
            <div class="module">
              <h3 class="module__title">
                <i class="fa fa-globe circle circle--medium"></i>
                <span>Website</span></h3>
              <div class="module__content">
                <ul>
                  <li class="flex">
                    <i class="fa fa-globe circle circle--small circle--white"></i>
                    <div><a href="https://github.com/dangtuantung1993/checkwallet">Website cho Check Wallet (Incomplete)</a></div>

                  </li>
                </ul>
                <div>https://github.com/dangtuantung1993/checkwallet</div>
                <div>Frontend: VueJs</div>
                <div>Backend: NodeJs</div><br><br>
              </div>
            </div><!-- End .module #4 -->
          </div><!-- End .section__content -->
          <div class="section__content">
            <div class="module">
              <h3 class="module__title">
                <i class="fa fa-globe circle circle--medium"></i>
                <span>Tool</span></h3>
              <div class="module__content">
                <ul>
                  <li class="flex">
                    <i class="fa fa-globe circle circle--small circle--white"></i>
                    <a href="https://github.com/dangtuantung1993/tooljava">Tool Auto </a>

                  </li>
                </ul>
                <div>https://github.com/dangtuantung1993/tooljava</div>
                <div>Java</div>
              </div>
            </div><!-- End .module #4 -->
          </div><!-- End .section__content -->
        </div><!-- End .section #1 -->
        <div class="section">
          <h2 class="section__title">
            <i class="fa fa-briefcase circle circle--large"></i>
            <span>CÁC KỸ NĂNG KHÁC</span>
          </h2>
          <div class="section__content">
            <div class="module">
              <div class="module__content">
                <p>- Khả năng làm việc theo nhóm và độc lập.</p>
                <p>- Đọc hiểu tài liệu và thực hiện theo yêu cầu.­</p>
                <p>- Tinh thần trách nhiệm cao trong công việc.</p>
                <p>- Khả năng chịu được áp lực công việc</p>
                <p>- Tinh thần đoàn kết, thật thà, trung thực.</p>
                <p>- Có khả năng quản lý công việc hiệu quả, khoa học và rõ ràng.</p>

              </div>
            </div><!-- End .module #4 -->
          </div><!-- End .section__content -->
        </div><!-- End .section #1 -->


        <div class="section">
          <h2 class="section__title">
            <i class="fas fa-graduation-cap circle circle--large"></i>
            <span>Quá Trình Học</span>
          </h2>
          <div class="section__content">
            <div class="module">
              <h5 class="module__title">Tiểu học</h5>
              <div class="module__meta">
                <span><i class="far fa-school"></i>Trường Tiểu học Nguyễn Trãi</span>
                <span><i class="fas fa-calendar"></i>1999-2004</span>
              </div>

            </div><!-- End .module #4 -->
            <div class="module">
              <h5 class="module__title">Trung học cơ sở</h5>
              <div class="module__meta">
                <span><i class="far fa-school"></i>Trường THCS Đồng Giao</span>
                <span><i class="fas fa-calendar"></i>2004 - 2008</span>
              </div>

            </div><!-- End .module #4 -->
            <div class="module">
              <h5 class="module__title">Trung học phổ thông</h5>
              <div class="module__meta">
                <span><i class="far fa-school"></i>Trường THPT Nguyễn Huệ</span>
                <span><i class="fas fa-calendar"></i> 2008-2011</span>
              </div>

            </div><!-- End .module #4 -->
            <div class="module">
              <h5 class="module__title">Đại học</h5>
              <div class="module__meta">
                <span><i class="far fa-school"></i>Trường Đại học Mỏ - Địa Chất</span>
                <span><i class="fas fa-calendar"></i> 2011-2016</span>
              </div>
              <div class="module__content">
                <h5>Chuyên ngành : Công nghệ phần mềm .</h5>
              </div>

            </div><!-- End .module #4 -->
          </div><!-- End .section__content -->
        </div><!-- End .section #1 -->
        <div class="section">
          </div><!-- End .section #2 -->
          <div class="section">
            <h2 class="section__title">
              <i class="fa fa-briefcase circle circle--large"></i>
              <span>Mong Muốn</span>
            </h2>
            <div class="section__content">
              <div class="module">
                <div class="module__content">
                  <ul>
                    <li>Kỹ năng kỹ thuật: Công nghệ chuỗi khối</li>
                    <li>Kỹ năng mềm: ngoại ngữ, kỹ năng thuyết trình, kỹ năng làm việc nhóm</li>
                    <li>Trở thành Trưởng nhóm Kỹ thuật hoặc Quản lý Dự án với hiệu suất cao và phong cách chuyên nghiệp</li>
                  </ul>
                </div>
              </div><!-- End .module #7 -->

            </div><!-- End .section #2 -->
          </div><!-- End .content -->
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1.625;
    font-size: 16px;
    color: #263238;
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
  }
  p {
    margin: 0 0 10px;
  }

  /* Helper Class */
  .flex {
    display: flex;
  }
  .flex .middle {
    align-items: center;
  }
  .flex .flex--1 {
    flex: 1;
  }

  /* Global Layout */
  .wrapper {
    max-width: 1170px;
    width: 100%;
    margin: auto;
  }
  .sidebar {
    width: 35%;
    background: #37474f;
    color: #fff;
  }
  .content {
    width: 65%;
    padding: 70px;
  }

  /* Avatar */
  .avatar {
    text-align: center;
    padding: 60px 0;
    background: #263238;
  }
  .avatar img {
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .1);
  }
  .avatar h1 {
    font-size: 32px;
    text-transform: uppercase;
    margin: 25px 0 0;
    line-height: 1;
  }
  .avatar h4 {
    font-size: 22px;
  }

  /* Module */
  .sidebar .module {
    padding: 0 45px;
    margin-top: 50px;
  }
  .sidebar .module:last-child {
    margin-bottom: 50px;
  }
  .module__title {
    font-size: 22px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .module__meta {
    font-size: 14px;
    color: #90a4ae;
    margin-bottom: 20px;
  }
  .module__meta i {
    margin-right: 10px;
  }
  .module__meta span {
    margin-right: 20px;
  }
  .module__title .circle {
    margin-right: 10px;
  }
  .circle {
    font-size: 14px;
    color: #fff;
    background: #263238;
    border-radius: 50%;
    text-align: center;
    margin-right: 20px;
  }
  .circle.circle--large {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  .circle.circle--medium {
    width: 42px;
    height: 42px;
    line-height: 42px;
  }
  .circle.circle--small {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .circle.circle--white {
    background: #fff;
    color: #263238;
  }

  /* Progress bar */
  .progress-bar,
  .progress-bar span {
    height: 6px;
    background: #fff;
    border-radius: 6px;
    display: block;
  }
  .progress-bar span {
    background: #263238;
  }
  .module--progress li {
    margin-bottom: 20px;
  }

  /* Section */
  .section:not(.last-child) {
    margin-bottom: 50px;
  }
  .section__title {
    font-size: 28px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .section__content {
    padding-left: 90px;
  }
  .content .module:not(:first-child) {
    margin-top: 50px;
  }
  .content .module__title {
    margin-bottom: 0;
  }

  /* Language */

  .lang__content h4 {
    text-transform: uppercase;
    margin-top: 15px;
  }
</style>
