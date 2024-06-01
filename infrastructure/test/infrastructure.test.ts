import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Infrastructure from '../lib/infrastructure-stack';

test('SQS Queue Created', () => {
  const app = new cdk.App();
  const stack = new Infrastructure.InfrastructureStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300
  });
});