// Shared utility functions for all calculators

export interface YearlyBreakdown {
    year: number;
    investment: number;
    returns: number;
    total: number;
}

// Format currency in Indian format
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};

// Format number with Indian numbering system
export const formatNumber = (num: number): string => {
    return num.toLocaleString('en-IN');
};

// Calculate SIP returns with yearly breakdown
export const calculateSIPWithBreakdown = (
    monthlyInvestment: number,
    annualReturn: number,
    years: number
): { result: { invested: number; returns: number; total: number }; breakdown: YearlyBreakdown[] } => {
    const monthlyRate = annualReturn / 12 / 100;
    const breakdown: YearlyBreakdown[] = [];
    let totalInvested = 0;
    let currentValue = 0;

    for (let year = 1; year <= years; year++) {
        const monthsInYear = 12;

        for (let month = 1; month <= monthsInYear; month++) {
            totalInvested += monthlyInvestment;
            currentValue = (currentValue + monthlyInvestment) * (1 + monthlyRate);
        }

        breakdown.push({
            year,
            investment: totalInvested,
            returns: currentValue - totalInvested,
            total: currentValue
        });
    }

    return {
        result: {
            invested: Math.round(totalInvested),
            returns: Math.round(currentValue - totalInvested),
            total: Math.round(currentValue)
        },
        breakdown
    };
};

// Calculate lumpsum returns with yearly breakdown
export const calculateLumpsumWithBreakdown = (
    investment: number,
    annualReturn: number,
    years: number
): { result: { invested: number; returns: number; total: number }; breakdown: YearlyBreakdown[] } => {
    const breakdown: YearlyBreakdown[] = [];

    for (let year = 1; year <= years; year++) {
        const total = investment * Math.pow(1 + annualReturn / 100, year);
        breakdown.push({
            year,
            investment,
            returns: total - investment,
            total
        });
    }

    const finalTotal = investment * Math.pow(1 + annualReturn / 100, years);

    return {
        result: {
            invested: investment,
            returns: Math.round(finalTotal - investment),
            total: Math.round(finalTotal)
        },
        breakdown
    };
};

// Calculate EMI
export const calculateEMI = (
    principal: number,
    annualRate: number,
    years: number
): { monthlyEMI: number; totalInterest: number; totalAmount: number } => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
        monthlyEMI: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(totalAmount)
    };
};

// Calculate goal-based SIP
export const calculateGoalSIP = (
    goalAmount: number,
    years: number,
    annualReturn: number
): number => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = years * 12;
    const monthlySIP = (goalAmount * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(monthlySIP);
};

// Calculate future value with inflation
export const calculateFutureValue = (
    currentValue: number,
    inflationRate: number,
    years: number
): number => {
    return Math.round(currentValue * Math.pow(1 + inflationRate / 100, years));
};

// Generate share URL with parameters
export const generateShareURL = (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, String(value));
    });
    return `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
};

// Parse URL parameters
export const parseURLParams = (): Record<string, string> => {
    const params: Record<string, string> = {};
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
};

// Copy to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
};

// Validate number input
export const validateNumber = (
    value: number,
    min: number,
    max: number
): { isValid: boolean; message?: string } => {
    if (isNaN(value)) {
        return { isValid: false, message: 'Please enter a valid number' };
    }
    if (value < min) {
        return { isValid: false, message: `Value must be at least ${formatNumber(min)}` };
    }
    if (value > max) {
        return { isValid: false, message: `Value must not exceed ${formatNumber(max)}` };
    }
    return { isValid: true };
};

// Calculate CAGR (Compound Annual Growth Rate)
export const calculateCAGR = (
    initialValue: number,
    finalValue: number,
    years: number
): number => {
    return ((Math.pow(finalValue / initialValue, 1 / years) - 1) * 100);
};

// Calculate absolute returns
export const calculateAbsoluteReturns = (
    initialValue: number,
    finalValue: number
): number => {
    return ((finalValue - initialValue) / initialValue) * 100;
};
