ACCOUNT=$(aws sts get-caller-identity --query 'Account' --output text)
REGION=us-east-1
SECRET_NAME=${REGION}-ecr-registry
EMAIL=test@aws-ecr-pull.com

TOKEN=`aws ecr --region=$REGION get-authorization-token --output text --query authorizationData[].authorizationToken | base64 -d | cut -d: -f2`

kubectl delete secret --namespace k8s-networking --ignore-not-found $SECRET_NAME
kubectl create secret --namespace k8s-networking docker-registry $SECRET_NAME \
 --docker-server=https://$ACCOUNT.dkr.ecr.${REGION}.amazonaws.com \
 --docker-username=AWS \
 --docker-password="${TOKEN}" \
 --docker-email="${EMAIL}"