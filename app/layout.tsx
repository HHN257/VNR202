import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Award, Compass, Home, Landmark, Lightbulb, RefreshCw, Shield } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nghị quyết Trung ương 5 khóa VIII',
  description: 'Toàn văn nghị quyết về xây dựng và phát triển văn hóa Việt Nam.',
};

const navItems = [
  { label: 'Bối cảnh chung', href: '/presentation#tong-quan', icon: Home },
  { label: 'Đại hội VIII (1996)', href: '/presentation#ban-sac', icon: Compass },
  { label: 'Công tác xây dựng Đảng', href: '/presentation#nhiem-vu', icon: Landmark },
  { label: 'Nhiệm vụ phát triển kinh tế thời kỳ mới', href: '/presentation#phong-trao', icon: Shield },
  { label: 'Ý nghĩa của Đại hội VIII', href: '/presentation#y-nghia', icon: Award },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 shadow">
          <div className="bg-gradient-to-r from-amber-200 via-orange-100 to-amber-50 border-b border-amber-300/80">
          <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">
              <Link href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold text-amber-900">
                <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-amber-700" />
                <span>Nghị quyết TW5 – VIII</span>
              </Link>
              <nav className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-amber-900 transition-all duration-200 hover:bg-white/70 hover:-translate-y-[1px] hover:shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-amber-700 transition-colors duration-200 group-hover:text-amber-800" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="lg:hidden text-sm text-amber-800">Menu</div>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-12 bg-[#2f2016] text-amber-100">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              {/* Left column */}
              <div className="md:w-1/3 space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-200 text-lg font-semibold">
                  <Shield className="h-5 w-5" />
                  <span>Nghị Quyết TW5 - VIII</span>
                </div>
                <p className="text-sm text-amber-200/90 leading-relaxed">
                  Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc – đầy đủ các luận điểm,
                  nhiệm vụ và ý nghĩa trọng tâm.
                </p>
              </div>

              {/* Middle column */}
              <div className="md:w-1/3 space-y-4 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-200 font-semibold text-lg">
                  <Compass className="h-5 w-5" />
                  <span>Liên Kết</span>
                </div>
                <div className="space-y-3 text-amber-100/90">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 hover:text-white transition-colors duration-200"
                  >
                    <Home className="h-4 w-4" /> Trang chủ
                  </Link>
                  <Link
                    href="/presentation"
                    className="flex items-center justify-center gap-2 hover:text-white transition-colors duration-200"
                  >
                    <Compass className="h-4 w-4" /> Bối cảnh chung
                  </Link>
                  <Link
                    href="/summary"
                    className="flex items-center justify-center gap-2 hover:text-white transition-colors duration-200"
                  >
                    <Landmark className="h-4 w-4" /> Tóm tắt
                  </Link>
                </div>
              </div>

              {/* Right column */}
              <div className="md:w-1/3 space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-amber-200 font-semibold text-lg">
                  <Landmark className="h-5 w-5" />
                  <span>Trọng tâm</span>
                </div>
                <p className="text-xl font-semibold text-amber-100">Mười nhiệm vụ xây dựng văn hóa</p>
                <p className="text-sm text-amber-100/90 leading-relaxed">
                  Từ xây dựng con người Việt Nam thời kỳ mới, môi trường văn hóa lành mạnh đến hoàn thiện thể chế,
                  thông tin đại chúng, bảo tồn di sản và mở rộng giao lưu quốc tế.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
