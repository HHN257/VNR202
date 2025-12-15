'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lightbulb, Target, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PresentationPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroImages = [
    { src: '/images/1.jpg', alt: 'Khối đại đoàn kết dân tộc' },
    { src: '/images/2.jpg', alt: 'Lễ hội văn hóa dân gian trên sông' },
    { src: '/images/3.jpg', alt: 'Không gian văn hóa Việt Nam' },
    { src: '/images/4.jpg', alt: 'Quốc kỳ Việt Nam' },
    { src: '/images/5.jpg', alt: 'Rước kiệu và múa rồng' },
    { src: '/images/6.jpg', alt: 'Quốc kỳ tung bay' },
    { src: '/images/7.jpg', alt: 'Đoàn người mang cờ Tổ quốc' },
  ];
  const sectionImages: Record<
    string,
    {
      src: string;
      alt: string;
    }
  > = {
    'tong-quan': { src: '/images/1.jpg', alt: 'Vị trí, vai trò của văn hóa' },
    'ban-sac': { src: '/images/2.jpg', alt: 'Bản sắc và khái niệm văn hóa' },
    'am-ber': { src: '/images/3.jpg', alt: 'Văn hóa Việt Nam thống nhất trong đa dạng' },
    'purple': { src: '/images/4.jpg', alt: 'Văn hóa là một mặt trận' },
    'nhiem-vu': { src: '/images/5.jpg', alt: 'Mười nhiệm vụ phát triển văn hóa' },
    'phong-trao': { src: '/images/6.jpg', alt: 'Phong trào toàn dân đoàn kết xây dựng đời sống văn hóa' },
    'y-nghia': { src: '/images/7.jpg', alt: 'Ý nghĩa chung của nghị quyết' },
  };

  const renderSectionImage = (key: string) => {
    const data = sectionImages[key];
    if (!data) return null;
    return (
      <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm mb-4 bg-white/70">
        <Image
          src={data.src}
          alt={data.alt}
          width={1200}
          height={600}
          className="h-40 w-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Về trang chủ
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              NGHỊ QUYẾT TRUNG ƯƠNG 5 KHÓA VIII (1998)
            </h1>
            <p className="text-xl text-gray-600">
              XÂY DỰNG VÀ PHÁT TRIỂN NỀN VĂN HÓA VIỆT NAM TIÊN TIẾN – ĐẬM ĐÀ BẢN SẮC DÂN TỘC
            </p>
          </div>

          <div className="space-y-6">
            <Card id="tong-quan" className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl">
                  I. Vị trí, vai trò của văn hóa
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('tong-quan')}
                <ul className="list-disc pl-6 space-y-2">
                  <li className="font-semibold text-gray-800">Văn hóa là nền tảng tinh thần của xã hội</li>
                  <li className="font-semibold text-gray-800">Là mục tiêu của sự phát triển</li>
                </ul>
                <p className="pl-6 text-gray-600">
                  Hướng tới con người có trí tuệ, đạo đức, lối sống lành mạnh.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="font-semibold text-gray-800">Là động lực của sự phát triển</li>
                </ul>
                <p className="pl-6 text-gray-600">
                  Nâng cao dân trí, thúc đẩy sáng tạo, tạo sức mạnh nội sinh cho đất nước.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="font-semibold text-gray-800">Văn hóa gắn liền với phát triển kinh tế – xã hội</li>
                </ul>
                <div className="pl-6 space-y-1 text-gray-600">
                  <p>Phát triển kinh tế phải hài hòa với phát triển văn hóa.</p>
                  <p>Xây dựng xã hội công bằng, văn minh phải dựa trên giá trị văn hóa tốt đẹp.</p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="font-semibold text-gray-800">Văn hóa góp phần củng cố nền tảng tư tưởng của Đảng</li>
                </ul>
                <div className="pl-6 space-y-1 text-gray-600">
                  <p>Đấu tranh chống lại các quan điểm sai lệch.</p>
                  <p>Chống suy thoái đạo đức, lối sống.</p>
                  <p>Ngăn chặn tác động tiêu cực của toàn cầu hóa.</p>
                </div>
              </CardContent>
            </Card>

            <Card id="ban-sac" className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl">
                  II. Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('ban-sac')}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">1. Văn hóa tiên tiến</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mang tinh thần yêu nước, khát vọng độc lập dân tộc và chủ nghĩa xã hội.</li>
                    <li>Định hướng bởi chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh.</li>
                    <li>Nội dung tư tưởng tiến bộ, thúc đẩy sự phát triển của con người.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">2. Văn hóa đậm đà bản sắc dân tộc</h3>
                  <p className="text-gray-600">
                    Bản sắc dân tộc là tổng hòa những giá trị tinh thần được hun đúc qua hàng nghìn năm và luôn
                    được kế thừa, phát triển trong thời kỳ hội nhập.
                  </p>
                  <p className="font-semibold text-gray-800 mt-3">Các giá trị cốt lõi</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tinh thần yêu nước</li>
                    <li>Ý thức cộng đồng gắn kết</li>
                    <li>Cần cù, sáng tạo trong lao động</li>
                    <li>Lòng nhân ái, bao dung</li>
                    <li>Trọng nghĩa tình – đạo lý</li>
                    <li>Lối sống giản dị, khiêm nhường</li>
                    <li>Tinh thần đoàn kết, tương trợ</li>
                  </ul>
                  <p className="text-gray-600 mt-3">
                    Các giá trị này giúp dân tộc vượt qua hàng nghìn năm chiến tranh, thiên tai và thử thách lịch sử.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">3. Mối quan hệ giữa dân tộc và hiện đại</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Bản sắc dân tộc không đối lập với hiện đại hóa.</li>
                    <li>Trong hội nhập, tiếp thu tinh hoa văn hóa thế giới để làm giàu thêm bản sắc Việt Nam.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl">
                  III. Văn hóa Việt Nam: Thống nhất trong đa dạng
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('am-ber')}
                <p>
                  Việt Nam có 54 dân tộc anh em, mỗi dân tộc có ngôn ngữ, trang phục, lễ hội và phong tục riêng; văn hóa
                  dân tộc thiểu số là bộ phận không thể tách rời của văn hóa Việt Nam.
                </p>
                <p>
                  Sự đa dạng này tạo nên chiều sâu và bản sắc độc đáo của dân tộc. Đảng, Nhà nước và đội ngũ trí thức có
                  trách nhiệm:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Gìn giữ, bảo tồn.</li>
                  <li>Phát huy giá trị di sản.</li>
                  <li>Kết nối văn hóa các dân tộc để tạo sự thống nhất toàn diện.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl">
                  IV. Văn hóa là một mặt trận
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('purple')}
                <p>
                  Xây dựng văn hóa là nhiệm vụ lâu dài, phức tạp, đòi hỏi nỗ lực của cả hệ thống chính trị và toàn dân,
                  cần bản lĩnh và kiên trì thực hiện.
                </p>
                <div>
                  <p className="font-semibold text-gray-800">Chống lại các biểu hiện tiêu cực</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Thói hư tật xấu, sự xuống cấp đạo đức, các tệ nạn xã hội.</li>
                    <li>Sự lai căng, đánh mất bản sắc.</li>
                    <li>Các hoạt động lợi dụng văn hóa để chia rẽ, xuyên tạc.</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  Cảnh giác trước âm mưu “diễn biến hòa bình”, lợi dụng văn hóa, truyền thông, mạng xã hội để chống phá;
                  bắt buộc giữ vững bản lĩnh chính trị và nền tảng tư tưởng.
                </p>
              </CardContent>
            </Card>

            <Card id="nhiem-vu" className="border-2 border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-emerald-600" />
                  V. Mười nhiệm vụ xây dựng và phát triển văn hóa
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed">
                {renderSectionImage('nhiem-vu')}
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-gray-800">Xây dựng con người Việt Nam thời kỳ mới:</span>{' '}
                    Yêu nước, nhân ái, trung thực, trách nhiệm, kỷ luật, sáng tạo; phát triển trí tuệ, đạo đức, thể chất, thẩm mỹ.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Xây dựng môi trường văn hóa lành mạnh:</span>{' '}
                    Gia đình văn hóa, nhà trường văn hóa, cộng đồng văn minh, cơ quan và doanh nghiệp có chuẩn mực ứng xử.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Phát triển văn học – nghệ thuật:</span>{' '}
                    Tác phẩm có giá trị cao về tư tưởng và nghệ thuật; khuyến khích sáng tạo trong khuôn khổ pháp luật.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Bảo tồn và phát huy di sản văn hóa dân tộc:</span>{' '}
                    Di sản vật thể, phi vật thể, di tích lịch sử, kiến trúc; kết hợp bảo tồn với phát triển du lịch bền vững.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Phát triển giáo dục và đào tạo:</span>{' '}
                    Nâng cao dân trí, đào tạo nhân lực chất lượng cao, giáo dục lý tưởng sống và lối sống đẹp.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Đẩy mạnh khoa học – công nghệ:</span>{' '}
                    Ứng dụng công nghệ số trong sáng tạo và quản lý văn hóa, phát triển công nghiệp văn hóa.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Phát triển hệ thống thông tin đại chúng:</span>{' '}
                    Xây dựng truyền thông chuyên nghiệp, lành mạnh; ngăn chặn thông tin sai lệch, tin giả, văn hóa độc hại.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Bảo tồn và phát triển văn hóa các dân tộc thiểu số:</span>{' '}
                    Giữ gìn tiếng nói, chữ viết, phong tục đẹp; hỗ trợ vùng khó khăn và phát triển kinh tế – văn hóa.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Chính sách văn hóa đối với tôn giáo:</span>{' '}
                    Tôn trọng tự do tín ngưỡng, phát huy giá trị nhân văn của các tôn giáo, ngăn chặn lợi dụng tôn giáo gây chia rẽ.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-800">Hoàn thiện thể chế văn hóa, mở rộng giao lưu quốc tế:</span>{' '}
                    Hoàn thiện luật pháp, cơ chế quản lý; quảng bá văn hóa Việt Nam ra thế giới; tiếp nhận tinh hoa văn hóa nhân loại.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card id="phong-trao" className="border-2 border-yellow-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardTitle className="text-2xl">
                  VI. Phong trào “Toàn dân đoàn kết xây dựng đời sống văn hóa”
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('phong-trao')}
                <p>
                  Phong trào lớn được phát động trong toàn xã hội, góp phần xây dựng khu dân cư văn hóa, gia đình văn hóa,
                  lối sống văn minh; tăng cường đoàn kết, giảm tệ nạn xã hội, nâng cao đời sống tinh thần.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-100">
                <CardTitle className="text-2xl">
                  VII. Ý nghĩa chung của Nghị quyết Trung ương 5 khóa VIII
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-2">
                {renderSectionImage('y-nghia')}
                <p>Đặt nền tảng cho chiến lược phát triển văn hóa Việt Nam thời kỳ đổi mới.</p>
                <p>Góp phần giữ gìn và phát huy bản sắc dân tộc trong bối cảnh toàn cầu hóa.</p>
                <p>Nâng cao vai trò văn hóa trong đời sống xã hội và quản lý nhà nước.</p>
                <p>Xây dựng con người Việt Nam đáp ứng yêu cầu CNH – HĐH và hội nhập quốc tế.</p>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          <div className="mt-16 mb-8 animate-in fade-in duration-1000 delay-500">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl text-center">
                  Video giới thiệu
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black/20">
                  <video
                    ref={videoRef}
                    src="/video/vnr202.mp4"
                    className="w-full h-auto"
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300">
                      <Button
                        onClick={() => {
                          videoRef.current?.play();
                          setIsPlaying(true);
                        }}
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full w-20 h-20 p-0 shadow-2xl hover:scale-110 transition-transform duration-300"
                        aria-label="Play video"
                      >
                        <Play className="w-10 h-10 ml-1" fill="white" />
                      </Button>
                    </div>
                  )}
                </div>
                {isPlaying && (
                  <div className="mt-4 text-center">
                    <Button
                      onClick={() => {
                        videoRef.current?.pause();
                        setIsPlaying(false);
                      }}
                      variant="outline"
                      className="bg-white/80 hover:bg-white"
                    >
                      <Pause className="w-4 h-4 mr-2" />
                      Tạm dừng
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}
