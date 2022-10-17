resource "aws_ecr_repository" "microservice-auth" {
  name                 = "microservice-auth"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

resource "aws_ecr_repository" "microservice-frontend" {
  name                 = "microservice-frontend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}