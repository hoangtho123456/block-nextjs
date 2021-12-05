import Link from 'next/link'
import Image from "next/image";
import Navbar from '../../components/Learn/Navbar/';

import styles from '../../styles/MangoLearn.module.css';
export default function PostLearn({children}) {
  const cates = [
    {
      active: false,
      url:'/mango-learn',
      title:'Tất cả',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Automation và công cụ',
    },{
      active: false,
      url:'/mango-learn',
      title:'Brand',
    },{
      active: true,
      url:'/cate-learn/cate',
      title:'Content marketing',
    },{
      active: false,
      url:'/mango-learn',
      title:'Digital advertising',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Digital analytics',
    },{
      active: false,
      url:'/mango-learn',
      title:'Ecommerce',
    },{
      active: false,
      url:'/cate-learn/cate',
      title:'Market research',
    },{
      active: false,
      url:'/mango-learn',
      title:'SEO',
    },{
      active: false,
      url:'/mango-learn',
      title:'Soft skill',
    },{
      active: false,
      url:'/mango-learn',
      title:'Website development',
    }];

  return (
    <>
      <div className={styles.blog}>
        <div className={styles['container-fluid']}>
          <Navbar cates={cates}/>

          <div className="row">
            <div className={`col-md-8 ${styles['p-box1']}`}>
              <nav className='breadcrumbs'>
                <ol>
                  <span>Home</span>
                  <a className="item" href="#">
                    <span className={`separator icon-4`}></span>
                  </a>
                  <a href="#">Content marketing</a>
                  <span className={`separator icon-4`}></span>
                  <a href="#">Social Marketing</a>
                </ol>
              </nav>

              <article className={styles['blog-post']}>
                <h1 className={styles['entry-title']}>
                  Cách tối ưu trải nghiệm quảng cáo với khách hàng Mù biểu ngữ
                </h1>

                <div className={`${styles['article__meta--primary']} ${styles['cat-links']} ${styles['tags']}`}>
                  <a href="#">Website development</a>
                </div>

                <div className={styles['meta']}>
                  <span className="posted-on">
                    <a href="" rel="bookmark">
                      <time className="entry-date published link" dateTime="">November 11, 2021</time>
                    </a>
                  </span>
                  <span className={styles['byline']}>
                    <span className="author vcard">
                      {/* <i className={`${styles['icon-user']} fa fa-user`}></i> */}
                      <a className="url fn n" href="#">Hạnh Trần</a>
                    </span>
                  </span>
                </div>
                
                <div className={`${styles['article__image--featured']} tRes tRes_75`}>
                  <img width="680" height="510" 
                    src="https://mangoads.vn/learn/wp-content/uploads/2021/10/Cach-toi-uu-trai-nghiem-quang-cao-voi-khach-hang-Mu-bieu-ngu-01-680x510-1.jpg" 
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                    alt="thumbnail" loading="lazy"/>	
                </div>
                <div className={`entry-content ${styles['article__content']} 
                  ${styles['long-form-content']}`}>
                  <div className={`${styles['lwptoc']} ${styles['lwptoc-light']} lwptoc-notInherit`} data-smooth-scroll="1" data-smooth-scroll-offset="80" data-lwptoc-initialized="1">
                    <div className={styles.lwptoc_i}>
                      <div className={styles.lwptoc_header}>
                        <b className={styles.lwptoc_title}>Mục lục</b>            
                      </div>
                      <div className={`${styles.lwptoc_items} lwptoc_items-visible`}>
                        <div className="lwptoc_itemWrap">
                          <div className={styles.lwptoc_item}>
                            <a href="#Mu_bieu_ngu_la_gi">
                              <span className="lwptoc_item_label">“Mù biểu ngữ” là gì?</span>
                            </a>
                          </div>
                          <div className={styles.lwptoc_item}>
                            <a href="#Nguoi_dung_luot_web_nhu_the_nao">
                              <span className="lwptoc_item_label">Người dùng lướt web như thế nào?</span>
                            </a>
                          </div>
                          <div className={styles.lwptoc_item}>
                            <a href="#Tim_cac_diem_mu">
                              <span className="lwptoc_item_label">Tìm các điểm “mù”</span>
                            </a>
                          </div>
                          <div className={styles.lwptoc_item}>
                            <a href="#Nghi_ve_nguoi_dung_cua_ban">
                              <span className="lwptoc_item_label">Nghĩ về người dùng của bạn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p >Các quảng cáo hiển thị quá nhiều trên website có thể ảnh hưởng không tốt đến trải nghiệm người dùng. Những pop up quảng cáo thường gây khó chịu cho người xem và làm gián đoạn thông tin của user. Vì thế nếu bạn muốn người dùng ở lại website của mình lâu hơn, website của bạn cần được thiết kế sao cho các banner quảng cáo thể hiện phù hợp, đúng lúc, đúng chỗ.</p>
                  <p >Đặc biệt là với các trang tin tức, trang báo online hoặc blog, việc thiết kế vị trí đặt quảng cáo một cách thân thiện là điều rất quan trọng. Vậy, câu hỏi được đặt ra là làm thế nào để quảng cáo xuất hiện mà không làm ảnh hưởng đến trải nghiệm người dùng? Và làm cách nào để biến các quảng cáo trở thành công cụ kiếm tiền hiệu quả cho bạn?</p>
                  <p >Câu trả lời nằm ở sự kết hợp hoàn hảo giữa <a href="https://devrix.com/tutorial/ux-vs-revenue-prioritize-wordpress-publisher/">trải nghiệm UX và quảng cáo banner</a>. Tuy nhiên, có một số trở ngại trong việc tối ưu banner quảng cáo trên website, điển hình như tình trạng “Mù biểu ngữ”. Hãy cùng MangoAds tìm hiểu thêm thông tin dưới đây nhé!</p>
                  <h2 ><span id="Mu_bieu_ngu_la_gi"><a id="post-9667-_b49fxrqbq7l7"></a><strong>“Mù biểu ngữ” là gì?</strong></span></h2>
                  <p >Mù biểu ngữ là một trong những trở ngại lớn nhất đối với các nhà sáng tạo nội dung. Đó đơn giản là việc khách hàng truy cập vào website của bạn, bỏ qua các banner quảng cáo một cách có ý thức hoặc vô thức. Bởi vì hầu hết mọi người sử dụng Internet cho một mục đích cụ thể như tìm kiếm thông tin chứ không phải để xem quảng cáo. Đó cũng là lý do khiến họ sẵn sàng bỏ qua những quảng cáo khiến họ phân tâm hoặc không cần thiết hay không phù hợp với thông tin mà họ đang tìm kiếm.</p>
                  <h2 ><span id="Nguoi_dung_luot_web_nhu_the_nao"><a id="post-9667-_2kimy2dusvsu"></a><strong>Người dùng lướt web như thế nào?</strong></span></h2>
                  <p>Có một điều chắc chắn là bạn không thể loại bỏ tình trạng mù biểu ngữ của khách hàng khi họ vào website của bạn! Tuy nhiên, bạn có thể giảm bớt ảnh hưởng của những banner quảng cáo thông qua việc kiểm tra cẩn thận hành vi người dùng trên website.</p>
                  <p >Để hiểu rõ hơn về cách đọc thông tin của người dùng trên Website, MangoAds đã nghiên cứu được một số mẫu hành vi của người dùng trên website như sau:</p>
                  <h3 ><span id="MAU_F"><a id="post-9667-_6qpjpwfgoetv"></a><strong>MẪU F</strong></span></h3>
                  <p >Mẫu <a href="https://uxplanet.org/f-shaped-pattern-for-reading-content-80af79cd3394">hình chữ F</a> có thể phân biệt được bằng những điều sau:</p>
                  <ul >
                    <li>Người dùng bắt đầu bằng cách đọc theo chuyển động ngang, qua phần trên của vùng nội dung. Đó là những gì định hình thanh trên cùng của chữ F.</li>
                    <li>Sau đó, mọi người di chuyển xuống trang và đọc theo chuyển động ngang thứ hai với diện tích ngắn hơn so với chuyển động trước đó. Điều này định hình thanh dưới của chữ F.</li>
                    <li>Kết thúc, người dùng đọc lại nội dung theo chuyển động dọc. Đó là một quá trình quét thông tin di chuyển chậm và xuất hiện dưới dạng một đường thẳng đứng dày đặc trên công cụ bản đồ nhiệt về sự theo dõi của mắt.&nbsp;</li>
                  </ul>
                  <p >Các tác động chính của mô hình F là:</p>
                  <ul >
                    <li>Những dòng đầu tiên của nội dung thu hút nhiều sự chú ý hơn những dòng văn bản tiếp theo trên cùng một trang.</li>
                    <li>Một vài từ đầu tiên ở bên trái của mỗi câu nhận được nhiều sự chú ý hơn những từ tiếp theo nằm bên phải trên cùng 1 dòng.</li>
                  </ul>
                  <p >Mọi người đọc nội dung theo hình chữ F vì:</p>
                  <ul >
                    <li>Họ muốn nhanh chóng nắm bắt nội dung chính, sàn lọc các nội dung không quan trọn và lướt qua.</li>
                    <li>Người dùng muốn đọc nhanh hơn và tiết kiệm thời gian cho mình.</li>
                    <li>Người dùng không quan tâm đến tất cả các từ có trong văn bản, họ chỉ muốn tìm một từ khóa cụ thể.</li>
                  </ul>
                  <p >Hầu hết mọi người đều muốn đọc xong một văn bản nhanh hơn nhiều so với thời gian dự đoán và chuyển sang một hoạt động khác. Ngoài ra, đa phần người dùng đều muốn tìm kiếm câu trả lời nhanh từ Google Tìm kiếm thay vì phải đọc một cuốn tiểu thuyết về một chủ đề cụ thể.</p>
                  <h3 ><span id="THIET_KE_GUTENBERG"><a id="post-9667-_dcv2p8oiliym"></a><strong>THIẾT KẾ GUTENBERG</strong></span></h3>
                  <p >Theo <a href="https://medium.com/user-experience-3/the-gutenberg-diagram-in-web-design-e5347c172627">mô hình Gutenberg</a>, một trang dày đặc nội dung được chia thành 4 góc: vùng quang học chính, vùng bỏ qua nhiều, vùng bỏ qua ít và vùng cuối.</p>
                  <div id="attachment_9668" className="wp-caption aligncenter">
                    <img aria-describedby="caption-attachment-9668" loading="lazy" className="wp-image-9668" src="https://mangoads.vn/learn/wp-content/uploads/2021/06/word-image-74.png" alt="Cách đọc nội dung theo thiết kế Gutenberg" width="745" height="640"/>
                    <p id="caption-attachment-9668" className="wp-caption-text">Hình 1: Cách đọc nội dung theo thiết kế Gutenberg</p>
                  </div>
                  <p >Vùng quang học chính là phần trên cùng bên trái của trang. Nó là phần đầu tiên thu hút sự chú ý của người xem khi họ truy cập website. Tiếp theo, người dùng hướng sự chú ý đến góc phần tư thứ hai (khu vực bỏ qua nhiều) ở phần trên cùng bên phải của trang. Trong hầu hết các trường hợp, đây là nơi người dùng thường xuyên bỏ qua khi đọc nội dung trên website.</p>
                  <p >Phần tiếp theo ở phía dưới bên trái là khu vực bỏ qua ít. Nhìn chung, người dùng không quá chú ý đến phần này. Cuối cùng, chúng ta có khu vực vùng cuối ở phần dưới bên phải của trang. Đây là vị trí hoàn hảo để đặt lời kêu gọi hành động (CTA) của bạn hoặc đặt các banner quảng cáo .</p>
                  <p >Ngoài ra bạn cần lưu ý rằng những kiểu đọc ở trên chủ yếu tồn tại trong các website có nhiều văn bản và phân bố đều. Trong trường hợp bạn có tạo hệ thống phân cấp trực quan cho nội dung website của mình, mô hình Gutenberg sẽ không còn nữa.</p>
                  <p >Trong trường hợp này, nơi mắt người dùng nhìn vào đầu tiên chính là điểm thu hút nhất. Sau đó, mắt của họ sẽ hướng đến block có <strong>trọng lượng thị giác</strong> (Trọng lượng thị giác hay còn gọi là sức nặng thị giác là ảo giác về độ nặng nhẹ dựa vào cảm nhận, cảm giác). Tương tự như vậy, mắt họ sẽ lần lượt hướng nhìn từ điểm có trọng lượng thị giác lớn, đến trọng lượng thị giác nhỏ.</p>
                  <p >Nói về điều này, theo <a href="https://www.sciencedaily.com/releases/2012/02/120216094726.htm">nghiên cứu về chuyển động mắt</a>, khách truy cập trang web đã dành 2,6 giây để đọc lướt nội dung website trước khi chuyển sang một phần cụ thể của bài viết. Năm phần thu hút nhiều sự chú ý nhất của họ là:</p>
                  <ul >
                    <li>Logo (6,48 giây)</li>
                    <li>Các block điều hướng chính (6,44 giây)</li>
                    <li>Thanh tìm kiếm (6 giây)</li>
                    <li>Nội dung viết (5,59 giây)</li>
                    <li>Hình ảnh chính của trang web (5,94 giây)</li>
                  </ul>
                  <h2 ><span id="Tim_cac_diem_mu"><a id="post-9667-_ex8nfqk4vnzk"></a><strong>Tìm các điểm “mù”</strong></span></h2>
                  <p ><a href="https://dynomapper.com/blog/19-ux/271-usability-testing-tools">Các công cụ usability testing</a>&nbsp;và <a href="https://imotions.com/blog/top-eye-tracking-hardware-companies/">top eye tracking</a> có thể giúp bạn đánh giá hiệu suất của quảng cáo mà bạn đặt trên website của mình. Bạn có thể theo dõi các chuyển động quang học của người dùng và phân tích chúng để cải thiện tỷ lệ chuyển đổi. Đó là một trong những cách tốt nhất để đánh bại tình trạng mù biểu ngữ.</p>
                  <p >Ngoài ra bạn có thể thu thập thông tin chi tiết có giá trị về:</p>
                  <ul >
                    <li>Loại nội dung thu hút sự chú ý từ người dùng.</li>
                    <li>Các block trên website nơi khách truy cập tập trung vào.</li>
                    <li>Các block trên website mà khách truy cập thường xuyên bỏ qua.</li>
                  </ul>
                  <p >Những thông tin chi tiết này đóng vai trò then chốt trong việc hiểu các khía cạnh gây mù biểu ngữ.</p>
                  <p >Với công cụ eye tracking, bạn có thể tạo bản đồ nhiệt hiển thị các phần trên website, để hiểu được nơi mà khách hàng tập trung nhiều nhất, nơi khách hàng thường bỏ qua (điểm mù).</p>
                  <div id="attachment_9669" className="wp-caption aligncenter">
                    <img aria-describedby="caption-attachment-9669" loading="lazy" className="wp-image-9669" src="https://mangoads.vn/learn/wp-content/uploads/2021/06/word-image-75.png" alt=" Bản đồ nhiệt giúp bạn biết được phần nào được người xem theo dõi nhiều và phần nào hay bị bỏ qua" width="800" height="400"/>
                    <p id="caption-attachment-9669" className="wp-caption-text">Hình 2: Bản đồ nhiệt giúp bạn biết được phần nào được người xem theo dõi nhiều và phần nào hay bị bỏ qua</p>
                  </div>
                  <p >Nếu điểm mù bao gồm các đơn vị quảng cáo, bạn cần xem xét lại bố cục website của mình.</p>
                  <h2 ><span id="Nghi_ve_nguoi_dung_cua_ban"><a id="post-9667-_2oifaaan7rso"></a><strong>Nghĩ về người dùng của bạn</strong></span></h2>
                  <p >Hãy tự hỏi bản thân những câu hỏi để lựa chọn vị trí đặt của quảng cáo:</p>
                  <ul >
                    <li>Người dùng đang cố gắng đạt được điều gì khi truy cập website của bạn?</li>
                    <li>Người dùng làm gì khi họ truy cập website của bạn?</li>
                    <li>Sự chú ý của họ tập trung ở đâu?</li>
                    <li>Làm cách nào để <a href="https://devrix.com/tutorial/earn-more-money-with-advertisements-site/">kết hợp quảng cáo</a> mà không ảnh hưởng đến trải nghiệm của người dùng?</li>
                    <li>Làm cách nào để giữ cho website của bạn được xếp hạng cao và nội dung hấp dẫn?</li>
                  </ul>
                  <p>Hãy thử suy nghĩ như người dùng của bạn và bạn có thể xem xét lại các vị trí đặt quảng cáo của mình sao cho hợp lý. Nếu mọi người có thể nhanh chóng tìm thấy điều họ cần tìm kiếm ngay cả với các quảng cáo banner, họ sẽ tiếp tục quay lại website của bạn trong tương lai.</p>
                  <p>Bạn cần đặt quảng cáo của mình gần với nội dung mà người dùng của bạn yêu thích và đảm bảo rằng họ có thể dễ dàng tìm thấy nội dung mà họ đang tìm kiếm.&nbsp;</p>
                  <p><a href="https://support.google.com/adsense/answer/1282097?hl=en">Google support</a>&nbsp;khuyên bạn nên đặt quảng cáo biểu ngữ trong màn hình đầu tiên của các trang. Ngoài ra, sau khi kiểm tra 1,5 triệu bản sửa lỗi theo eye tracking từ hàng trăm website, chuyên gia <a href="http://www.nngroup.com/articles/website-reading/">Nielsen Norman Group</a> phát hiện ra rằng mọi người thường dành sự chú ý đầu tiên vào phần đầu trang khi họ truy cập vào một website.</p>
                  <div id="attachment_9670" className="wp-caption aligncenter">
                    <img aria-describedby="caption-attachment-9670" loading="lazy" className="wp-image-9670" src="https://mangoads.vn/learn/wp-content/uploads/2021/06/word-image-76.png" alt="Đặt quảng cáo biểu ngữ trong màn hình đầu tiên của các trang" width="800" height="516"/>
                    <p className="wp-caption-text">Hình 3: Đặt quảng cáo biểu ngữ trong màn hình đầu tiên của các trang</p>
                  </div>
                  <p>Hãy nhớ rằng khi bạn đặt một quảng cáo trên website của mình, bạn không được phép khuyến khích người dùng nhấp vào quảng cáo đó một cách bất hợp pháp. Điều này cũng có nghĩa là bạn không được phép tạo ra các quảng cáo “bắt chước” nội dung bài viết với mục đích thu hút người xem nhấp vào các quảng cáo đó. Do đó, hãy hết sức cẩn thận cách bạn đặt phần còn lại của trang gần với quảng cáo, chẳng hạn như nút điều hướng, trình phát video, menu thả xuống hoặc ứng dụng gần quảng cáo vì chúng có thể dẫn đến những nhấp chuột không cố ý.</p>
                  <div id="attachment_9671" className="wp-caption aligncenter">
                    <img aria-describedby="caption-attachment-9671" loading="lazy" className="wp-image-9671" src="https://mangoads.vn/learn/wp-content/uploads/2021/06/word-image-77.png" alt="Việc khuyến khích người dùng nhấp vào quảng cáo của mình là bất hợp pháp" width="800" height="364"/>
                    <p id="caption-attachment-9671" className="wp-caption-text">Hình 4: Việc khuyến khích người dùng nhấp vào quảng cáo của mình là bất hợp pháp</p>
                  </div>
                  <p >Ngay cả khi bố cục trang của bạn vô tình dẫn đến nhấp chuột tình cờ, bạn vẫn có thể nhận được thông báo vi phạm.</p>
                  <p >Là một nhà xuất bản nội dung, bạn cũng không được phép thực hiện các hình thức bất hợp pháp nhằm thu hút sự chú ý của người xem đến các banner quảng cáo của mình. Ví dụ:</p>
                  <ul >
                    <li>Hoạt ảnh bắt mắt, rực rỡ thu hút ánh nhìn của người dùng đến quảng cáo.</li>
                    <li>Mũi tên hoặc các biểu tượng khác trỏ đến quảng cáo.</li>
                  </ul>
                  <p >Bạn cũng nên tránh xây dựng bố cục website theo hướng quảng cáo ở trên và nội dung thì bị đẩy xuống dưới. Với kiểu bố cục đó, mọi người không thể phân biệt được đâu là nội dung hay đâu là quảng cáo.</p>
                  <h3 ><span id="Nen_dat_quang_cao_it_hay_nhieu">Nên đặt quảng cáo í<a id="post-9667-_vjgsrr30b3a8"></a><strong>t hay nhiều?</strong></span></h3>
                  <p >Một số trang web đặt kín quảng cáo trên khắp các trang. Tuy nhiên, mọi người chỉ có thể chú ý đến một lượng quảng cáo nhất định mỗi ngày. Vì vậy tại sao bạn lại phải cố gắng nhồi nhét nhiều loại quảng cáo vào website của bạn làm gì?</p>
                  <p >Đừng bao giờ đặt UX ở vị trí thứ hai nếu bạn muốn việc <a href="https://devrix.com/tutorial/ways-wordpress-publishers-increase-audience/">kinh doanh online của mình mang lại lợi nhuận</a>. Đó chính là lý do vì sao bạn nên chú trọng đến việc nâng cao trải nghiệm của người dùng hơn là doanh thu từ quảng cáo.</p>
                  <p >Thay vì chèn nhiều quảng cáo nhất có thể, bạn cần có số lượng đơn vị quảng cáo tối thiểu và tập trung vào việc tối ưu hóa chúng để tăng tỷ lệ chuyển đổi. Bạn cần đặt những quảng cáo mà bạn cho là người dùng muốn xem và chèn chúng vào những nơi mà khách hàng có thể muốn xem.</p>
                  <p >Đảm bảo rằng những quảng cáo mà bạn chèn vào phải phù hợp với nội dung bài viết. Nếu một quảng cáo đáp ứng được mong muốn của người dùng, họ sẽ nhấp vào nó. Khi một quảng cáo có liên quan đến nội dung, nhiều khả năng nó sẽ đáp ứng mong muốn hoặc nhu cầu của khách truy cập, điều này sẽ khiến họ nhấp vào banner quảng cáo của bạn ngay từ đầu.</p>
                  <p >Tương tự như với nội dung bài viết, chất lượng quan trọng hơn nhiều so với số lượng. Trong trường hợp bạn muốn chèn nhiều quảng cáo hơn cho các website của mình, bạn cần phải xây dựng lại bố cục cho trang và tìm ra những cách mới để chèn quảng cáo mà không gây phản cảm hoặc làm ảnh hưởng đến trải nghiệm người dùng.</p>
                  <p >Đó chính là những chia sẻ của MangoAds về cách tối ưu trải nghiệm người dùng khi họ đang trong trạng thái Mù biểu ngữ. Hy vọng những thông tin trên có thể giúp bạn tối ưu trải nghiệm quảng cáo trên trang web một cách hiệu quả nhất. Cảm ơn các bạn đã luôn theo dõi chúng tôi.</p>
                </div>
                <div className={`${styles['author-bio']} ${styles['hide--mobile']}`}>
                  <div className="img">
                    <img alt="img" src="https://secure.gravatar.com/avatar/fda41df13aa57c8fb61ea5f8ea337fb7?s=120&amp;d=mm&amp;r=g"  className={styles['avatar']} height="120" width="120" loading="lazy"/>
                  </div>
                  <div className="txt">
                    <div>Về tác giả</div>
                    <h3>Hạnh Trần</h3>
                  </div>
                </div>
                <div className="c-box-form1">
                  <div className="inner1">
                    <div className="box1">
                      <div className="dl-table">
                        <div className="icon"><i className="icon-t18"></i></div>
                        <section className="title1">
                          <h3>Liên hệ để được tư vấn về UX/ UI</h3>
                        </section>
                      </div>
                      <div role="form" className="wpcf7" id="wpcf7-f15390-p9667-o1" lang="en-US" dir="ltr">
                        <div className="screen-reader-response">
                          <p role="status" aria-live="polite" aria-atomic="true"></p>
                          <ul></ul>
                        </div>
                        <form action="" method="post" className="wpcf7-form init c-form1">
                          <input type="hidden" name="service" defaultValue="UX/ UI" className="wpcf7-form-control wpcf7-hidden"/>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap user-name"><input type="text" name="user-name" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Họ và tên"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap email"><input type="email" name="email" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap tel-661"><input type="tel" name="tel-661" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Số điện thoại"/></span>
                          </div>
                          <div className="c-form1__info">
                            <span className="wpcf7-form-control-wrap textarea-812">
                              <textarea name="textarea-812" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Để lại lời nhắn">
                              </textarea>
                            </span>
                          </div>
                          <p><input type="submit" value="Gửi liên hệ" className="wpcf7-form-control has-spinner wpcf7-submit c-form1__btn1"/><span className="wpcf7-spinner"></span></p>
                          <div className="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          
            <div className="col-md-4 blog__sidebar">
							<div id="secondary" className="secondary">		
					      <div id="widget-area" className="widget-area" role="complementary">
				          <form className={styles['searchform']} id="searchform" method="get" action="https://mangoads.vn/learn/">
                    <input type="text" 
                      className={`${styles['input']}`} name="s" placeholder="Tìm bài viết" defaultValue=""/>
                    <button type="submit" className={styles['btn']}>
                      <i className="icon icon-28"></i>
                      {/* <span className="visuallyhidden">Search</span> */}
                    </button>
                  </form>
                  
				          <div className="widget-area">
                    <div className="widget">
                      <h5 className="widget-title">
                        <i className="icon icon-t38"></i>
                        Bài viết liên quan
                      </h5>
                      <ul className="recent-post">
                        <li>
                          <a href="/post/post-id">
                            TOP 10+ xu hướng thiết kế UI/UX cho mobile app 2021</a>
                        </li>
                        <li>
													<a href="/post/post-id">
														Hướng dẫn cách thiết kế chế độ dark mode  cho mobile app 2021</a>
												</li>
												<li>
													<a href="/post/post-id">
                            11 Thư viện Animation miễn phí dành cho các UI Designer</a>
												</li>
												<li>
                          <a href="/post/post-id">
                            Hướng dẫn chi tiết về thanh điều hướng Website</a>
                        </li>
												<li>
													<a href="/post/post-id">
														9 Khóa học xây dựng UI animation hữu ích cho người mới bắt đầu!</a>
												</li>
												<li>
												  <a href="/post/post-id">
														Những biện pháp giúp thúc đẩy UX đối với quảng cáo baner</a>
												</li>
												<li>
												  <a href="/post/post-id">Điểm qua những menu hamburger nổi bật</a>
												</li>
												<li>
												  <a href="/post/post-id">
                            Các công cụ UX dùng để theo dõi hành vi của người dùng trực tuyến</a>
                        </li>
												<li>
												  <a href="/post/post-id">
                            Làm thế nào để sử dụng các mẫu thiết kế UX một cách tốt nhất?</a>
												</li>
												<li>
												  <a href="/post/post-id">Xu hướng thiết kế UI/UX cho năm 2021</a>
												</li>
										  </ul>
									  </div>
							    </div>
			          </div>
	            </div>
  					</div>
          </div>
        </div>
      </div>
    </>
  );
}
