'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #E8DDD0',
        padding: '16px 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src="/MeEdgeWebLogo.png"
          alt="Jessie Boggs — Mortgage Loan Strategist"
          width={600}
          height={129}
          style={{ width: 'auto', height: '90px', maxWidth: '100%' }}
          priority
        />
      </div>

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(42,33,24,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '2px solid #B85C38',
        padding: '0 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '52px',
        boxShadow: '0 4px 20px rgba(42,33,24,0.25)',
      }}>
        <ul style={{
          display: 'flex',
          gap: '28px',
          alignItems: 'center',
          listStyle: 'none',
        }}>
          {[
            { href: '/loan-types', label: 'Loan Types' },
            { href: '/buyers', label: 'For Buyers' },
            { href: '/for-agents', label: 'For Agents' },
            { href: '/tools', label: 'Tools' },
            { href: '/resources', label: 'Resources' },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#D4C4B0',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/get-started/pre-approval" style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#FFFCF8',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              background: '#B85C38',
              padding: '8px 20px',
              borderRadius: '5px',
              boxShadow: '0 3px 12px rgba(184,92,56,0.35)',
            }}>
              Get Pre-Approved
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}