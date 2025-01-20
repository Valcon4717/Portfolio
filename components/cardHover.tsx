'use-client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    sub: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span
            className="absolute inset-0 h-full w-full block rounded-3xl"
            style={{ background: 'var(--card-hover)' }}
            animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <Card className="flex flex-col" isHovered={hoveredIndex === idx}>
            <div className="flex flex-col">
              {' '}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <CardSubDescription className="mt-auto">
              {item.sub}
            </CardSubDescription>{' '}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden relative flex flex-col justify-between z-20',
        className
      )}
      style={{
        background: 'var(--card-background)',
        border: isHovered
          ? '1px solid var(--primary)'
          : '1px solid var(--card-outline)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h6
      className={cn('tracking-wide mt-4', className)}
      style={{
        color: 'var(--on-background)',
        fontSize: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      {children}
    </h6>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        color: 'var(--subtitle)',
        fontSize: '1.05rem',
        fontWeight: '400',
        lineHeight: '1.5',
        marginBottom: '2rem',
      }}
    >
      {children}
    </div>
  );
};

export const CardSubDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        color: 'var(--on-background)',
        fontSize: '1',
        lineHeight: 'normal',
        wordSpacing: '0.5rem',
      }}
    >
      {children}
    </div>
  );
};
