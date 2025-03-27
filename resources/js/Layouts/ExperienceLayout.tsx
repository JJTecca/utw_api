import { PropsWithChildren } from 'react';

const backgrounds = [
  '/Images/ExperienceTypes/paradise-exotic.jpg',
  '/Images/ExperienceTypes/casual.jpg',
  '/Images/ExperienceTypes/across-country.jpg',
  '/Images/ExperienceTypes/business.jpg',
];

interface ExperienceLayoutProps extends PropsWithChildren {
  activeIndex: number;
}

export default function ExperienceLayout({ children, activeIndex }: ExperienceLayoutProps) {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="fixed inset-0 overflow-y-auto">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className="h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 pt-6 sm:pt-0">
        {children}
      </div>
    </div>
  );
}
