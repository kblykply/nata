'use client';

import { kampanyalar } from '@/data/kampanyalar';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';

export default function KampanyaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const kampanya = kampanyalar.find((k) => k.slug === slug);

  if (!kampanya) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-100">
        {/* Left Content */}
        <div className="max-w-2xl space-y-2 z-10">
          <h1 className="text-3xl font-semibold text-gray-800 leading-snug">
            {kampanya.title}
            <br />
            <span className="text-red-600">{kampanya.highlight}</span>
          </h1>
          {kampanya.description && (
            <p className="text-gray-600 text-sm mt-2">{kampanya.description}</p>
          )}
        </div>

        {/* Right Image */}
        {kampanya.image && (
          <div className="absolute bottom-0 right-0">
            <Image
              src={kampanya.image}
              alt="Kampanya Görseli"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* First One Section - Sadece varsa göster */}
      {kampanya.firstOne && (
        <div className='w-full flex items-center justify-center'>
          <div className='max-w-5xl w-full px-6 flex items-center py-10'>
            <p className='text-sm font-medium'>{kampanya.firstOne}</p>
          </div>
        </div>
      )}

      {/* Gray Text Section - Sadece varsa göster */}
      {kampanya.grayText && (
        <div className='w-full flex mb-10 items-center justify-center'>
          <div className='w-full md:w-8/12 h-auto md:h-[150px] text-center bg-gray-200 flex items-center justify-center p-6 md:p-0'>
            <p className='text-base md:text-lg w-full md:w-full font-semibold text-black whitespace-pre-line'>{kampanya.grayText}</p>
          </div>
        </div>
      )}
      {/* Content Sections */}
      {kampanya.content && kampanya.content.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          {kampanya.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold text-gray-800">{section.title}</h2>
              {Array.isArray(section.text) ? (
                <ol className="text-2xl py-2 space-y-2 text-sm text-gray-700 mt-2">
                  {section.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-2xl text-gray-600 mt-2">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {kampanya.secondText && (
        <div className='w-full flex items-center justify-center'>
          <div className='max-w-5xl w-full px-6 flex items-center py-10'>
            <p className='text-sm font-medium' dangerouslySetInnerHTML={{ __html: kampanya.secondText }} />
          </div>
        </div>
      )}


      {/* Next Content Section - Sadece varsa göster */}
      {kampanya.nextContent && kampanya.nextContent.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          {kampanya.nextContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold text-gray-800">{section.title}</h2>
              {Array.isArray(section.text) ? (
                <ol className="text-2xl py-2 space-y-2 text-sm text-gray-700 mt-2">
                  {section.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-2xl text-gray-600 mt-2">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
