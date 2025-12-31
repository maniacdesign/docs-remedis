import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center flex-1 max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-4">
        {" "}
        Selamat Datang di Portal Dokumentasi Sistem Rekam Medis Elektronik
      </h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Portal ini didedikasikan sebagai pusat rujukan informasi dan panduan
        teknis mengenai tata cara pengisian Rekam Medis Elektronik (E-RM) di
        lingkungan{" "}
        <span className="font-semibold text-gray-800">
          RSUD dr. H. Koesnadi Bondowoso
        </span>
        . Dokumen ini disusun untuk memastikan keseragaman, kelengkapan, dan
        akurasi data klinis pasien sesuai dengan standar yang berlaku.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 mb-8 text-left rounded-r shadow-sm w-full">
        <div className="flex items-start">
          {/* Ikon Info (SVG) */}
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Konten Callout */}
          <div>
            <p className="font-bold">Status Pengembangan & Pembaruan</p>
            <p className="text-sm mt-1">
              Mohon diperhatikan bahwa Sistem E-RM ini sedang dalam{" "}
              <strong>tahap pengembangan aktif</strong>. Materi dalam
              dokumentasi ini bersifat dinamis dan akan terus mengalami
              pembaruan (<em>continuous update</em>). Kami menyarankan pengguna
              untuk memeriksa log perubahan (changelog) secara berkala.
            </p>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-6">
        Silakan gunakan navigasi yang tersedia untuk memulai mempelajari modul
        yang Anda butuhkan.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        Buka Dokumentasi
      </Link>
    </div>
  );
}
