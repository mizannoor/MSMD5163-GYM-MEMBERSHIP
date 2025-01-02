@echo off
:: Tagging images
docker tag gym-membership-system-crud-service mexists/crud-service:latest
docker tag gym-membership-system-auth-service mexists/auth-service:latest
docker tag gym-membership-system-third-party mexists/third-party:latest

:: Pushing images to Docker Hub
docker push mexists/crud-service:latest
docker push mexists/auth-service:latest
docker push mexists/third-party:latest

:: Confirmation
echo All images have been pushed successfully!
pause
