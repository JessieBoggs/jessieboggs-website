'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MortgageCalculator() {
  const [loanType, setLoanType] = useState('conventional');
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.46);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [insurance, setInsurance] = useState(1200);

  const defaultRates: Record<string, number> = {
    conventional: 6.46,
    fha: 6.125,
    va: 5.963,
    usda: 6.125,
    jumbo: 6.506,
  };

  const handleLoanTypeChange = (type: string) => {
    setLoanType(type);
    setInterestRate(defaultRates[type]);
    if (type === 'fha') setDownPayment(3.5);
    else if (type === 'conventional') setDownPayment(20);
  };

  const downPaymentAmount = (homePrice * downPayment) / 100;
  const loanAmount = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  const monthlyTax = (homePrice * propertyTax / 100) / 12;
  const monthlyInsurance = insurance / 12;
  const pmi = loanType === 'conventional' && downPayment < 20 ? (loanAmount * 0.008) / 12 : 0;
  const mip = loanType === 'fha' ? (loanAmount * 0.0055) / 12 : 0;
  const usdaFee = loanType === 'usda' ? (loanAmount * 0.0035) / 12 : 0;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + pmi + mip + usdaFee;

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

  const loanTypes = [
    { value: 'conventional', label: 'Conventional' },
    { value: 'fha', label: 'FHA' },
    { value: 'va', label: 'VA' },
    { value: 'usda', label: 'USDA' },
    { value: 'jumbo', label: 'Jumbo' },
  ];

  const minDown = loanType === 'fha' ? 3.5 : 0;

  return (
    <>
      {/* ── HERO -- heading left, rates widget right ── */}
      <section style={{
        background: '#F2EBE0', padding: '52px 52px 0',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="calc-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
          paddingBottom: '52px',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Mortgage Calculator
            </div>
            <h1 style={{
              fontSize: '44px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '16px',
            }}>
              Calculate your<br />
              <span style={{ color: '#B85C38' }}>monthly payment.</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '24px' }}>
              Adjust the inputs below to estimate your monthly payment for any loan type.
              The interest rate defaults to today&rsquo;s current average for each program.
              Results are estimates. Contact me for exact numbers.
            </p>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '13px 24px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Get Pre-Approved</Link>
          </div>

          {/* Right -- lender collage */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '32px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            borderTop: '4px solid #3D6B5C',
          }}>
            {/* Headline */}
            <div style={{ textAlign: 'center' as const, marginBottom: '24px' }}>
              <div style={{
                fontSize: '48px', fontWeight: 800, color: '#2A2118',
                letterSpacing: '-0.03em', lineHeight: 1,
              }}>
                150<span style={{ color: '#B85C38' }}>+</span>
              </div>
              <div style={{
                fontSize: '13px', fontWeight: 700, color: '#2A2118',
                letterSpacing: '0.06em', textTransform: 'uppercase' as const,
                marginTop: '4px',
              }}>
                Lender Partners
              </div>
              <p style={{
                fontSize: '12px', color: '#8C7B6E', lineHeight: 1.6,
                marginTop: '8px',
              }}>
                Access to over 150 lenders means I can shop your loan
                across the market and find you the best rate and product for your situation.
              </p>
            </div>

            {/* Logo grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '20px',
            }}>
              {[
                { src: '/UWMLogo.png', alt: 'United Wholesale Mortgage' },
                { src: '/PennyMacLogo.png', alt: 'PennyMac' },
                { src: '/NewrezLogo.png', alt: 'Newrez' },
                { src: '/DeepHavenLogo.png', alt: 'Deephaven' },
                { src: '/AngelOakLogo.png', alt: 'Angel Oak Mortgage Solutions' },
                { src: '/WindsorLogo.png', alt: 'Windsor Mortgage' },
              ].map((logo) => (
                <div key={logo.alt} style={{
                  background: '#FAF6F0',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #E8DDD0',
                  height: '56px',
                }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      maxHeight: '50px',
                      maxWidth: '100%',
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{
              background: '#F2EBE0', borderRadius: '8px', padding: '12px 16px',
              textAlign: 'center' as const,
            }}>
              <p style={{ fontSize: '12px', color: '#4A3728', lineHeight: 1.6 }}>
                I shop your loan across my full lender network so you get
                the most competitive product and rate available for your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '40px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── CALCULATOR ── */}
      <section style={{ background: '#FAF6F0', padding: '52px 52px 80px' }}>
        <div className="calc-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'flex-start',
        }}>
          {/* Left -- inputs */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '36px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '24px' }}>
              Loan Details
            </h2>

            {/* Loan type tabs */}
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Loan Type</label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
                {loanTypes.map((lt) => (
                  <button key={lt.value} onClick={() => handleLoanTypeChange(lt.value)} style={{
                    padding: '8px 16px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: loanType === lt.value ? '#B85C38' : '#F2EBE0',
                    color: loanType === lt.value ? '#FFFCF8' : '#2A2118',
                    border: loanType === lt.value ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {lt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Home price */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Home Price</label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Math.max(100000, Number(e.target.value)))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="100000" max="1500000" step="5000"
                value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$100K</span><span>$1.5M</span>
              </div>
            </div>

            {/* Down payment -- available for all loan types */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Down Payment %</label>
                <input
                  type="number"
                  value={downPayment}
                  min={minDown}
                  max={40}
                  step={0.5}
                  onChange={(e) => setDownPayment(Math.max(minDown, Math.min(40, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min={minDown} max="40" step="0.5"
                value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>{loanType === 'fha' ? '3.5%' : '0% (Zero Down)'}</span>
                <span>Down: {fmt(downPaymentAmount)}</span>
              </div>
              {(loanType === 'va' || loanType === 'usda') && downPayment === 0 && (
                <div style={{ fontSize: '11px', color: '#3D6B5C', fontWeight: 600, marginTop: '4px' }}>
                  ✓ {loanType === 'va' ? 'VA' : 'USDA'} eligible for zero down
                </div>
              )}
            </div>

            {/* Interest rate */}
            <div style={{ marginBottom: '20px' }}>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>3%</span><span>12%</span>
              </div>
            </div>

            {/* Loan term */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[10, 15, 20, 30].map((yr) => (
                  <button key={yr} onClick={() => setLoanTerm(yr)} style={{
                    flex: 1, padding: '8px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: loanTerm === yr ? '#3D6B5C' : '#F2EBE0',
                    color: loanTerm === yr ? '#FFFCF8' : '#2A2118',
                    border: loanTerm === yr ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {yr}yr
                  </button>
                ))}
              </div>
            </div>

            {/* Property tax */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Property Tax %/yr</label>
                <input
                  type="number"
                  value={propertyTax}
                  min={0.5}
                  max={3}
                  step={0.1}
                  onChange={(e) => setPropertyTax(Math.max(0.5, Math.min(3, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="0.5" max="3" step="0.1"
                value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
            </div>

            {/* Insurance */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Annual Insurance $</label>
                <input
                  type="number"
                  value={insurance}
                  min={600}
                  max={5000}
                  step={100}
                  onChange={(e) => setInsurance(Math.max(600, Math.min(5000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="600" max="5000" step="100"
                value={insurance} onChange={(e) => setInsurance(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
            </div>
          </div>

          {/* Right -- results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: '#2A2118', borderRadius: '16px', padding: '36px',
              textAlign: 'center' as const,
              boxShadow: '0 8px 40px rgba(42,33,24,0.2)',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(250,246,240,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
                Estimated Monthly Payment
              </div>
              <div style={{ fontSize: '56px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {fmtD(totalMonthly)}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.5)', marginTop: '8px' }}>
                {loanType.toUpperCase()} | {loanTerm}-year | {interestRate}% rate
              </div>
            </div>

            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '28px',
              border: '1px solid #E8DDD0',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118', marginBottom: '20px' }}>
                Payment Breakdown
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Principal & Interest', amount: monthlyPI, color: '#B85C38' },
                  { label: 'Property Tax', amount: monthlyTax, color: '#3D6B5C' },
                  { label: 'Home Insurance', amount: monthlyInsurance, color: '#A89278' },
                  ...(pmi > 0 ? [{ label: 'PMI', amount: pmi, color: '#8C7B6E' }] : []),
                  ...(mip > 0 ? [{ label: 'FHA MIP', amount: mip, color: '#8C7B6E' }] : []),
                  ...(usdaFee > 0 ? [{ label: 'USDA Fee', amount: usdaFee, color: '#8C7B6E' }] : []),
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: '#4A3728' }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118' }}>{fmtD(item.amount)}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid #E8DDD0', paddingTop: '12px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#2A2118' }}>Total</span>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#B85C38' }}>{fmtD(totalMonthly)}</span>
                </div>
              </div>
            </div>

            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '28px',
              border: '1px solid #E8DDD0',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
                Loan Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Home Price', value: fmt(homePrice) },
                  { label: 'Down Payment', value: downPayment === 0 ? '$0 (Zero Down)' : `${fmt(downPaymentAmount)} (${downPayment}%)` },
                  { label: 'Loan Amount', value: fmt(loanAmount) },
                  { label: 'Total Interest', value: fmt((monthlyPI * numPayments) - loanAmount) },
                  { label: 'Total Cost', value: fmt(monthlyPI * numPayments + downPaymentAmount) },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#8C7B6E' }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: '#2A2118' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#3D6B5C', borderRadius: '12px', padding: '24px',
              textAlign: 'center' as const,
            }}>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '16px' }}>
                Ready to get exact numbers based on your actual situation?
              </p>
              <Link href="/get-started/pre-approval" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#FFFCF8', color: '#2A2118',
                fontSize: '13px', fontWeight: 700, padding: '11px 22px',
                borderRadius: '6px', textDecoration: 'none',
              }}>Get Pre-Approved</Link>
            </div>
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