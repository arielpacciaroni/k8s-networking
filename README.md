## k8s-networking (aurora)

This "simple" project is deployed using:

- EKS cluster with [eksctl](https://eksctl.io/introduction/) (Using cluster.yaml)
- kube-proxy, CoreDNS and VPC-CNI addons are a must
- [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) in the cluster
- [ALB Ingress Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html)
- [cert-manager](https://cert-manager.io/) / Certificate is manually created in AWS
- [ExternalDNS](https://github.com/kubernetes-sigs/external-dns) to automatically update DNS records
