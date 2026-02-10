export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: string;
    benefits: string[];
    whoShouldConsider: string[];
    faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
    {
        id: 'mutual-funds',
        title: 'Mutual Funds',
        shortDescription: 'Investing in mutual funds is a smart option to grow your wealth. Mutual funds pool money from various investors to buy a diversified portfolio of stocks, bonds, and other securities.',
        description: 'Investing in mutual funds is a smart option to grow your wealth. Mutual funds pool money from various investors to buy a diversified portfolio of stocks, bonds, and other securities. This diversified approach reduces risk and allows you to benefit from professional fund management.',
        icon: '📊',
        benefits: [
            'Professional fund management by experienced experts',
            'Diversification across multiple securities',
            'Liquidity and easy redemption',
            'Tax benefits under Section 80C',
            'Systematic Investment Plans (SIP) for disciplined investing'
        ],
        whoShouldConsider: [
            'Investors looking for long-term wealth creation',
            'Those seeking professional portfolio management',
            'Individuals wanting to start with small amounts',
            'Investors seeking diversification'
        ],
        faqs: [
            {
                question: 'What is a mutual fund?',
                answer: 'A mutual fund is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities, managed by professional fund managers.'
            },
            {
                question: 'What is SIP?',
                answer: 'SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in mutual funds, helping you build wealth through disciplined investing and rupee cost averaging.'
            },
            {
                question: 'Are mutual funds safe?',
                answer: 'Mutual funds are subject to market risks. However, diversification and professional management help mitigate risks. It\'s important to choose funds based on your risk profile and investment goals.'
            },
            {
                question: 'How are mutual funds taxed?',
                answer: 'Taxation depends on the type of fund and holding period. Equity funds held for more than 1 year qualify for long-term capital gains tax, while debt funds have different tax treatment.'
            }
        ]
    },
    {
        id: 'aif-pms',
        title: 'AIF / PMS',
        shortDescription: 'Explore the world of Alternate Investments – a pathway to diversify your portfolio and grow your wealth.',
        description: 'Alternative Investment Funds (AIF) and Portfolio Management Services (PMS) offer sophisticated investment solutions for high-net-worth individuals seeking customized portfolio management and access to alternative asset classes.',
        icon: '💼',
        benefits: [
            'Customized portfolio management',
            'Access to alternative asset classes',
            'Professional fund management',
            'Higher return potential',
            'Dedicated relationship manager'
        ],
        whoShouldConsider: [
            'High-net-worth individuals',
            'Investors seeking customized solutions',
            'Those looking for alternative investments',
            'Investors with higher risk appetite'
        ],
        faqs: [
            {
                question: 'What is AIF?',
                answer: 'Alternative Investment Funds are privately pooled investment vehicles that invest in alternative asset classes like private equity, hedge funds, real estate, and commodities.'
            },
            {
                question: 'What is PMS?',
                answer: 'Portfolio Management Service is a professional service where fund managers create and manage customized investment portfolios based on individual investor needs and risk profiles.'
            },
            {
                question: 'What is the minimum investment?',
                answer: 'AIF typically requires a minimum investment of ₹1 crore, while PMS usually requires ₹50 lakhs as per SEBI regulations.'
            },
            {
                question: 'How is it different from mutual funds?',
                answer: 'Unlike mutual funds, PMS offers customized portfolios tailored to individual needs, while AIFs provide access to alternative asset classes not available in traditional mutual funds.'
            }
        ]
    },
    {
        id: 'model-portfolio',
        title: 'Model Portfolio',
        shortDescription: 'A model portfolio is a pre-constructed investment portfolio designed to achieve specific financial goals, risk tolerance, and time horizons.',
        description: 'Model portfolios are expertly designed investment solutions that provide a ready-made asset allocation strategy aligned with your financial goals and risk profile.',
        icon: '📈',
        benefits: [
            'Expert-designed asset allocation',
            'Aligned with specific risk profiles',
            'Regular rebalancing and monitoring',
            'Transparent investment strategy',
            'Cost-effective solution'
        ],
        whoShouldConsider: [
            'Investors seeking ready-made solutions',
            'Those new to investing',
            'Investors wanting professional asset allocation',
            'Busy professionals'
        ],
        faqs: [
            {
                question: 'What is a model portfolio?',
                answer: 'A model portfolio is a pre-designed investment strategy with specific asset allocation created by experts to meet particular investment objectives and risk profiles.'
            },
            {
                question: 'How often is it rebalanced?',
                answer: 'Model portfolios are typically reviewed and rebalanced quarterly or when there are significant market movements to maintain the desired asset allocation.'
            },
            {
                question: 'Can I customize the model portfolio?',
                answer: 'While model portfolios are pre-designed, they can often be customized to some extent based on your specific requirements and constraints.'
            },
            {
                question: 'What returns can I expect?',
                answer: 'Returns depend on market conditions and the specific model portfolio chosen. Past performance is not indicative of future returns, and all investments are subject to market risks.'
            }
        ]
    },
    {
        id: 'equity',
        title: 'Equity (BSE, NSE)',
        shortDescription: 'Equity represents ownership in a company. When you purchase equity, or stocks, in a company, you are essentially buying a portion of that company.',
        description: 'Equity investing allows you to participate in the growth story of companies listed on stock exchanges. By owning shares, you become a part-owner of the company and benefit from its success.',
        icon: '📉',
        benefits: [
            'Potential for high returns',
            'Ownership in companies',
            'Dividend income',
            'Liquidity through stock exchanges',
            'Portfolio diversification'
        ],
        whoShouldConsider: [
            'Investors with higher risk appetite',
            'Those seeking long-term wealth creation',
            'Individuals who can research companies',
            'Investors comfortable with market volatility'
        ],
        faqs: [
            {
                question: 'What is equity investment?',
                answer: 'Equity investment involves buying shares of companies, making you a part-owner. You benefit from capital appreciation and dividends.'
            },
            {
                question: 'What is the difference between BSE and NSE?',
                answer: 'BSE (Bombay Stock Exchange) and NSE (National Stock Exchange) are India\'s two major stock exchanges. NSE is newer and uses electronic trading, while BSE is Asia\'s oldest exchange.'
            },
            {
                question: 'How do I start investing in stocks?',
                answer: 'You need a Demat account and trading account to start investing in stocks. We can help you open these accounts and guide you through the investment process.'
            },
            {
                question: 'What are the risks?',
                answer: 'Equity investments carry market risk, company-specific risks, and volatility. It\'s important to diversify and invest based on thorough research and your risk profile.'
            }
        ]
    },
    {
        id: 'demat',
        title: 'Demat Account',
        shortDescription: 'A Demat account, short for Dematerialized account, is an account that allows investors to hold their shares and securities in an electronic form instead of physical paper certificates.',
        description: 'A Demat account is essential for modern investing, allowing you to hold and trade securities electronically with ease, safety, and convenience.',
        icon: '🏦',
        benefits: [
            'Safe and secure holding of securities',
            'Easy transfer and trading',
            'No risk of physical certificate loss',
            'Reduced paperwork',
            'Quick settlement of trades'
        ],
        whoShouldConsider: [
            'Anyone wanting to invest in stocks',
            'Mutual fund investors',
            'Bond and debenture investors',
            'IPO applicants'
        ],
        faqs: [
            {
                question: 'What is a Demat account?',
                answer: 'A Demat account holds your shares and securities in electronic form, eliminating the need for physical certificates.'
            },
            {
                question: 'Is it mandatory?',
                answer: 'Yes, a Demat account is mandatory for trading in stocks and many other securities in India.'
            },
            {
                question: 'What are the charges?',
                answer: 'Demat accounts typically have account opening charges, annual maintenance charges, and transaction charges. We offer competitive rates.'
            },
            {
                question: 'How long does it take to open?',
                answer: 'With online KYC, a Demat account can be opened within 24-48 hours after document verification.'
            }
        ]
    },
    {
        id: 'insurance',
        title: 'Insurance',
        shortDescription: 'Life insurance is a vital financial tool that provides peace of mind and financial security for your family in your absence.',
        description: 'Life insurance is more than just a policy; it\'s a promise of protection and care for your loved ones, ensuring their financial security even in your absence.',
        icon: '🛡️',
        benefits: [
            'Financial protection for family',
            'Tax benefits under Section 80C and 10(10D)',
            'Wealth creation through investment plans',
            'Loan facility against policy',
            'Peace of mind'
        ],
        whoShouldConsider: [
            'Primary earning members of family',
            'Parents with dependents',
            'Those seeking tax benefits',
            'Individuals planning for retirement'
        ],
        faqs: [
            {
                question: 'What types of life insurance are available?',
                answer: 'Main types include Term Insurance, Endowment Plans, ULIPs, Whole Life Insurance, and Money Back Policies, each serving different needs.'
            },
            {
                question: 'How much coverage do I need?',
                answer: 'A general rule is 10-15 times your annual income, but it depends on your liabilities, dependents, and financial goals.'
            },
            {
                question: 'What are the tax benefits?',
                answer: 'Premiums paid are deductible under Section 80C (up to ₹1.5 lakh), and maturity proceeds are tax-free under Section 10(10D) subject to conditions.'
            },
            {
                question: 'Can I have multiple policies?',
                answer: 'Yes, you can have multiple life insurance policies from different insurers to ensure adequate coverage.'
            }
        ]
    },
    {
        id: 'fixed-bond',
        title: 'Fixed Deposit / Bonds',
        shortDescription: 'Fixed Deposits (FDs) are a reliable and straightforward investment option. They provide a safe harbour for your hard-earned money, offering guaranteed returns with minimal risk.',
        description: 'Fixed deposits and bonds offer stable, predictable returns with capital protection, making them ideal for conservative investors and those seeking regular income.',
        icon: '💰',
        benefits: [
            'Guaranteed returns',
            'Capital protection',
            'Regular interest income',
            'Flexible tenure options',
            'Loan facility against FD'
        ],
        whoShouldConsider: [
            'Conservative investors',
            'Those seeking stable returns',
            'Retirees needing regular income',
            'Investors wanting capital protection'
        ],
        faqs: [
            {
                question: 'What is a fixed deposit?',
                answer: 'A fixed deposit is a financial instrument where you deposit a lump sum for a fixed period at a predetermined interest rate.'
            },
            {
                question: 'Are FDs safe?',
                answer: 'Bank FDs are very safe as they are insured by DICGC up to ₹5 lakhs per depositor per bank. Company FDs carry higher risk but offer higher returns.'
            },
            {
                question: 'Can I withdraw before maturity?',
                answer: 'Yes, premature withdrawal is allowed but usually with a penalty and lower interest rate.'
            },
            {
                question: 'How are FDs taxed?',
                answer: 'Interest earned on FDs is taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 per year (₹50,000 for senior citizens).'
            }
        ]
    },
    {
        id: 'will-making',
        title: 'Will Making',
        shortDescription: 'A will is a legal document that outlines how a person\'s assets and estate should be distributed after their death.',
        description: 'Creating a will ensures your assets are distributed according to your wishes, providing clarity and preventing disputes among your loved ones.',
        icon: '📜',
        benefits: [
            'Control over asset distribution',
            'Prevents family disputes',
            'Appoint guardians for minors',
            'Reduce legal complications',
            'Peace of mind'
        ],
        whoShouldConsider: [
            'Anyone with assets to distribute',
            'Parents with minor children',
            'Business owners',
            'Those with specific distribution wishes'
        ],
        faqs: [
            {
                question: 'Why do I need a will?',
                answer: 'A will ensures your assets are distributed according to your wishes and helps avoid family disputes and legal complications after your demise.'
            },
            {
                question: 'Can I change my will?',
                answer: 'Yes, you can modify or revoke your will at any time during your lifetime as long as you are of sound mind.'
            },
            {
                question: 'Does a will need to be registered?',
                answer: 'Registration is not mandatory but is recommended as it provides legal validity and reduces chances of disputes.'
            },
            {
                question: 'What happens if I die without a will?',
                answer: 'Your assets will be distributed according to succession laws, which may not align with your wishes and can lead to family disputes.'
            }
        ]
    },
    {
        id: 'nps',
        title: 'National Pension Scheme (NPS)',
        shortDescription: 'The National Pension Scheme (NPS) stands as a cornerstone for a stable retirement, offering a structured approach to safeguard your financial future.',
        description: 'NPS is a government-backed retirement savings scheme that helps you build a substantial retirement corpus through systematic contributions and market-linked returns.',
        icon: '🏛️',
        benefits: [
            'Tax benefits under Section 80C and 80CCD',
            'Low-cost investment option',
            'Flexible contribution amounts',
            'Professional fund management',
            'Portable across jobs'
        ],
        whoShouldConsider: [
            'Salaried individuals',
            'Self-employed professionals',
            'Those seeking retirement planning',
            'Tax-saving investors'
        ],
        faqs: [
            {
                question: 'What is NPS?',
                answer: 'NPS is a voluntary retirement savings scheme designed to enable systematic savings during employment and provide pension after retirement.'
            },
            {
                question: 'What are the tax benefits?',
                answer: 'You can claim deduction up to ₹1.5 lakh under Section 80C and additional ₹50,000 under Section 80CCD(1B), totaling ₹2 lakh.'
            },
            {
                question: 'When can I withdraw?',
                answer: 'You can withdraw up to 60% of the corpus at retirement (age 60). The remaining 40% must be used to purchase an annuity for regular pension.'
            },
            {
                question: 'Can I exit before retirement?',
                answer: 'Premature exit is allowed after 3 years, but only 20% can be withdrawn as lump sum, and 80% must be used for annuity.'
            }
        ]
    },
    {
        id: 'p2p-lending',
        title: 'P2P Lending',
        shortDescription: 'Peer-to-peer (P2P) lending is a form of alternative finance that enables individuals or businesses to borrow and lend money directly from each other, bypassing traditional financial institutions like banks.',
        description: 'P2P lending platforms connect borrowers directly with lenders, offering potentially higher returns for lenders and competitive rates for borrowers.',
        icon: '🤝',
        benefits: [
            'Higher returns compared to traditional investments',
            'Diversification opportunity',
            'Direct lending to borrowers',
            'Flexible investment amounts',
            'Monthly income potential'
        ],
        whoShouldConsider: [
            'Investors seeking higher returns',
            'Those comfortable with credit risk',
            'Investors wanting alternative investments',
            'Those seeking monthly income'
        ],
        faqs: [
            {
                question: 'What is P2P lending?',
                answer: 'P2P lending is a method of debt financing that enables individuals to borrow and lend money without using an official financial institution as an intermediary.'
            },
            {
                question: 'What are the risks?',
                answer: 'Main risks include borrower default, platform risk, and lack of insurance. It\'s important to diversify across multiple borrowers.'
            },
            {
                question: 'What returns can I expect?',
                answer: 'Returns typically range from 12-18% annually, but they come with higher risk compared to traditional fixed-income investments.'
            },
            {
                question: 'Is it regulated?',
                answer: 'Yes, P2P lending platforms in India are regulated by the Reserve Bank of India (RBI) under specific guidelines.'
            }
        ]
    },
    {
        id: 'loan',
        title: 'Loan Against Securities',
        shortDescription: 'When you need quick access to funds without liquidating your investments, a Loan Against Securities is the smart choice. It allows you to leverage your holdings to meet your financial goals without selling them.',
        description: 'Loan against securities allows you to pledge your investments like shares, mutual funds, and bonds as collateral to get quick liquidity without selling your assets.',
        icon: '💳',
        benefits: [
            'Quick access to funds',
            'No need to sell investments',
            'Lower interest rates',
            'Flexible repayment options',
            'Continue earning returns on pledged securities'
        ],
        whoShouldConsider: [
            'Investors needing short-term funds',
            'Those wanting to avoid capital gains tax',
            'Individuals with substantial investment portfolio',
            'Business owners needing working capital'
        ],
        faqs: [
            {
                question: 'What securities can be pledged?',
                answer: 'You can pledge shares, mutual funds, bonds, insurance policies, and fixed deposits as collateral for loans.'
            },
            {
                question: 'How much can I borrow?',
                answer: 'Typically, you can borrow 50-80% of the value of pledged securities, depending on the type and quality of securities.'
            },
            {
                question: 'What is the interest rate?',
                answer: 'Interest rates are usually lower than personal loans, typically ranging from 9-14% per annum, depending on the lender and securities pledged.'
            },
            {
                question: 'What if the value of securities falls?',
                answer: 'If the value falls below a certain threshold, you may need to provide additional collateral or partially repay the loan to maintain the required margin.'
            }
        ]
    },
    {
        id: 'saving-current-account',
        title: 'Saving / Current Account',
        shortDescription: 'Open a savings or current account tailored to your banking needs with competitive interest rates and modern banking facilities.',
        description: 'We help you open savings and current accounts with leading banks, offering you the best features, interest rates, and banking services suited to your needs.',
        icon: '🏧',
        benefits: [
            'Competitive interest rates',
            'Modern digital banking facilities',
            'Zero or minimal balance requirements',
            'Debit card and net banking',
            'Easy fund transfers'
        ],
        whoShouldConsider: [
            'Individuals needing basic banking',
            'Business owners requiring current accounts',
            'Those seeking better interest rates',
            'Anyone wanting modern banking facilities'
        ],
        faqs: [
            {
                question: 'What is the difference between savings and current account?',
                answer: 'Savings accounts are for individuals to save money and earn interest, while current accounts are for businesses with no limit on transactions but typically no interest.'
            },
            {
                question: 'What documents are required?',
                answer: 'You need identity proof (Aadhaar, PAN), address proof, photographs, and initial deposit as per bank requirements.'
            },
            {
                question: 'Is there a minimum balance requirement?',
                answer: 'It varies by bank and account type. We can help you find accounts with zero or low minimum balance requirements.'
            },
            {
                question: 'How long does it take to open an account?',
                answer: 'With digital KYC, accounts can be opened within 24-48 hours after document verification.'
            }
        ]
    }
];
