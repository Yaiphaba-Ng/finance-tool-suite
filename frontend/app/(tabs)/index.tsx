import { StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '@/constants/Theme';
import { AppCard } from '@/components/AppCard';
import { AppButton } from '@/components/AppButton';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Good Morning,</Text>
          <Text style={styles.nameText}>App Investor</Text>
        </View>
        <Pressable style={styles.profileButton}>
          <FontAwesome name="user-circle-o" size={32} color={COLORS.primary} />
        </Pressable>
      </View>

      <AppCard style={styles.portfolioCard}>
        <View style={styles.portfolioInfo}>
          <Text style={styles.portfolioLabel}>Market Overview</Text>
          <Text style={styles.portfolioValue}>NIFTY 50</Text>
          <Text style={styles.portfolioChange}>+1.24% (+284.50)</Text>
        </View>
        <View style={styles.chartPlaceholder}>
          <FontAwesome name="line-chart" size={40} color="rgba(255,255,255,0.3)" />
        </View>
      </AppCard>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Investment Planning</Text>
        <View style={styles.calculatorGrid}>
          <Link href="/calculators/sip" asChild>
            <Pressable style={styles.calcItem}>
              <View style={[styles.iconBox, { backgroundColor: '#E0F2F1' }]}>
                <FontAwesome name="calculator" size={24} color={COLORS.primary} />
              </View>
              <Text style={styles.calcLabel}>SIP Calc</Text>
            </Pressable>
          </Link>
          <Link href="/(tabs)/tasks" asChild>
            <Pressable style={styles.calcItem}>
              <View style={[styles.iconBox, { backgroundColor: '#FFF8E1' }]}>
                <FontAwesome name="pie-chart" size={24} color="#FFA000" />
              </View>
              <Text style={styles.calcLabel}>Lumpsum</Text>
            </Pressable>
          </Link>
          <Link href="/(tabs)/tasks" asChild>
            <Pressable style={styles.calcItem}>
              <View style={[styles.iconBox, { backgroundColor: '#E1F5FE' }]}>
                <FontAwesome name="line-chart" size={24} color="#0288D1" />
              </View>
              <Text style={styles.calcLabel}>Planner</Text>
            </Pressable>
          </Link>
          <Link href="/(tabs)/tasks" asChild>
            <Pressable style={styles.calcItem}>
              <View style={[styles.iconBox, { backgroundColor: '#F3E5F5' }]}>
                <FontAwesome name="history" size={24} color="#7B1FA2" />
              </View>
              <Text style={styles.calcLabel}>Delay Cost</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Enquiries</Text>
        <View style={styles.actionRow}>
          <AppCard style={styles.actionCard}>
            <FontAwesome name="money" size={24} color={COLORS.primary} />
            <Text style={styles.actionCardTitle}>Personal Loan</Text>
            <Text style={styles.actionCardDesc}>Fast Approval</Text>
          </AppCard>
          <AppCard style={styles.actionCard}>
            <FontAwesome name="exchange" size={24} color={COLORS.primary} />
            <Text style={styles.actionCardTitle}>Currency</Text>
            <Text style={styles.actionCardDesc}>Best Rates</Text>
          </AppCard>
        </View>
      </View>

      <AppButton 
        title="Track My Financial Goals" 
        onPress={() => {}} 
        style={styles.ctaButton}
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
    paddingHorizontal: SPACING.md,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    backgroundColor: 'transparent',
  },
  headerTextContainer: {
    backgroundColor: 'transparent',
  },
  welcomeText: {
    ...TYPOGRAPHY.body1,
    color: COLORS.textSecondary,
  },
  nameText: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textPrimary,
  },
  profileButton: {
    padding: SPACING.xs,
  },
  portfolioCard: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.lg,
    marginBottom: SPACING.xl,
    height: 140,
  },
  portfolioInfo: {
    backgroundColor: 'transparent',
  },
  portfolioLabel: {
    color: 'rgba(255,255,255,0.7)',
    ...TYPOGRAPHY.caption,
    textTransform: 'uppercase',
  },
  portfolioValue: {
    color: COLORS.surface,
    ...TYPOGRAPHY.h2,
    marginVertical: SPACING.xs,
  },
  portfolioChange: {
    color: '#4ADE80',
    ...TYPOGRAPHY.body2,
    fontWeight: '600',
  },
  chartPlaceholder: {
    backgroundColor: 'transparent',
  },
  section: {
    marginBottom: SPACING.xl,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  calculatorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  calcItem: {
    width: (width - SPACING.md * 2 - SPACING.md * 3) / 4,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  calcLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  actionCard: {
    width: '48%',
    alignItems: 'flex-start',
    padding: SPACING.md,
  },
  actionCardTitle: {
    ...TYPOGRAPHY.body1,
    fontWeight: '600',
    marginTop: SPACING.sm,
  },
  actionCardDesc: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  ctaButton: {
    marginTop: SPACING.sm,
  },
});
