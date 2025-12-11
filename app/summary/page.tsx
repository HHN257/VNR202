'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SummaryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Về trang chủ
        </Button>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tóm tắt nhanh
            </h1>
            <p className="text-lg text-gray-700">
              Điểm nhấn chính của Nghị quyết Trung ương 5 khóa VIII (1998) về xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <Button variant="secondary" onClick={() => router.push('/presentation')}>
                <BookOpen className="mr-2 h-4 w-4" />
                Xem nội dung đầy đủ
              </Button>
            </div>
          </div>

          <Card className="border-2 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-orange-600" />
                Điểm nhấn chính
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Văn hóa là nền tảng tinh thần, mục tiêu và động lực của phát triển; phải gắn kết hài hòa với kinh tế, củng cố nền tảng tư tưởng của Đảng và chống lại các biểu hiện tiêu cực, suy thoái.
              </p>
              <p>
                Nghị quyết đề ra mười nhiệm vụ trọng tâm: xây dựng con người mới, môi trường văn hóa lành mạnh, phát triển văn học nghệ thuật, giáo dục – đào tạo, khoa học – công nghệ, thông tin đại chúng, bảo tồn di sản và văn hóa dân tộc thiểu số, chính sách với tôn giáo, hoàn thiện thể chế và mở rộng giao lưu quốc tế.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
