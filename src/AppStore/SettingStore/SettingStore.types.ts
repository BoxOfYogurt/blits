/** Setting Store Types */

/**
 * User Prefrences
 */

export interface SettingStore {
  coreTime?: {
    from: string; // as HourTime;
    to: string; // as HourTime
    highLight: boolean;
  };
}
