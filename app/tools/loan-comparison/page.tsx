'use client';

import { useState } from 'react';
import Link from 'next/link';
export default function LoanComparison() {
  const [homePrice, setHomePrice] = useState(350000);
  const [interestRate, setInterestRate] = useState(6.46);
  const [loanTerm, setLoanTerm] = useState(30);

  const calcPayment = (loan: number, rate: number, term: number) => {
    const mr = rate / 100 / 12;
    const n = term * 12;
    return loan * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1);
  };

  const loans = [
    { name: 'Conventional 20%', color: '#B85C38', down: homePrice * 0.2, downPct: '20%', tag: 'No PMI', loanAmt: homePrice * 0.8, extra: 0, extraLabel: '', link: '/loan-types/conventional' },
    { name: 'Conventional 5%', color: '#CC6E49', down: homePrice * 0.05, downPct: '5%', tag: 'PMI Required', loanAmt: homePrice * 0.95, extra: (homePrice * 0.95 * 0.008) / 12, extraLabel: 'PMI', link: '/loan-types/conventional' },
    { name: 'FHA 3.5%', color: '#A89278', down: homePrice * 0.035, downPct: '3.5%', tag: 'MIP For Life', loanAmt: homePrice * 0.965 * 1.0175, extra: (homePrice * 0.965 * 0.0055) / 12, extraLabel: 'MIP', link: '/loan-types/fha-loans' },
    { name: 'VA 0%', color: '#3D6B5C', down: 0, downPct: '0%', tag: 'No PMI Ever', loanAmt: homePrice * 1.023, extra: 0, extraLabel: '', link: '/loan-types/va-loans' },
    { name: 'USDA 0%', color: '#4E8572', down: 0, downPct: '0%', tag: 'Rural Eligible', loanAmt: homePrice * 1.01, extra: (homePrice * 0.0035) / 12, extraLabel: 'USDA Fee', link: '/loan-types/usda-rural' },
  ];

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

  return (
    <>
      <section style={{
        background: '#F2EBE0', padding: '52px 52px 0',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            Loan Comparison Tool
          </div>
          <h1 style={{
            fontSize: '44px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '12px',
          }}>
            Compare loan types side by side.
          </h1>
          <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px' }}>
            See how different loan programs compare on the same purchase price.
            Adjust the inputs and watch the numbers change in real time.
          </p>
        </div>
      </section>

      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '40px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      <section style={{ background: '#FAF6F0', padding: '52px 52px 80px' }}>
        {/* Controls */}
        <div style={{
          background: '#FFFCF8', borderRadius: '16px', padding: '32px',
          border: '1px solid #E8DDD0', marginBottom: '32px',
          boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
        }}>
          <div className="comparison-controls" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px', alignItems: 'flex-end',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Home Price</label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Math.max(100000, Math.min(1000000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="100000" max="1000000" step="5000"
                value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Interest Rate %</label>
                <input
                  type="number"
                  value={interestRate}
                  min={3}
                  max={12}
                  step={0.125}
                  onChange={(e) => setInterestRate(Math.max(3, Math.min(12, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="3" max="12" step="0.125"
                value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
            </div>
            <div>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[15, 20, 30].map((yr) => (
                  <button key={yr} onClick={() => setLoanTerm(yr)} style={{
                    flex: 1, padding: '8px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: loanTerm === yr ? '#B85C38' : '#F2EBE0',
                    color: loanTerm === yr ? '#FFFCF8' : '#2A2118',
                    border: loanTerm === yr ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {yr}yr
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="comparison-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '14px', marginBottom: '32px',
        }}>
          {loans.map((loan) => {
            const pi = calcPayment(loan.loanAmt, interestRate, loanTerm);
            const total = pi + loan.extra;
            return (
              <Link key={loan.name} href={loan.link} style={{
                background: '#FFFCF8', borderRadius: '12px', padding: '22px 18px',
                border: '1px solid #E8DDD0', borderTop: `4px solid ${loan.color}`,
                textDecoration: 'none', color: 'inherit', display: 'block',
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: loan.color, marginBottom: '6px', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  {loan.name}
                </div>
                <div style={{
                  fontSize: '9px', fontWeight: 700, color: '#FFFCF8',
                  background: loan.color, padding: '2px 7px', borderRadius: '4px',
                  display: 'inline-block', marginBottom: '14px', letterSpacing: '0.08em',
                }}>
                  {loan.tag}
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                  {fmtD(total)}
                </div>
                <div style={{ fontSize: '10px', color: '#8C7B6E', marginBottom: '14px' }}>per month</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                    <span style={{ color: '#8C7B6E' }}>Down</span>
                    <span style={{ fontWeight: 700, color: '#2A2118' }}>{loan.downPct}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                    <span style={{ color: '#8C7B6E' }}>Amount</span>
                    <span style={{ fontWeight: 700, color: '#2A2118' }}>{fmt(loan.down)}</span>
                  </div>
                  {loan.extra > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                      <span style={{ color: '#8C7B6E' }}>{loan.extraLabel}</span>
                      <span style={{ fontWeight: 700, color: '#8C7B6E' }}>{fmtD(loan.extra)}</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{
          background: '#2A2118', borderRadius: '16px', padding: '36px',
          textAlign: 'center' as const,
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.02em', marginBottom: '10px' }}>
            Not sure which is right for you?
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(250,246,240,0.72)', lineHeight: 1.7, marginBottom: '24px' }}>
            Let me run your actual numbers based on your credit, income, and situation.
            The right loan is not always the one with the lowest payment.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '13px', fontWeight: 700, padding: '12px 24px',
              borderRadius: '6px', textDecoration: 'none',
            }}>Get Pre-Approved</Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#D4C4B0',
              fontSize: '13px', fontWeight: 700, padding: '11px 24px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
            }}>Schedule a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px', fontWeight: 700, color: '#2A2118',
  letterSpacing: '0.07em', textTransform: 'uppercase',
  display: 'block',
};

const numInputStyle: React.CSSProperties = {
  width: '90px', padding: '5px 8px',
  border: '1.5px solid #E8DDD0', borderRadius: '6px',
  fontSize: '13px', fontWeight: 700, color: '#B85C38',
  background: '#FAF6F0', outline: 'none',
  fontFamily: 'inherit', textAlign: 'right',
};