export interface SpApiConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  region?: string;
}

export function getSpApiConfig(): SpApiConfig {
  const requiredEnvVars = [
    'SP_API_CLIENT_ID',
    'SP_API_CLIENT_SECRET',
    'SP_API_REFRESH_TOKEN',
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  return {
    clientId: process.env.SP_API_CLIENT_ID!,
    clientSecret: process.env.SP_API_CLIENT_SECRET!,
    refreshToken: process.env.SP_API_REFRESH_TOKEN!,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: process.env.AWS_REGION || 'us-east-1'
  };
}
