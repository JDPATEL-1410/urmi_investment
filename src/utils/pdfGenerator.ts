import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import logoImage from '../assets/logo.png';

interface PDFInput {
    label: string;
    value: string;
}

interface PDFResult {
    label: string;
    value: string;
    highlight?: boolean;
}

interface PDFBreakdown {
    headers: string[];
    rows: (string | number)[][];
}

interface PDFOptions {
    title: string;
    subtitle?: string;
    calculatorType: string;
    inputs: PDFInput[];
    results: PDFResult[];
    breakdown?: PDFBreakdown;
    footer?: string;
}

/**
 * Replaces the Rupee symbol with 'Rs.' for PDF compatibility
 */
const sanitizeString = (str: string): string => {
    return str.replace(/₹/g, 'Rs.');
};

/**
 * Generates a professional PDF report for calculator results
 * @param options - Configuration options for PDF generation
 */
export const generateCalculatorPDF = (options: PDFOptions): void => {
    const { title, subtitle, calculatorType, inputs, results, breakdown, footer } = options;

    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    let yPosition = margin;

    // Brand colors
    const primaryColor: [number, number, number] = [37, 99, 235]; // Blue #2563eb
    const secondaryColor: [number, number, number] = [30, 64, 175]; // Darker blue #1e40af
    const textColor: [number, number, number] = [31, 41, 55]; // Dark gray #1f2937
    const accentGreen: [number, number, number] = [34, 197, 94]; // Green #22c55e

    // Add header with branding
    const addHeader = () => {
        // Header background - White
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, 40, 'F');

        // Add logo image (maintaining aspect ratio)
        try {
            // Logo dimensions - maintaining proper aspect ratio for horizontal logo
            const logoWidth = 50;   // Width for horizontal logo with text
            const logoHeight = 15;  // Height to maintain aspect ratio (~3.3:1)
            const logoX = margin;
            const logoY = 12.5;     // Centered vertically in 40mm header
            pdf.addImage(logoImage, 'PNG', logoX, logoY, logoWidth, logoHeight);
        } catch (error) {
            console.error('Error adding logo to PDF:', error);
        }

        // Report date - Dark gray text
        const currentDate = new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        pdf.setFontSize(9);
        pdf.setTextColor(...textColor);
        pdf.text(currentDate, pageWidth - margin, 20, { align: 'right' });

        // Add subtle bottom border
        pdf.setDrawColor(220, 220, 220);
        pdf.setLineWidth(0.5);
        pdf.line(0, 40, pageWidth, 40);

        yPosition = 50;
    };

    // Add footer with page numbers
    const addFooter = (pageNumber: number) => {
        const footerY = pageHeight - 10;

        pdf.setFontSize(8);
        pdf.setTextColor(128, 128, 128);
        pdf.setFont('helvetica', 'normal');

        // Footer text
        const footerText = footer || 'This is a computer-generated report. For personalized advice, please consult with our financial advisors.';
        const footerLines = pdf.splitTextToSize(footerText, pageWidth - 2 * margin);
        pdf.text(footerLines, margin, footerY - 10);

        // Page number
        pdf.text(`Page ${pageNumber}`, pageWidth / 2, footerY, { align: 'center' });

        // Website
        pdf.text('www.urmiinvestment.com', pageWidth - margin, footerY, { align: 'right' });
    };

    // Add initial header
    addHeader();

    // Add title
    pdf.setTextColor(...textColor);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(sanitizeString(title), margin, yPosition);
    yPosition += 10;

    // Add subtitle if provided
    if (subtitle) {
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 100, 100);
        pdf.text(sanitizeString(subtitle), margin, yPosition);
        yPosition += 8;
    }

    yPosition += 5;

    // Add Input Parameters Section
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...secondaryColor);
    pdf.text('Input Parameters', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...textColor);

    inputs.forEach((input) => {
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${input.label}:`, margin, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(sanitizeString(input.value), pageWidth - margin, yPosition, { align: 'right' });
        yPosition += 7;
    });

    yPosition += 5;

    // Add separator line
    pdf.setDrawColor(200, 200, 200);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Add Results Section
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...secondaryColor);
    pdf.text('Calculation Results', margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(11);
    pdf.setTextColor(...textColor);

    results.forEach((result) => {
        if (result.highlight) {
            // Highlighted result (Total Value)
            pdf.setFillColor(240, 240, 240);
            pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 10, 'F');
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(13);
            pdf.text(`${result.label}:`, margin + 2, yPosition);
            pdf.setTextColor(...accentGreen);
            pdf.text(sanitizeString(result.value), pageWidth - margin - 2, yPosition, { align: 'right' });
            pdf.setTextColor(...textColor);
            pdf.setFontSize(11);
        } else {
            pdf.setFont('helvetica', 'bold');
            pdf.text(`${result.label}:`, margin, yPosition);
            pdf.setFont('helvetica', 'normal');
            pdf.text(sanitizeString(result.value), pageWidth - margin, yPosition, { align: 'right' });
        }
        yPosition += 8;
    });

    yPosition += 5;

    // Add breakdown table if provided
    if (breakdown && breakdown.rows.length > 0) {
        // Add separator line
        pdf.setDrawColor(200, 200, 200);
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 10;

        // Add Breakdown Section Title
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(...secondaryColor);
        pdf.text('Year-by-Year Breakdown', margin, yPosition);
        yPosition += 8;

        // Format the breakdown data for the table
        const tableData = breakdown.rows.map(row =>
            row.map(cell => {
                if (typeof cell === 'number') {
                    // Use Rs. instead of ₹ for better PDF compatibility
                    const formatted = new Intl.NumberFormat('en-IN', {
                        maximumFractionDigits: 0,
                    }).format(cell);
                    return `Rs. ${formatted}`;
                }
                return sanitizeString(cell.toString());
            })
        );

        // Add table using autoTable
        autoTable(pdf, {
            head: [breakdown.headers],
            body: tableData,
            startY: yPosition,
            margin: { left: margin, right: margin },
            theme: 'striped',
            headStyles: {
                fillColor: primaryColor,
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center',
            },
            bodyStyles: {
                textColor: textColor,
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
            },
            columnStyles: {
                0: { halign: 'center' },
                1: { halign: 'right' },
                2: { halign: 'right' },
                3: { halign: 'right', fontStyle: 'bold' },
            },
        });
    }

    // Add footer to all pages
    const totalPages = (pdf as any).internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        addFooter(i);
    }

    // Save the PDF
    const fileName = `${calculatorType}_Report_${new Date().getTime()}.pdf`;
    pdf.save(fileName);
};

/**
 * Formats a number as Indian currency (using Rs. for PDF compatibility)
 */
export const formatCurrency = (amount: number): string => {
    const formatted = new Intl.NumberFormat('en-IN', {
        maximumFractionDigits: 0,
    }).format(amount);
    return `Rs. ${formatted}`;
};

/**
 * Formats a number with Indian number system (lakhs, crores)
 */
export const formatIndianNumber = (num: number): string => {
    return new Intl.NumberFormat('en-IN').format(num);
};
