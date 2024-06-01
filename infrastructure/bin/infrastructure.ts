#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
const stackName = app.node.tryGetContext('stackName');
new InfrastructureStack(app, 'InfrastructureStack', {
    stackName: stackName
});