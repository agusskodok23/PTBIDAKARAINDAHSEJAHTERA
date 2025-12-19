'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicy() {
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
                  <Shield className="w-6 h-6 text-white" />
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
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span> 
            <br />melindungi privasi dan data pribadi Anda dengan serius.
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
                  Kami memahami bahwa privasi Anda sangat penting. Kebijakan Privasi ini menjelaskan bagaimana kami 
                  mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                  layanan kami, website, atau berinteraksi dengan perusahaan kami.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini. 
                  Jika Anda tidak setuju dengan praktik kami, harap jangan gunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Nama lengkap, alamat email, nomor telepon</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Alamat fisik dan kode pos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Informasi identifikasi lainnya yang Anda berikan secara sukarela</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Alamat IP dan informasi perangkat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Jenis browser dan sistem operasi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Informasi penggunaan website dan cookies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Bagaimana Kami Menggunakan Informasi</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Untuk Menyediakan Layanan</h3>
                    <p className="text-gray-600">
                      Kami menggunakan informasi Anda untuk menyediakan, mengelola, dan meningkatkan layanan yang 
                      Anda minta, termasuk konsultasi dan manajemen proyek.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Untuk Komunikasi</h3>
                    <p className="text-gray-600">
                      Menghubungi Anda mengenai layanan, pembaruan, atau informasi penting terkait proyek dan 
                      penawaran dari <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span>.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">Untuk Keamanan</h3>
                    <p className="text-gray-600">
                      Melindungi keamanan dan integritas layanan kami, mencegah penipuan, dan mematuhi 
                      kewajiban hukum yang berlaku.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="text-blue-600 font-semibold">PT BIDAKARA INDAH SEJAHTERA</span> 
                  berkomitmen untuk melindungi informasi pribadi Anda dengan langkah-langkah keamanan yang 
                  ketat dan sesuai standar industri.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Teknologi Keamanan</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Enkripsi data transmisi dan penyimpanan</li>
                      <li>• Firewall dan sistem deteksi intrusi</li>
                      <li>• Akses terbatas dan terotentikasi</li>
                      <li>• Pembaruan keamanan reguler</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Prosedur Internal</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Pelatihan staf tentang keamanan data</li>
                      <li>• Kebijakan akses minimum perlu</li>
                      <li>• Audit keamanan berkala</li>
                      <li>• Protokol respons insiden</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Hak Anda Sebagai Pengguna</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Akses dan Koreksi</h3>
                    <p className="text-gray-600">
                      Anda berhak mengakses, memperbarui, atau mengoreksi informasi pribadi yang kami simpan tentang Anda.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Penghapusan Data</h3>
                    <p className="text-gray-600">
                      Anda dapat meminta penghapusan data pribadi Anda, kecuali jika kami diwajibkan secara hukum 
                      untuk menyimpannya.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Penolakan Pemasaran</h3>
                    <p className="text-gray-600">
                      Anda dapat memilih untuk tidak menerima komunikasi pemasaran dari kami kapan saja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau bagaimana kami menangani 
                  data pribadi Anda, silakan hubungi kami:
                </p>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">PT BIDAKARA INDAH SEJAHTERA</h4>
                      <p className="text-sm text-gray-600">Departemen Privasi & Keamanan Data</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-600 ml-2">privacy@bidakaraindahsejahtera.co.id</span>
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
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Harap periksa secara berkala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}