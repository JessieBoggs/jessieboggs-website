'use client';

import { useState } from 'react';
import Link from 'next/link';
export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(6.46);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyIncome = annualIncome / 12;
  const maxMonthlyPayment = monthlyIncome * 0.43 - monthlyDebts;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const maxLoan = maxMonthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
  const maxHomePrice = maxLoan + downPayment;
  const conservativePrice = maxHomePrice * 0.8;

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

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
            Affordability Calculator
          </div>
          <h1 style={{
            fontSize: '44px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '12px',
          }}>
            How much home can you afford?
          </h1>
          <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px' }}>
            Enter your income, debts, and down payment to get a real estimate
            of your purchase price range. Results are estimates based on standard
            debt-to-income guidelines.
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
              Your Financial Picture
            </h2>

            {/* Annual Income */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Annual Household Income</label>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Math.max(30000, Math.min(1000000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="30000" max="1000000" step="5000"
                value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$30K</span><span>$1M</span>
              </div>
            </div>

            {/* Monthly Debts */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Monthly Debt Payments</label>
                <input
                  type="number"
                  value={monthlyDebts}
                  onChange={(e) => setMonthlyDebts(Math.max(0, Math.min(25000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="0" max="25000" step="100"
                value={monthlyDebts} onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$0</span><span>$25,000</span>
              </div>
              <p style={{ fontSize: '11px', color: '#8C7B6E', marginTop: '4px', lineHeight: 1.5 }}>
                Include car payments, student loans, credit cards, etc.
              </p>
            </div>

            {/* Down Payment */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={labelStyle}>Down Payment Available</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, Math.min(500000, Number(e.target.value))))}
                  style={numInputStyle}
                />
              </div>
              <input type="range" min="0" max="500000" step="5000"
                value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#B85C38' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8C7B6E', marginTop: '4px' }}>
                <span>$0</span><span>$500K</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div style={{ marginBottom: '24px' }}>
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

            {/* Loan Term */}
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
                Maximum Purchase Price
              </div>
              <div style={{ fontSize: '52px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {fmt(maxHomePrice)}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.5)', marginTop: '8px' }}>
                Based on 43% debt-to-income ratio
              </div>
            </div>

            <div style={{
              background: '#3D6B5C', borderRadius: '16px', padding: '28px',
              textAlign: 'center' as const,
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(228,240,236,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
                Conservative Recommendation
              </div>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.03em', lineHeight: 1 }}>
                {fmt(conservativePrice)}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(228,240,236,0.65)', marginTop: '8px' }}>
                Leaves room for taxes, insurance, and life
              </div>
            </div>

            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '28px',
              border: '1px solid #E8DDD0',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
                Your Numbers
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Monthly Income', value: fmt(monthlyIncome) },
                  { label: 'Monthly Debts', value: fmt(monthlyDebts) },
                  { label: 'Max Housing Payment', value: fmt(maxMonthlyPayment) },
                  { label: 'Down Payment', value: fmt(downPayment) },
                  { label: 'Max Loan Amount', value: fmt(maxLoan) },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#8C7B6E' }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: '#2A2118' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: '#F5E8E1', borderRadius: '12px', padding: '20px',
              border: '1px solid rgba(184,92,56,0.2)',
            }}>
              <p style={{ fontSize: '13px', color: '#8F4228', lineHeight: 1.65, marginBottom: '14px' }}>
                These are estimates based on standard guidelines.
                Your actual qualification depends on credit score, loan type, and other factors.
                Let me run your real numbers.
              </p>
              <Link href="/get-started/pre-approval" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '13px', fontWeight: 700, padding: '10px 20px',
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