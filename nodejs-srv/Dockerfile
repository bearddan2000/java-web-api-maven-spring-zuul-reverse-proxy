FROM node:latest

# Install production dependencies.
WORKDIR /app

COPY bin/ ./

RUN npm i --save express \
    && npm i --save mysql

# Run the web service on container startup.
CMD ["node", "./index.js"]
