import { render, screen } from '@testing-library/react';
import { about } from '../../../src/data';
import AboutBox from '../../../src/components/about/aboutBox';

describe('AboutBox Component', () => {
    const aboutBox = [
        {
            title: 'Manajemen Data',
            subtitle: 'Software ERP memberikan keamanan terbaik untuk seluruh data perusahaan, baik data keuangan maupun data karyawan.',
        },
        {
            title: 'Sistem yang Terintegrasi',
            subtitle: 'Software ERP yang mengintegrasikan seluruh modul akan membantu menyederhanakan kolaborasi antar divisi dalam perusahaan.',
        },
    ]

    it('should render a box items', () => {
        render(<AboutBox datas={aboutBox} />)
        
        aboutBox.forEach(data => {
            expect(screen.getByText(data.title)).toBeInTheDocument()
            expect(screen.getByText(data.subtitle)).toBeInTheDocument()
        })
    })
});