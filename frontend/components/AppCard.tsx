import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '../constants/Theme';

interface AppCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'elevated' | 'flat' | 'outline';
}

export const AppCard: React.FC<AppCardProps> = ({
  children,
  style,
  variant = 'elevated',
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'elevated':
        return { ...SHADOWS.soft, backgroundColor: COLORS.surface };
      case 'flat':
        return { backgroundColor: COLORS.background };
      case 'outline':
        return { 
          backgroundColor: 'transparent', 
          borderWidth: 1, 
          borderColor: COLORS.divider 
        };
      default:
        return { ...SHADOWS.soft, backgroundColor: COLORS.surface };
    }
  };

  return (
    <View style={[styles.card, getVariantStyle(), style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: SPACING.md,
  },
});
