FROM python:3.8

# ChromeDriver installation from https://gist.github.com/varyonic/dea40abcf3dd891d204ef235c6e8dd79
# We need wget to set up the PPA and xvfb to have a virtual screen and unzip to install the ChromeDriver
RUN apt-get update && apt-get install -y libgconf-2-4 wget xvfb unzip

# Install Chrome (compatible version with chromedriver below)
ARG CHROME_VERSION="122.0.6261.57"
RUN wget --no-verbose -O /tmp/chrome.zip https://storage.googleapis.com/chrome-for-testing-public/${CHROME_VERSION}/linux64/chrome-linux64.zip \
    && unzip /tmp/chrome.zip -d /opt/ \
    && rm /tmp/chrome.zip

# Set up ChromeDriver Environment variables
ENV CHROMEDRIVER_VERSION 122.0.6261.57
ENV CHROMEDRIVER_DIR /chromedriver
RUN mkdir $CHROMEDRIVER_DIR

# Download and install Chromedriver
RUN wget -q --continue -P $CHROMEDRIVER_DIR "https://storage.googleapis.com/chrome-for-testing-public/$CHROMEDRIVER_VERSION/linux64/chromedriver-linux64.zip" \
    && unzip $CHROMEDRIVER_DIR/chromedriver* -d $CHROMEDRIVER_DIR \
    && rm $CHROMEDRIVER_DIR/*.zip

# Put Chromedriver into the PATH
ENV PATH $CHROMEDRIVER_DIR:$PATH

# Assuming Google Chrome binary extracted contains all necessary files in a subdirectory, e.g., chrome-linux
# Update PATH to include the Google Chrome binary
ENV PATH /opt/chrome-linux64:$PATH

RUN mkdir -p /app/loconotion/
WORKDIR /app/loconotion/
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
ENTRYPOINT [ "python", "loconotion", "--chromedriver", "/chromedriver/chromedriver"]
