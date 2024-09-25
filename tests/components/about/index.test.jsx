import { render, screen } from '@testing-library/react';
import { about } from '../../../src/data';
import AboutBox from '../../../src/components/about/aboutBox';

describe('About Component', () => {
  const mockData = about
    
  it('renders heading and description text', () => {
    render(<AboutBox />);

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Tentang ERP House')
    
    expect(screen.getByText('Kami adalah Perusahaan yang bergerak di bidang IT, kami hadir menawarkan sebuah Solusi dalam meningkatkan Produktifitas Proses Bisnis Perusahaan.')).toBeInTheDocument();
  });

  it('renders AboutBox component with correct props', () => {
    render(<AboutBox datas={mockData} />);

    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.subtitle)).toBeInTheDocument();
    });
  });
});