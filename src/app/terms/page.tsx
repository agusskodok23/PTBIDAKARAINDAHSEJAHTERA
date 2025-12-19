'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, FileText, Shield, Users, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsAndConditions() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Button onClick={goBack} variant="ghost" className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PT BIDAKARA</h1>
                  <p className="text-xs text-gray-600">INDAH SEJAHTERA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gavel className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan dari <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span>.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span>. 
                  Syarat dan Ketentuan ini mengatur penggunaan layanan kami, website, dan semua produk yang 
                  kami tawarkan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat 
                  oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, harap jangan 
                  gunakan layanan kami. Kami berhak mengubah syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Definisi</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">"Perusahaan"</h3>
                    <p className="text-gray-600">
                      Merujuk pada PT BIDAKARA INDAH SEJAHTERA, entitas bisnis yang menyediakan layanan investasi dan pengembangan properti.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">"Layanan"</h3>
                    <p className="text-gray-600">
                      Meliputi semua layanan konsultasi, manajemen proyek, pengembangan properti, dan layanan lainnya yang ditawarkan oleh Perusahaan.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">"Pengguna" atau "Klien"</h3>
                    <p className="text-gray-600">
                      Individu, perusahaan, atau entitas lain yang menggunakan layanan kami.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">"Website"</h3>
                    <p className="text-gray-600">
                      Platform online milik Perusahaan yang dapat diakses melalui internet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Terms */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Syarat Layanan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Kelayakan</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Usia minimal 18 tahun atau memiliki persetujuan orang tua/wali</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Memiliki kapasitas hukum untuk mengikat kontrak</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Memberikan informasi yang akurat dan lengkap</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Pendaftaran Akun</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Anda bertanggung jawab menjaga kerahasiaan kredensial akun</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Anda bertanggung jawab atas semua aktivitas di bawah akun Anda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Segera beri tahu kami jika ada penggunaan yang tidak sah</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Penggunaan Layanan</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Menggunakan layanan hanya untuk tujuan yang sah</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Tidak melanggar hukum atau peraturan yang berlaku</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Tidak mengganggu atau merusak sistem kami</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Syarat Pembayaran</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                    <p className="text-gray-600">
                      Kami menerima berbagai metode pembayaran yang akan diinformasikan saat transaksi. 
                      Semua pembayaran harus dilakukan dalam mata uang Rupiah (IDR).
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Jadwal Pembayaran</h3>
                    <p className="text-gray-600">
                      Jadwal pembayaran akan ditentukan dalam kontrak layanan. Keterlambatan pembayaran 
                      dapat dikenakan denda sesuai dengan ketentuan yang berlaku.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Pengembalian Dana</h3>
                    <p className="text-gray-600">
                      Kebijakan pengembalian dana mengikuti syarat dan ketentuan yang tertulis dalam 
                      kontrak layanan masing-masing proyek.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten, materi, dan merek dagang yang terdapat di website dan layanan kami 
                  adalah milik <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span> 
                  atau pihak ketiga yang berlisensi.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Hak yang Dilindungi</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Nama perusahaan dan logo</li>
                      <li>• Konten website dan materi pemasaran</li>
                      <li>• Desain dan tata letak</li>
                      <li>• Dokumen dan laporan proyek</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Penggunaan yang Diizinkan</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Penggunaan pribadi untuk informasi</li>
                      <li>• Referensi dengan mencantumkan sumber</li>
                      <li>• Penggunaan dengan izin tertulis</li>
                      <li>• Link ke website kami</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pembatasan Tanggung Jawab</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Batasan Jaminan</h3>
                    <p className="text-gray-600">
                      Layanan kami disediakan "sebagaimana adanya" tanpa jaminan tersurat maupun tersirat. 
                      Kami tidak menjamin bahwa layanan akan bebas dari kesalahan atau gangguan.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Batasan Kerugian</h3>
                    <p className="text-gray-600">
                      Tanggung jawab kami maksimal sebesar biaya layanan yang telah Anda bayarkan. 
                      Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
                    <p className="text-gray-600">
                      Kami tidak bertanggung jawab atas kegagalan pelaksanaan akibat kejadian di luar 
                      kendali kami (bencana alam, perang, pemogokan, dll).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pengakhiran Layanan</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Pengguna</h3>
                    <p className="text-gray-600">
                      Anda dapat menghentikan penggunaan layanan kami kapan saja dengan memberikan 
                      pemberitahuan tertulis minimal 30 hari sebelumnya.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Perusahaan</h3>
                    <p className="text-gray-600">
                      Kami dapat menghentikan layanan jika Anda melanggar syarat dan ketentuan ini, 
                      dengan pemberitahuan sesegera mungkin.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Efek Pengakhiran</h3>
                    <p className="text-gray-600">
                      Setelah pengakhiran, hak akses Anda akan dinonaktifkan dan kami berhak 
                      menghapus data Anda sesuai dengan kebijakan privasi kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Penyelesaian Sengketa</h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Setiap sengketa yang timbul dari atau berkaitan dengan syarat dan ketentuan ini akan 
                  diselesaikan melalui musyawarah untuk mufakat terlebih dahulu.
                </p>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Yurisdiksi</h4>
                      <p className="text-sm text-gray-600">
                        Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                        Setiap sengketa akan diselesaikan di pengadilan Yogyakarta.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Mediasi:</span>
                      <span className="text-gray-600 ml-2">Upaya damai terlebih dahulu</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Arbitrase:</span>
                      <span className="text-gray-600 ml-2">Jika mediasi gagal</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Pengadilan:</span>
                      <span className="text-gray-600 ml-2">Sebagai upaya terakhir</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Biaya:</span>
                      <span className="text-gray-600 ml-2">Ditanggung pihak yang kalah</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">PT BIDAKARA INDAH SEJAHTERA</h4>
                      <p className="text-sm text-gray-600">Departemen Hukum & Kepatuhan</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-600 ml-2">legal@bidakaraindahsejahtera.co.id</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Telepon:</span>
                      <span className="text-gray-600 ml-2">0853730487291</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-gray-900">Alamat:</span>
                      <span className="text-gray-600 ml-2">
                        Jl. Malioboro 52-58, Kel. Suryatmajan, Kec. Danurejan, 
                        Kota Yogyakarta, Prov. Daerah Istimewa Yogyakarta 55112
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">
                Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}