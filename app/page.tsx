'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Lightbulb, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-yellow-50/80 to-orange-100/80 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-red-800 mb-4">
            NGHỊ QUYẾT TRUNG ƯƠNG 5 KHÓA VIII (1998)
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed">
            Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc – đầy đủ các
            luận điểm, nhiệm vụ và ý nghĩa trọng tâm.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center" onClick={() => router.push('/presentation')}>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Nội dung đầy đủ</h3>
                <p className="text-gray-600">Đọc toàn văn nghị quyết, bố cục theo từng phần</p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center" onClick={() => router.push('/summary')}>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tóm tắt nhanh</h3>
                <p className="text-gray-600">Điểm nhấn về vị trí, mục tiêu, nhiệm vụ xây dựng văn hóa</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-6 animate-in slide-in-from-bottom duration-1000 delay-300">
            <div className="bg-white/60 backdrop-blur rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nội dung chính</h2>
              <p className="text-gray-700 leading-relaxed">
                Nghị quyết nhấn mạnh văn hóa là nền tảng tinh thần, mục tiêu và động lực phát triển; đề
                ra mười nhiệm vụ trọng tâm để xây dựng con người Việt Nam thời kỳ mới, bảo tồn và phát
                huy bản sắc dân tộc trong hội nhập, phát triển môi trường văn hóa lành mạnh, hoàn thiện
                thể chế và thúc đẩy phong trào toàn dân đoàn kết xây dựng đời sống văn hóa.
              </p>
            </div>

            <Button
              onClick={() => router.push('/presentation')}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white text-xl px-12 py-6 h-auto"
            >
              Đọc toàn văn nghị quyết
            </Button>
          </div>

          
        </div>
        </div>
      </div>
    </>
  );
}
