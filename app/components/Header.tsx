'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ── TIER 1: LOGO BAR ── */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #E8DDD0',
        padding: '14px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src="/MeEdgeWebLogo.png"
          alt="Jessie Boggs — Mortgage Loan Strategist | Powered by Edge Home Finance"
          width={700}
          height={150}
          style={{
            width: 'auto',
            height: '130px',
            maxWidth: '100%',
            display: 'block',
          }}
          priority
        />
      </div>

      {/* ── TIER 2: NAV BAR ── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(42,33,24,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '2px solid #B85C38',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '52px',
        boxShadow: '0 4px 20px rgba(42,33,24,0.25)',
      }}>

        {/* Desktop nav links -- hidden on mobile */}
        <ul style={{
          display: 'flex',
          gap: '28px',
          alignItems: 'center',
          listStyle: 'none',
          margin: '0 auto',
        }}>
          {[
            { href: '/loan-types', label: 'Loan Types' },
            { href: '/buyers', label: 'For Buyers' },
            { href: '/for-agents', label: 'For Agents' },
            { href: '/tools', label: 'Tools' },
            { href: '/resources', label: 'Resources' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <li key={link.href} className="desktop-only">
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
          <li className="desktop-only">
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
              whiteSpace: 'nowrap' as const,
            }}>
              Get Pre-Approved
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger -- hidden on desktop */}
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          className="mobile-only"
          style={{
            flexDirection: 'column',
            gap: '5px',
            cursor: 'pointer',
            padding: '4px',
            background: 'none',
            border: 'none',
            marginLeft: 'auto',
          }}
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#D4C4B0', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#D4C4B0', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#D4C4B0', borderRadius: '2px' }} />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {drawerOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#2A2118',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}>
          {/* Logo in drawer */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ffffff',
            padding: '8px 20px',
            borderRadius: '8px',
            whiteSpace: 'nowrap' as const,
          }}>
            <Image
              src="/MeEdgeWebLogo.png"
              alt="Jessie Boggs"
              width={300}
              height={65}
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={() => setDrawerOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              fontSize: '32px',
              color: '#D4C4B0',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              lineHeight: 1,
            }}
          >
            &times;
          </button>

          {/* Drawer links */}
          {[
            { href: '/loan-types', label: 'Loan Types' },
            { href: '/buyers', label: 'For Buyers' },
            { href: '/for-agents', label: 'For Agents' },
            { href: '/tools', label: 'Tools' },
            { href: '/resources', label: 'Resources' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#D4C4B0',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                padding: '16px 32px',
                width: '100%',
                textAlign: 'center' as const,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/get-started/pre-approval"
            onClick={() => setDrawerOpen(false)}
            style={{
              background: '#B85C38',
              color: '#FFFCF8',
              fontSize: '16px',
              fontWeight: 700,
              padding: '16px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              margin: '20px 32px 0',
              width: 'calc(100% - 64px)',
              textAlign: 'center' as const,
              boxShadow: '0 4px 16px rgba(184,92,56,0.3)',
            }}
          >
            Get Pre-Approved
          </Link>
        </div>
      )}

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        .desktop-only { display: flex !important; }
        .mobile-only  { display: none !important; }

        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex !important; }
        }
      `}</style>
    </>
  );
}