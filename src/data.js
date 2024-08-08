import { ReactComponent as Projections } from "./assets/image/undraw_projections.svg";
import { ReactComponent as GoodTeam } from "./assets/image/undraw_good_team.svg";
import { ReactComponent as VersionControl } from "./assets/image/undraw_version_control.svg";

export const menus = [
    { id: '#intro', title: 'Home' },
    { id: '#about', title: 'Tentang Kami' },
    { id: '#pricing', title: 'Layanan' },
    { id: '#contact', title: 'Hubungi Kami' }
];

export const about = [
    {
        title: 'Manajemen Data',
        subtitle: 'Software ERP memberikan keamanan terbaik untuk seluruh data perusahaan, baik data keuangan maupun data karyawan.',
        image: Projections
    },
    {
        title: 'Sistem yang Terintegrasi',
        subtitle: 'Software ERP yang mengintegrasikan seluruh modul akan membantu menyederhanakan kolaborasi antar divisi dalam perusahaan.',
        image: GoodTeam
    },
    {
        title: 'Konfigurasi Sistem',
        subtitle: 'Software ERP dapat memudahkan segala validasi data sistem untuk memaksimalkan pengolahan data perusahaan.',
        image: VersionControl
    }
]

const packageDetails = {
    Basic: [false, false, false, false],
    Bussiness: [true, true, false, false],
    Entrepreneur: [true, true, true, true]
};
  
const createPackageDetail = (status) => [
    { text: 'Mencatat Barang Masuk & Keluar', status: true },
    { text: 'Mencatat Hasil Keuntungan', status: true },
    { text: 'Analisa Penjualan dengan Chart', status: status[0] },
    { text: 'Support 7x24 Jam', status: status[1] },
    { text: 'Export Data ke Excel', status: status[2] },
    { text: 'AI Prediksi Penghasilan', status: status[3] }
];
  
export const pricing = [
    {
      package: 'Basic',
      price: 149000,
      packageDetail: createPackageDetail(packageDetails.Basic)
    },
    {
      package: 'Bussiness',
      price: 249000,
      packageDetail: createPackageDetail(packageDetails.Bussiness)
    },
    {
      package: 'Entrepreneur',
      price: 329000,
      packageDetail: createPackageDetail(packageDetails.Entrepreneur)
    }
  ];