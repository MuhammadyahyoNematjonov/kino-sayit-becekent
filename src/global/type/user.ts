export enum UserRole {
  User = 'USER',
  Admin = 'ADMIN',
  SuperAdmin = 'SUPERADMIN',
}

export enum Tarif {
  free = 'Free',
  premium = 'Premium',
 
}

export enum Til {
  UZ = 'UZ',
  EN = 'EN',
  RU = 'RU',
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired',
  CANCELED = 'canceled',
  PENDING_PAYMENT = 'pending_payment',
}

export enum PaymentMethod {
  CARD = 'card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
  CRYPTO = 'crypto',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum VideoQuality {
  Q240 = '240p',
  Q360 = '360p',
  Q480 = '480p',
  Q720 = '720p',
  Q1080 = '1080p',
  Q4K = '4K',
}