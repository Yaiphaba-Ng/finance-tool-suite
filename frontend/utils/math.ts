/**
 * App Mathematical Utils
 * Core formulas for fintech calculations
 */

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * SIP Calculator
 * FV = P * [((1 + i)^n - 1) / i] * (1 + i)
 */
export const calculateSIP = (monthlyP: number, annualRate: number, years: number) => {
  const i = annualRate / 12 / 100;
  const n = years * 12;
  const fv = monthlyP * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  const invested = monthlyP * n;
  return {
    maturityValue: Math.round(fv),
    totalInvested: invested,
    estReturns: Math.round(fv - invested),
  };
};

/**
 * Lumpsum Calculator
 * FV = P * (1 + r)^t
 */
export const calculateLumpsum = (principal: number, annualRate: number, years: number) => {
  const r = annualRate / 100;
  const fv = principal * Math.pow(1 + r, years);
  const invested = principal;
  return {
    maturityValue: Math.round(fv),
    totalInvested: invested,
    estReturns: Math.round(fv - invested),
  };
};

/**
 * SIP Step-Up Calculator
 */
export const calculateStepUpSIP = (
  initialP: number, 
  annualRate: number, 
  years: number, 
  stepUpPercent: number
) => {
  const r = annualRate / 100;
  const i = r / 12;
  let totalFV = 0;
  let currentMonthlyP = initialP;
  let totalInvested = 0;

  for (let year = 1; year <= years; year++) {
    const monthsLeft = (years - year + 1) * 12;
    // Calculation for this year's 12 installments
    for (let month = 1; month <= 12; month++) {
      const remainingMonths = (years - year) * 12 + (12 - month + 1);
      totalFV += currentMonthlyP * Math.pow(1 + i, remainingMonths);
      totalInvested += currentMonthlyP;
    }
    currentMonthlyP = currentMonthlyP * (1 + stepUpPercent / 100);
  }

  return {
    maturityValue: Math.round(totalFV),
    totalInvested: totalInvested,
    estReturns: Math.round(totalFV - totalInvested),
  };
};

/**
 * SIP Planner (Goal-based)
 * Finds required monthly P
 */
export const calculateRequiredSIP = (
  targetFV: number, 
  annualRate: number, 
  years: number, 
  inflation: number = 0
) => {
  const adjustedTarget = targetFV * Math.pow(1 + inflation / 100, years);
  const i = annualRate / 12 / 100;
  const n = years * 12;
  const requiredP = adjustedTarget / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  
  return {
    requiredMonthlySIP: Math.round(requiredP),
    targetInflationAdjusted: Math.round(adjustedTarget),
  };
};
