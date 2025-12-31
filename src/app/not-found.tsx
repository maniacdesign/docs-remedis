import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* Ikon Besar / Ilustrasi */}
      <div className="mb-6 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
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
