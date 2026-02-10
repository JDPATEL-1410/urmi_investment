declare module 'jspdf-autotable' {
    import { jsPDF } from 'jspdf';

    interface UserOptions {
        head?: any[][];
        body?: any[][];
        foot?: any[][];
        startY?: number;
        margin?: number | { top?: number; right?: number; bottom?: number; left?: number };
        theme?: 'striped' | 'grid' | 'plain';
        headStyles?: any;
        bodyStyles?: any;
        footStyles?: any;
        alternateRowStyles?: any;
        columnStyles?: { [key: number]: any };
        styles?: any;
        showHead?: 'everyPage' | 'firstPage' | 'never';
        showFoot?: 'everyPage' | 'lastPage' | 'never';
        didDrawPage?: (data: any) => void;
        didDrawCell?: (data: any) => void;
        willDrawCell?: (data: any) => void;
        didParseCell?: (data: any) => void;
        tableWidth?: 'auto' | 'wrap' | number;
        pageBreak?: 'auto' | 'avoid' | 'always';
        rowPageBreak?: 'auto' | 'avoid';
        tableLineColor?: number | number[];
        tableLineWidth?: number;
    }

    export default function autoTable(doc: jsPDF, options: UserOptions): void;
}
