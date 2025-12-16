'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Play, Pause, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CultureResolutionPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionImages: Record<
    string,
    {
      src: string;
      alt: string;
    }
  > = {
    'quan-diem': { src: '/images/1.jpg', alt: 'Quan điểm chỉ đạo về văn hóa' },
    'tien-tien': { src: '/images/2.jpg', alt: 'Nội dung tiên tiến' },
    'ban-sac': { src: '/images/3.jpg', alt: 'Bản sắc dân tộc' },
    'dac-trung': { src: '/images/4.jpg', alt: 'Đặc trưng nền văn hóa Việt Nam' },
    'vai-tro': { src: '/images/5.jpg', alt: 'Vai trò chủ thể xây dựng văn hóa' },
    'nhiem-vu': { src: '/images/6.jpg', alt: 'Mười nhiệm vụ cụ thể' },
    'y-nghia': { src: '/images/7.jpg', alt: 'Ý nghĩa của Nghị quyết' },
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
          onClick={() => router.push('/presentation')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              NGHỊ QUYẾT 03-NQ/TW (1998)
            </h1>
            <p className="text-xl text-gray-600">
              XÂY DỰNG NỀN VĂN HÓA VIỆT NAM TIÊN TIẾN, ĐẬM ĐÀ BẢN SẮC DÂN TỘC
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl">
                  VIII. Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('quan-diem')}
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">1. Quan điểm chỉ đạo</p>
                  <p>Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực phát triển kinh tế – xã hội.</p>
                  <p>Xây dựng kinh tế phải hướng đến mục tiêu văn hóa, vì một xã hội công bằng, văn minh, con người phát triển toàn diện.</p>
                  <p className="font-semibold text-gray-800 mt-3 mb-2">Nền văn hóa Việt Nam xây dựng phải:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Tiên tiến</strong> → yêu nước, tiến bộ, mang lý tưởng độc lập dân tộc và CNXH theo chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh.</li>
                    <li><strong>Đậm đà bản sắc dân tộc</strong> → kết tinh các giá trị bền vững của cộng đồng dân tộc Việt Nam.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">2. Nội dung "Tiên tiến"</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Cốt lõi: lý tưởng độc lập dân tộc gắn với CNXH.</li>
                    <li>Vì mục tiêu: con người hạnh phúc, tự do, phát triển toàn diện.</li>
                    <li>Tiên tiến thể hiện cả trong nội dung tư tưởng lẫn hình thức biểu đạt và phương tiện truyền tải.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-800 mb-2">3. Nội dung "Bản sắc dân tộc"</p>
                  <p className="mb-2">Gồm những giá trị:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lòng yêu nước, ý chí tự cường.</li>
                    <li>Đoàn kết, ý thức cộng đồng; nghĩa tình, nhân ái, khoan dung.</li>
                    <li>Cần cù, sáng tạo trong lao động; giản dị trong lối sống.</li>
                    <li>Tinh tế trong ứng xử.</li>
                  </ul>
                  <p className="mt-2 text-gray-600">→ Giữ bản sắc phải gắn với mở rộng giao lưu quốc tế, tiếp thu tinh hoa văn hóa nhân loại nhưng chống lạc hậu, lỗi thời.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl">
                  IX. Đặc trưng nền văn hóa Việt Nam
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-4">
                {renderSectionImage('dac-trung')}
                <p>Nền văn hóa thống nhất trong đa dạng của 54 dân tộc anh em.</p>
                <p>Mỗi dân tộc có bản sắc riêng, góp phần làm phong phú nền văn hóa chung.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl">
                  X. Vai trò chủ thể xây dựng văn hóa
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed space-y-3">
                {renderSectionImage('vai-tro')}
                <p>Là sự nghiệp của toàn dân, do Đảng lãnh đạo.</p>
                <p>Đội ngũ trí thức giữ vai trò quan trọng.</p>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Văn hóa là một mặt trận, đòi hỏi đấu tranh kiên trì:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chống thói hư tật xấu.</li>
                    <li>Nâng cao tính chiến đấu.</li>
                    <li>Ngăn chặn lợi dụng văn hóa để thực hiện "diễn biến hòa bình".</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card id="nhiem-vu" className="border-2 border-emerald-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-emerald-600" />
                  XI. Mười nhiệm vụ cụ thể xây dựng và phát triển văn hóa
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-gray-700 leading-relaxed">
                {renderSectionImage('nhiem-vu')}
                <ul className="list-disc pl-6 space-y-2">
                  <li>Xây dựng con người Việt Nam.</li>
                  <li>Xây dựng môi trường văn hóa.</li>
                  <li>Phát triển văn học – nghệ thuật.</li>
                  <li>Bảo tồn và phát huy di sản văn hóa.</li>
                  <li>Phát triển giáo dục – đào tạo và khoa học – công nghệ.</li>
                  <li>Phát triển và quản lý hệ thống thông tin đại chúng.</li>
                  <li>Bảo tồn và phát triển văn hóa các dân tộc thiểu số.</li>
                  <li>Chính sách văn hóa với tôn giáo.</li>
                  <li>Củng cố, hoàn thiện thể chế văn hóa.</li>
                  <li>Mở rộng hợp tác quốc tế về văn hóa.</li>
                </ul>
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
                    src="/video/vnr202_2.mp4"
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

