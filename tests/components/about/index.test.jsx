import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../../src/components/about';

vi.mock('./AboutBox', () => ({ datas }) => (
    <div>
        {datas.map(item => (
        <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
        </div>
        ))}
    </div>
));

describe('About Component', () => {
    const mockData = [
        {
          title: 'Manajemen Data',
          subtitle: 'Software ERP memberikan keamanan terbaik untuk seluruh data perusahaan, baik data keuangan maupun data karyawan.',
          image: 'path/to/projections.png'
        },
        {
          title: 'Sistem yang Terintegrasi',
          subtitle: 'Software ERP yang mengintegrasikan seluruh modul akan membantu menyederhanakan kolaborasi antar divisi dalam perusahaan.',
          image: 'path/to/goodteam.png'
        },
        {
          title: 'Konfigurasi Sistem',
          subtitle: 'Software ERP dapat memudahkan segala validasi data sistem untuk memaksimalkan pengolahan data perusahaan.',
          image: 'path/to/versioncontrol.png'
        }
      ];
    
    it('renders section with correct ID and content', () => {
        render(<About datas={mockData} />);

        // Check if the section with id="about" exists
        expect(screen.getByRole('banner')).toHaveAttribute('id', 'about');

        // Check if the title and description are rendered
        expect(screen.getByText('Tentang ERP House')).toBeInTheDocument();
        expect(screen.getByText('Kami adalah Perusahaan yang bergerak di bidang IT, kami hadir menawarkan sebuah Solusi dalam meningkatkan Produktifitas Proses Bisnis Perusahaan.')).toBeInTheDocument();
    });

    it('renders AboutBox component with correct props', () => {
        render(<About datas={mockData} />);

        // Check if AboutBox is rendered with the correct data
        mockData.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.subtitle)).toBeInTheDocument();
            expect(screen.getByAltText(item.title)).toBeInTheDocument();
        });
    });
});