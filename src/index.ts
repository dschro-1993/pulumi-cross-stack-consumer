import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

// org, project, env can be passed as config (based on stack)
const stackReference = new pulumi.StackReference('org-project-provider-env');

stackReference.getOutput('vpcId').apply((vpcId) => {
  console.debug(vpcId);
});
