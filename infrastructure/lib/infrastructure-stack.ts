import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const queue = new sqs.Queue(this, 'InfrastructureQueue', {
      queueName: `${props?.stackName}-infrastructure-queue`,
      visibilityTimeout: cdk.Duration.seconds(300)
    });
  }
}
