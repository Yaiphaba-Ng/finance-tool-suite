export const COLORS = {
  primary: '#004D40', // Deep Teal/Emerald
  secondary: '#FFAB00', // Amber/Gold for accent
  background: '#F5F7FA', // Soft Slate White
  surface: '#FFFFFF',
  textPrimary: '#1A1A1A',
  textSecondary: '#666666',
  error: '#D32F2F',
  success: '#388E3C',
  divider: '#E0E0E0',
  cardShadow: '#0000000D',
};

export const DARK_COLORS = {
  primary: '#26A69A', // Lighter Teal for Dark Mode
  secondary: '#FFD740',
  background: '#0F172A', // Navy/Slate Dark
  surface: '#1E293B',
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  error: '#EF4444',
  success: '#10B981',
  divider: '#334155',
  cardShadow: '#00000040',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const TYPOGRAPHY = {
  h1: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: '700' as const, lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28 },
  body1: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  body2: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '500' as const, lineHeight: 16 },
  button: { fontSize: 16, fontWeight: '600' as const, lineHeight: 24 },
};

export const SHADOWS = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
  },
};
