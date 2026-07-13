/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.ejs",
        "./public/**/*.html",
        "./public/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'health-good': '#10b981',
                'health-warning': '#f59e0b',
                'health-danger': '#ef4444',
                'bio-safe': '#059669',
                'deep-emerald': '#065f46',
                'brand': {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },
                'gold': {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
                'surface-dark': '#0f172a',
                'surface-light': '#f0fdf4',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
                'slide-up': 'slideUp 0.4s ease both',
                'fade-in': 'fadeIn 0.5s ease both',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 6px rgba(16, 185, 129, 0.35)' },
                    '50%': { boxShadow: '0 0 22px rgba(16, 185, 129, 0.65)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            boxShadow: {
                'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.35)',
                'glow-red': '0 0 20px rgba(220, 38, 38, 0.3)',
                'glow-gold': '0 0 20px rgba(245, 158, 11, 0.35)',
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
                'hero-gradient': 'linear-gradient(135deg, #020617 0%, #022c22 50%, #0f172a 100%)',
            },
        },
    },
    plugins: [],
}
