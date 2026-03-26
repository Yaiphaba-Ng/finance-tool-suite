import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { Stack } from 'expo-router';
import { COLORS, SPACING, TYPOGRAPHY } from '@/constants/Theme';
import { AppCard } from '@/components/AppCard';
import { AppButton } from '@/components/AppButton';
import { calculateSIP, formatCurrency } from '@/utils/math';

export default function SIPCalculator() {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [results, setResults] = useState(calculateSIP(5000, 12, 10));

  useEffect(() => {
    setResults(calculateSIP(amount, rate, years));
  }, [amount, rate, years]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ title: 'SIP Calculator', headerTintColor: COLORS.primary }} />
      
      <AppCard style={styles.inputCard}>
        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Monthly Investment</Text>
            <Text style={styles.valueText}>{formatCurrency(amount)}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={500}
            maximumValue={100000}
            step={500}
            value={amount}
            onValueChange={setAmount}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.divider}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Expected Return Rate (p.a)</Text>
            <Text style={styles.valueText}>{rate}%</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={30}
            step={0.5}
            value={rate}
            onValueChange={setRate}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.divider}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Time Period (Years)</Text>
            <Text style={styles.valueText}>{years}Yr</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={40}
            step={1}
            value={years}
            onValueChange={setYears}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor={COLORS.divider}
          />
        </View>
      </AppCard>

      <View style={styles.resultContainer}>
        <View style={styles.resultRow}>
          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Invested Amount</Text>
            <Text style={styles.resultValue}>{formatCurrency(results.totalInvested)}</Text>
          </View>
          <View style={styles.resultItem}>
            <Text style={styles.resultLabel}>Est. Returns</Text>
            <Text style={[styles.resultValue, { color: COLORS.success }]}>
              {formatCurrency(results.estReturns)}
            </Text>
          </View>
        </View>
        
        <AppCard variant="flat" style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Value</Text>
          <Text style={styles.totalValue}>{formatCurrency(results.maturityValue)}</Text>
        </AppCard>
      </View>

      <AppButton 
        title="Invest Now (Get Started)" 
        onPress={() => alert('Lead Capture Form would show here')}
        style={styles.cta}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: SPACING.md,
  },
  inputCard: {
    marginBottom: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  label: {
    ...TYPOGRAPHY.body2,
    color: COLORS.textSecondary,
  },
  valueText: {
    ...TYPOGRAPHY.body1,
    fontWeight: '700',
    color: COLORS.primary,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  resultContainer: {
    marginBottom: SPACING.xl,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  resultItem: {
    width: '48%',
  },
  resultLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  resultValue: {
    ...TYPOGRAPHY.body1,
    fontWeight: '600',
  },
  totalCard: {
    alignItems: 'center',
    padding: SPACING.lg,
    backgroundColor: 'rgba(0, 77, 64, 0.05)',
  },
  totalLabel: {
    ...TYPOGRAPHY.body2,
    color: COLORS.textSecondary,
  },
  totalValue: {
    ...TYPOGRAPHY.h2,
    color: COLORS.primary,
    marginTop: 4,
  },
  cta: {
    marginTop: SPACING.md,
  },
});
