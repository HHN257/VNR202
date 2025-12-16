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
    { src: '/images/first.png', alt: 'Lễ hội văn hóa dân gian trên sông' },
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
    'tong-quan': { src: '/images/second.webp', alt: 'Bối cảnh chung sau đổi mới (1986 – 1996)' },
    'ban-sac': { src: '/images/first page/first.png', alt: 'Bản sắc và khái niệm văn hóa' },
    'am-ber': { src: '/images/first page/3.jpg', alt: 'Văn hóa Việt Nam thống nhất trong đa dạng' },
    'purple': { src: '/images/4.jpg', alt: 'Văn hóa là một mặt trận' },
    'nhiem-vu': { src: '/images/first page/5.jpg', alt: 'Mười nhiệm vụ phát triển văn hóa' },
    'phong-trao': { src: '/images/first page/6.jpg', alt: 'Phong trào toàn dân đoàn kết xây dựng đời sống văn hóa' },
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
                  I. Bối cảnh chung sau đổi mới (1986 – 1996)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('tong-quan')}
                <p>Việt Nam ra khỏi khủng hoảng kinh tế – xã hội nhưng vẫn còn nhiều hạn chế.</p>
                <p>Xác định con đường đi lên CNXH ngày càng rõ ràng.</p>
                <p>Nhiệm vụ quan trọng: chuẩn bị nền tảng để công nghiệp hóa, hiện đại hóa (CNH–HĐH).</p>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Đánh giá chung 10 năm đổi mới:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Thành tựu to lớn, ý nghĩa quan trọng.</li>
                    <li>Kinh tế tăng trưởng, chính trị ổn định, quốc phòng – an ninh vững mạnh.</li>
                    <li>Tuy nhiên vẫn còn yếu kém: nguy cơ tụt hậu, chệch hướng, trì trệ…</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card id="ban-sac" className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl">
                  II. Đại hội VIII (1996) – Mốc khởi đầu thời kỳ đẩy mạnh CNH–HĐH
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('ban-sac')}
                <p>Đại hội VIII họp năm 1996, bối cảnh: khoa học – công nghệ phát triển mạnh, CNXH thoái trào trên thế giới.</p>
                <p>Sau 10 năm đổi mới, Việt Nam đạt nhiều thành tựu: kinh tế, chính trị, xã hội, quốc phòng, an ninh.</p>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Đại hội nêu đặc trưng mục tiêu XHCN:</p>
                  <p className="text-gray-600">Dân giàu – nước mạnh – xã hội công bằng – văn minh.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Đề ra nhiều nhiệm vụ trọng tâm:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Phát triển kinh tế là trung tâm.</li>
                    <li>Xây dựng Đảng là then chốt.</li>
                    <li>Phát huy nhân tố con người.</li>
                    <li>Mở rộng hợp tác quốc tế.</li>
                    <li>Đẩy mạnh CNH–HĐH.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl">
                  III. Phát triển giáo dục – đào tạo, khoa học – công nghệ
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('am-ber')}
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Nghị quyết 02-NQ/HNTW (1996):</p>
                  <p>Giáo dục – đào tạo là quốc sách hàng đầu.</p>
                  <p>Mục tiêu: xây dựng con người mới, đáp ứng yêu cầu CNH–HĐH.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Khoa học – công nghệ là động lực phát triển:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Thúc đẩy ứng dụng vào sản xuất, kinh tế, quốc phòng – an ninh.</li>
                    <li>Xây dựng tiềm lực khoa học trong nước, từng bước hình thành nền khoa học hiện đại.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl">
                  IV. Xây dựng và hoàn thiện Nhà nước pháp quyền XHCN
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('purple')}
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tập trung 3 yêu cầu:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Phát huy dân chủ và quyền làm chủ của nhân dân.</li>
                    <li>Xây dựng Nhà nước trong sạch, vững mạnh, hoạt động hiệu quả.</li>
                    <li>Tăng cường sự lãnh đạo của Đảng đối với Nhà nước.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Nhiệm vụ:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mở rộng dân chủ xã hội chủ nghĩa.</li>
                    <li>Cải cách hành chính, cải cách tư pháp.</li>
                    <li>Kiện toàn bộ máy, nâng cao chất lượng cán bộ, công chức.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card id="nhiem-vu" className="border-2 border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-emerald-600" />
                  V. Công tác xây dựng Đảng
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed">
                {renderSectionImage('nhiem-vu')}
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Yêu cầu cấp thiết:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Giữ vững bản chất giai cấp của Đảng.</li>
                    <li>Nâng cao phẩm chất, năng lực đội ngũ cán bộ, đảng viên.</li>
                    <li>Kiên quyết chống tham nhũng, quan liêu.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800 mb-2">Đảng đề ra giải pháp:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Tự chỉnh đốn, nâng cao sức chiến đấu.</li>
                    <li>Đổi mới phương thức lãnh đạo của Đảng.</li>
                    <li>Tăng cường kiểm tra, kỷ luật trong Đảng.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card id="phong-trao" className="border-2 border-yellow-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardTitle className="text-2xl">
                  VI. Nhiệm vụ phát triển kinh tế thời kỳ mới
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('phong-trao')}
                <p className="font-semibold text-gray-800 mb-2">Tập trung các nhiệm vụ:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Thúc đẩy chuyển dịch cơ cấu kinh tế.</li>
                  <li>Tăng cường đầu tư, phát triển doanh nghiệp.</li>
                  <li>Phát triển nông nghiệp theo hướng CNH–HĐH.</li>
                  <li>Đổi mới hệ thống tài chính – tiền tệ.</li>
                  <li>Giải quyết việc làm, xóa đói giảm nghèo.</li>
                  <li>Mở rộng kinh tế đối ngoại.</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="y-nghia" className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-100">
                <CardTitle className="text-2xl">
                  VII. Ý nghĩa của Đại hội VIII
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-2">
                {renderSectionImage('y-nghia')}
                <p>Chính thức mở ra thời kỳ đẩy mạnh CNH–HĐH ở Việt Nam.</p>
                <p>Cụ thể hóa mục tiêu độc lập dân tộc gắn liền với CNXH.</p>
                <p>Xác định rõ vai trò của giáo dục, khoa học – công nghệ, nguồn lực con người.</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button
                    onClick={() => router.push('/presentation/culture-resolution')}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    size="lg"
                  >
                    Tiếp tục: Nghị quyết 03-NQ/TW (1998) →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          {/* <div className="mt-16 mb-8 animate-in fade-in duration-1000 delay-500">
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
          </div> */}
          
        </div>
      </div>
    </div>
  );
}
