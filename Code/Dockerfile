# Base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt ./

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY . .

# Informa ao Docker qual porta o container estará escutando
EXPOSE 5000

# Command to run on container start
CMD ["flask", "run", "--host=0.0.0.0"]

