import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center bg-white justify-center min-h-[100dvh] text-center px-4">
      <div className="mb-8">
        <Image
          src="/404.png"
          alt="404 Not Found"
          width={800}
          height={600}
          priority={true}
          className="w-full max-w-lg h-auto mx-auto"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Halaman Tidak Ditemukan
      </h2>

      <p className="text-gray-600 mb-8 max-w-md">
        Maaf, data atau halaman dokumentasi yang Anda cari belum tersedia di
        basis data sistem kami. Cek secara berkala untuk update terbaru.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>

        <Link
          href="/docs"
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kembali ke halaman sebelumnya
        </Link>
      </div>
    </div>
  );
}
