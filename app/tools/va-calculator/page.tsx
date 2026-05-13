'use client';

import { useState } from 'react';
import Link from 'next/link';
export const metadata = {
  title: 'VA Funding Fee Calculator Eastern WA & North Idaho | Jessie Boggs',
  description: 'Calculate your VA funding fee and monthly payment. Free VA loan calculator for veterans in Eastern Washington and North Idaho. Jessie Boggs NMLS #2803455.',
};
export default function VACalculator() {
  const [purchasePrice, setPurchasePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(0);
  const [serviceType, setServiceType] = useState('regular');
  const [firstUse, setFirstUse] = useState(true);
  const [exempt, setExempt] = useState(false);
  const [interestRate, setInterestRate] = useState(5.963);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = purchasePrice - downPayment;
  const downPct = purchasePrice > 0 ? (downPayment / purchasePrice) * 100 : 0;

  const getFundingFee = () => {
    if (exempt) return 0;
    if (serviceType === 'reserves') {
      if (firstUse) return downPct >= 10 ? 0.014 : downPct >= 5 ? 0.0175 : 0.023;
      return downPct >= 10 ? 0.014 : downPct >= 5 ? 0.0175 : 0.036;
    }
    if (firstUse) return downPct >= 10 ? 0.014 : downPct >= 5 ? 0.015 : 0.023;
    return downPct >= 10 ? 0.014 : downPct >= 5 ? 0.015 : 0.036;
  };

  const fundingFeeRate = getFundingFee();
  const fundingFeeAmount = loanAmount * fundingFeeRate;
  const totalLoanWithFee = loanAmount + fundingFeeAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPI = totalLoanWithFee * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

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
            textTransform: 'uppercase' as const, color: '#3D6B5C',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#3D6B5C', display: 'block', flexShrink: 0 }} />
            VA LGY Guaranty Calculator
          </div>
          <h1 style={{
            fontSize: '44px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '12px',
          }}>
            Calculate your VA funding fee.
          </h1>
          <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px' }}>
            The VA funding fee varies based on your service type, down payment,
            and whether it is your first use of the benefit.
          </p>
        </div>
      </section>

      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '40px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

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
              Your VA Loan Details
            </h2>

            {/* Purchase price */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Purchase Price</label>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Math.max(100000, Math.min(1500000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="100000" max="1500000" step="5000"
                value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#3D6B5C' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$100K</span><span>$1.5M</span>
              </div>
            </div>

            {/* Down payment */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Down Payment (optional)</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, Math.min(purchasePrice * 0.2, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="0" max={purchasePrice * 0.2} step="1000"
                value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#3D6B5C' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$0 (Zero Down)</span>
                <span>{downPct.toFixed(1)}%</span>
              </div>
              <p style={{ fontSize: '11px', color: '#3D6B5C', fontWeight: 600, marginTop: '4px' }}>
                Putting 5% or 10% down reduces your funding fee
              </p>
            </div>

            {/* Service type */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Service Type</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { value: 'regular', label: 'Active/Veteran' },
                  { value: 'reserves', label: 'Reserves/Guard' },
                ].map((st) => (
                  <button key={st.value} onClick={() => setServiceType(st.value)} style={{
                    flex: 1, padding: '10px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: serviceType === st.value ? '#3D6B5C' : '#F2EBE0',
                    color: serviceType === st.value ? '#FFFCF8' : '#2A2118',
                    border: serviceType === st.value ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* First use */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Benefit Usage</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { value: true, label: 'First Use' },
                  { value: false, label: 'Subsequent Use' },
                ].map((fu) => (
                  <button key={String(fu.value)} onClick={() => setFirstUse(fu.value)} style={{
                    flex: 1, padding: '10px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: firstUse === fu.value ? '#3D6B5C' : '#F2EBE0',
                    color: firstUse === fu.value ? '#FFFCF8' : '#2A2118',
                    border: firstUse === fu.value ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {fu.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Exempt */}
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Funding Fee Exemption</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { value: false, label: 'Not Exempt' },
                  { value: true, label: 'Exempt (Disability)' },
                ].map((ex) => (
                  <button key={String(ex.value)} onClick={() => setExempt(ex.value)} style={{
                    flex: 1, padding: '10px', borderRadius: '6px', fontSize: '13px',
                    fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                    background: exempt === ex.value ? '#3D6B5C' : '#F2EBE0',
                    color: exempt === ex.value ? '#FFFCF8' : '#2A2118',
                    border: exempt === ex.value ? 'none' : '1px solid #E8DDD0',
                  }}>
                    {ex.label}
                  </button>
                ))}
              </div>
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
                style={{ width: '100%', accentColor: '#3D6B5C' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>3%</span><span>12%</span>
              </div>
            </div>

            {/* Loan term */}
            <div>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[15, 20, 30].map((yr) => (
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
          </div>

          {/* Right -- results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: '#2A2118', borderRadius: '16px', padding: '36px',
              textAlign: 'center' as const,
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(250,246,240,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
                Est. Monthly Payment (P&I)
              </div>
              <div style={{ fontSize: '52px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {fmtD(monthlyPI)}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.5)', marginTop: '8px' }}>
                Includes funding fee financed into loan
              </div>
            </div>

            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '28px',
              border: '1px solid #E8DDD0',
              borderTop: '4px solid #3D6B5C',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
                VA Loan Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Purchase Price', value: fmt(purchasePrice) },
                  { label: 'Down Payment', value: downPayment === 0 ? '$0 (Zero Down)' : fmt(downPayment) },
                  { label: 'Base Loan Amount', value: fmt(loanAmount) },
                  { label: 'Funding Fee Rate', value: exempt ? 'Exempt' : `${(fundingFeeRate * 100).toFixed(2)}%` },
                  { label: 'Funding Fee Amount', value: exempt ? '$0 (Exempt)' : fmt(fundingFeeAmount) },
                  { label: 'Total Loan with Fee', value: fmt(totalLoanWithFee) },
                  { label: 'No PMI Required', value: '✓ This is a VA benefit' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', gap: '12px' }}>
                    <span style={{ color: '#8C7B6E' }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: item.label === 'No PMI Required' ? '#3D6B5C' : '#2A2118', textAlign: 'right' as const }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#E4F0EC', borderRadius: '12px', padding: '20px',
              border: '1px solid rgba(61,107,92,0.2)',
            }}>
              <p style={{ fontSize: '13px', color: '#2E5245', lineHeight: 1.65, marginBottom: '14px' }}>
                Veterans with a service-connected disability rating may be exempt from the
                funding fee entirely. Let me verify your eligibility.
              </p>
              <Link href="/get-started/schedule" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#3D6B5C', color: '#FFFCF8',
                fontSize: '13px', fontWeight: 700, padding: '10px 20px',
                borderRadius: '6px', textDecoration: 'none',
              }}>Schedule a Call</Link>
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
  fontSize: '13px', fontWeight: 700, color: '#3D6B5C',
  background: '#FAF6F0', outline: 'none',
  fontFamily: 'inherit', textAlign: 'right',
};