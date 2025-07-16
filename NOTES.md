<!-- jPjw7RzU1vmRwxqH -->

CREATION OF EB instance

1. go to AWS console
2. type on Elastic Beanstalk
3. create environment

In step 1:

- chosse: web server environment
- give app name
- leave env information blank
- Platform: managed platform and Docker
- Presets: single instance (free tier eligible)

In step 2:

- service role: aws-elasticbeanstalk-service-role
- EC2 instance profile: aws-elasticbeanstalk-ec2-role
- Key pair is optional

In step 3:

- VPC: ignore
- Public IP: ENABLE (Most important)
- Mostly DATABASE we add env seperately so no
- tags none chosen for now

In step 4:

- Instances: all default
- Capacity: all default

In step 5:

- monitoring: all defaults
- email: give yours
- rolling updates defaults:

and click on create!

If health becomes ok after 2 - 3 minutes and you get this message all is fine:

---

Welcome to Your Elastic Beanstalk Application
Congratulations! Your Docker application is now running on your own dedicated environment in the AWS Cloud.

---

CREATING RDS POSTGRES
