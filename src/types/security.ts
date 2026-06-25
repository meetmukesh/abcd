export interface SecuritySettings {
  minPasswordLength: number;
  requireSpecialChars: boolean;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  sessionTimeoutMinutes: number;
  maxFailedAttempts: number;
  lockoutDurationMinutes: number;
}

export const DEFAULT_SECURITY_SETTINGS: SecuritySettings = {
  minPasswordLength: 8,
  requireSpecialChars: true,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  sessionTimeoutMinutes: 30,
  maxFailedAttempts: 5,
  lockoutDurationMinutes: 15,
};
