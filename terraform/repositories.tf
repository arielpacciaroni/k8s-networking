resource "aws_ecr_repository" "microservice-auth" {
  name                 = "microservice-auth"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}