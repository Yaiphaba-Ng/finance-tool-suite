import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '../constants/Theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface AppButtonProps {
  onPress: () => void;
  title: string;
  type?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  type = 'primary',
  style,
  textStyle,
  disabled = false,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.96);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return { backgroundColor: COLORS.primary };
      case 'secondary':
        return { backgroundColor: COLORS.secondary };
      case 'outline':
        return { 
          backgroundColor: 'transparent', 
          borderWidth: 1.5, 
          borderColor: COLORS.primary 
        };
      default:
        return { backgroundColor: COLORS.primary };
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'primary':
      case 'secondary':
        return { color: COLORS.surface };
      case 'outline':
        return { color: COLORS.primary };
      default:
        return { color: COLORS.surface };
    }
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[
        styles.button,
        getButtonStyle(),
        SHADOWS.soft,
        animatedStyle,
        style,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, getTextStyle(), textStyle]}>{title}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TYPOGRAPHY.button,
  },
  disabled: {
    opacity: 0.5,
  },
});
